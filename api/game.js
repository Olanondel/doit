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

    return [data, lastVisible]
  },

  getGame(id) {

  }

  // end
})
