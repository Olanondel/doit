export default fb => ({
  // start

  async setNews(payload) {
    const id = payload.id ? payload.id : fb.firestore.collection('news').doc().id

    await fb.firestore.collection('news').doc(id).set(payload)
  },

  async getNewses(limit, startAfter) {
    const ref = startAfter
      ? await fb.firestore.collection('news').orderBy('id').startAfter(startAfter).limit(limit)
      : await fb.firestore.collection('news').orderBy('id').limit(limit)

    const res = await ref.get()

    const lastVisible = res.docs[res.docs.length - 1]

    const data = res.docs.map(el => el.data())

    return [data, lastVisible]
  },

  async getNews(id) {
    const res = await fb.firestore.collection('news').doc(id).get()

    return res.data()
  },

  async removeNews(id) {
    await fb.firestore.collection('news').doc(id).delete()
  },


  // end
})

