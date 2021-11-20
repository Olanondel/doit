export default fb => ({

  async uploadImage(image, folder, id, name, subFolder) {
    const ref = await fb.storage.ref()

    const fileRef = subFolder ? ref.child(`${folder}/${id}/${subFolder}/${name}`) : ref.child(`${folder}/${id}/${name}`)

    await fileRef.put(image)

    return await fileRef.getDownloadURL()
  },

  async removeImage(folder, id, fileName, subFolder) {
    const ref = await fb.storage.ref()

    const fileRef = subFolder ? ref.child(`${folder}/${id}/${subFolder}/${fileName}`) : ref.child(`${folder}/${id}/${fileName}`)

    await fileRef.delete()
  },

  async getId(folder) {
    const res =  await fb.firestore.collection(folder).doc()

    return res.id
  },

  async setSupportForm(payload) {
    const ref = fb.firestore.collection('support')

    await ref.add(payload)
  },

  async set(folder, id, payload) {
   await fb.firestore.collection(folder).doc(id).set(payload)
  },

  async update(folder, id, payload) {
    await fb.firestore.collection(folder).doc(id).update(payload)
  },

  async get(folder) {
    const chunk = await fb.firestore.collection(folder).get()

    return chunk.docs.map(el => el.data())
  },

  async getOne(folder, id) {
    const element = await fb.firestore.collection(folder).doc(id).get()

    return element.data()
  },

  async remove(folder, id) {
    await fb.firestore.collection(folder).doc(id).delete()
  }

})
