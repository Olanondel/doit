export default fb => ({

  async uploadImage(image, folder, id, name) {
    const ref = await fb.storage.ref()

    const fileRef = ref.child(`${folder}/${id}/${name}`)

    await fileRef.put(image)

    return await fileRef.getDownloadURL()
  },

  async removeImage(folder, id, fileName) {
    const ref = await fb.storage.ref()

    const fileRef = ref.child(`${folder}/${id}/${fileName}`)

    await fileRef.delete()
  },

  async getId(folder) {
    const res =  await fb.firestore.collection(folder).doc()

    return res.id
  },

  async setSupportForm(payload) {
    const ref = fb.firestore.collection('support')

    await ref.add(payload)
  }

})
