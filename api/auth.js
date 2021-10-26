import firebase from 'firebase'

export default fb => ({

  // start

    async facebook() {
      const provider = new firebase.auth.FacebookAuthProvider()

      const result = await fb.auth.signInWithPopup(provider)

      console.log(result)
    }

  // end

})
