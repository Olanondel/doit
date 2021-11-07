import firebase from 'firebase'

export default fb => ({

  // start

  async getProfile(uid) {
    const data = await fb.firestore.collection('players').doc(uid).get()

    return data.data()
  },

  async getOwnProfile() {
    const user = fb.auth.currentUser
    console.log(user)

    const data = await fb.firestore.collection('players').doc(user.localId).get()

    return data.data()
  },

  async updateProfile(uid, payload) {
    const ref = await fb.firestore.collection('players').doc(uid)

    await ref.update(payload)
  },

  async changePassword(currentPassword, newPassword) {
    const user = fb.auth.currentUser

    await this.reauthenticate(currentPassword)

    await user.updatePassword(newPassword)
  },

  async changeEmail(currentPassword, newEmail) {
    const user = fb.auth.currentUser

    await this.reauthenticate(currentPassword)

    await user.updateEmail(newEmail)
  },

  async removeAccount(currentPassword) {
    const user = fb.auth.currentUser

    await this.reauthenticate(currentPassword)

    await user.delete()
  },

  async login(email, password) {
    await fb.auth.signInWithEmailAndPassword(email, password)
  },

  async logout() {
    const user = fb.auth.currentUser

    await user.signOut()
  },

  async reauthenticate(password) {
    const user = fb.auth.currentUser
    console.log(user)

    const credential = await firebase.auth.EmailAuthProvider.credential(user.email, password)

    await user.reauthenticateWithCredential(credential)
  },

  async addOwnTeam(uid, team) {
    const ref = await fb.firestore.collection('players').doc(uid)

    await ref.update({
      myTeams: firebase.firestore.FieldValue.arrayUnion(team)
    })
  },

  async removeOwnTeam(uid, team) {
    const ref = await fb.firestore.collection('players').doc(uid)

    await ref.update({
      myTeams: firebase.firestore.FieldValue.arrayRemove(team)
    })
  }


  // end

})
