export default fb => ({
  async setTournament(payload, id) {
    await fb.firestore.collection('tournaments').doc(id).set(payload)
  },

  async saveTournament(payload) {
    await fb.firestore.collection('tournaments').doc(payload.id).update(payload)
  },

  async removeTournament(id) {
    await fb.firestore.collection('tournaments').doc(id).delete()
  },

  async uploadImage(id, file, fileName, subFolder) {
    const storage = fb.storage.ref()

    const fileRef = subFolder ? storage.child(`tournaments/${id}/${subFolder}/${fileName}`) : storage.child(`tournaments/${id}/${fileName}`)

    await fileRef.put(file)

    return fileRef.getDownloadURL()
  },

  async removeImage(id, fileName, subFolder) {
    const storage = fb.storage.ref()

    const fileRef = subFolder ? storage.child(`tournaments/${id}/${subFolder}/${fileName}`) : storage.child(`tournaments/${id}/${fileName}`)

    await fileRef.delete()
  },

  async getTournamentsWithId(gameId) {
    const ref = await fb.firestore.collection('tournaments').where('game.game.id', '==', gameId)

    const res = await ref.get()

    return res.docs.map(el => el.data())
  },

  async getTournament(id) {
    const data = await fb.firestore.collection('tournaments').doc(id).get()

    return data.data()
  }
})
