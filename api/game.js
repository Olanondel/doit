export default fb => ({
  // start

  async setGame(payload) {
    const id = payload.id ? payload.id : fb.firestore.collection('games').doc().id

    await fb.firestore.collection('games').doc(id).set(payload)
  },

  async getGames(limit, startAfter) {
    const ref = startAfter
      ? await fb.firestore.collection('games').orderBy('name').startAfter(startAfter).limit(limit)
      : await fb.firestore.collection('games').orderBy('name').limit(limit)

    const res = await ref.get()

    const lastVisible = res.docs[res.docs.length - 1]

    const data = res.docs.map(el => el.data())

    return limit ? [data, lastVisible] : data
  },

  async getGame(id) {
    const res = await fb.firestore.collection('games').doc(id).get()

    return res.data()
  },

  async removeGame(id) {
    await fb.firestore.collection('games').doc(id).delete()
  },

  async uploadCapsules(capsules, id) {
    const ref = await fb.storage.ref()

    const copyCapsules = [...capsules]

    await Promise.all(capsules.map(async (capsule, index) => {
      if (capsule.wasChanged) {
        const folder = capsule.title.replace(/\s+/g, '')
        const fileRef = ref.child(`games/${id}/${folder}/${capsule.name}`)

        if (capsule.initialName) {
          const initialRef = ref.child(`games/${id}/${folder}/${capsule.initialName}`)

          await initialRef.delete()
        }

        await fileRef.put(capsule.image)

        copyCapsules[index].image = await fileRef.getDownloadURL()
        copyCapsules[index].initialName = capsule.name
        copyCapsules[index].wasChanged = false
      }

      return null
    }))

    return copyCapsules
  },

  async removeCapsules(capsules, id) {
    const ref = await fb.storage.ref()

    await Promise.all(
      capsules.map(async el => {
        if (el.initialName) {
          const folder = el.title.replace(/\s+/g, '')
          const fileRef = ref.child(`games/${id}/${folder}/${el.initialName}`)

          await fileRef.delete()
        }
      })
    )
  },

  async uploadMaps(maps, id) {
    const mapsCopy = [...maps]

    await Promise.all(mapsCopy.map(async (el, index) => {
      const ref = await fb.storage.ref()

      if (el.initialImage && el.wasChanged) {
        const initialFileRef = await ref.child(`games/${id}/maps/map-${index}/${el.initialImage}`)

        await initialFileRef.delete()
      }

      if (el.wasChanged) {
        const fileRef = await ref.child(`games/${id}/maps/map-${index}/${el.fileName}`)

        await fileRef.put(el.image)

        mapsCopy[index].image = await fileRef.getDownloadURL()
        mapsCopy[index].initialImage = el.fileName
      }

    }))

    return mapsCopy
  }

  // end
})
