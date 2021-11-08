export default fb => ({

  async setTeam(payload) {
    const id = payload.id ? payload.id : fb.firestore.collection('teams').doc().id

    await fb.firestore.collection('teams').doc(id).set(payload)
  },

  async saveTeam(payload) {
    const id = payload.id ? payload.id : fb.firestore.collection('teams').doc().id

    await fb.firestore.collection('teams').doc(id).update(payload)
  },

  async updateTeam(payload, id) {
    await fb.firestore.collection('teams').doc(id).update(payload)
  },

  async getTeam(id) {
    const res = await fb.firestore.collection('teams').doc(id).get()

    return res.data()
  },

  async getTeamsFromArray(teamsArray) {

    const teams = []

    if (teamsArray && teamsArray.length) {
      await Promise.all(teamsArray.map(async el => {
        const data = await fb.firestore.collection('teams').doc(el).get()

        teams.push(data.data())
      }))
    }

    return teams.length ? teams : []

  },

  async getTeams(limit, startAfter, id) {
    let ref = startAfter
      ? await fb.firestore.collection('teams').orderBy('id').startAfter(startAfter).limit(limit)
      : await fb.firestore.collection('teams').orderBy('id').limit(limit)

    ref = id ? ref.where('leaderId', '==', id) : ref

    const res = await ref.get()

    const lastVisible = res.docs[res.docs.length - 1]

    const data = res.docs.map(el => el.data())

    return [data, lastVisible]
  },

  async removeTeam(id) {
    await fb.firestore.collection('teams').doc(id).delete()
  }

})
