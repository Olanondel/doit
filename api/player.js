export default fb => ({
  async setUser(uid, user) {
    await fb.firestore.collection('players').doc(uid).set(user)
  },
  async getUser(uid) {
    const res = await fb.firestore.collection('players').doc(uid).get()

    return res.data()
  },
  async removeUser(id) {
    await fb.firestore.collection('players').doc(id).delete()

    await fb.auth.currentUser.delete()
  },
  async getUsers(limit, startAfter) {
    const ref = startAfter
      ? await fb.firestore.collection('players').orderBy('id').startAfter(startAfter).limit(limit)
      : await fb.firestore.collection('players').orderBy('id').limit(limit)

    const res = await ref.get()

    const lastVisible = res.docs[res.docs.length - 1]

    const data = res.docs.map(el => el.data())

    return [data, lastVisible]
  },


})
