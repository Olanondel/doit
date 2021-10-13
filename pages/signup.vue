<template>
  <section class='signup-container'>
    <nuxt-child
      :email='email'
      :password='password'
      :username='username'
      :country='country'

      @changeEmail='changeEmail'
      @changePassword='changePassword'
      @changeUsername='changeUsername'
      @changeCountry='changeCountry'
      @register='register'
    />
  </section>
</template>

<script>

export default {
  name: 'Signup',
  auth: false,
  components: {},
  layout: 'auth',
  data() {
    return {
      email: '123',
      password: '321',
      username: '',
      country: '',
      dob: '',
      created: ''
    }
  },
  methods: {
    async register() {
      const auth = await this.$fire.auth.createUserWithEmailAndPassword(this.email, this.password)

      await this.$fire.firestore.collection('Players').doc(auth.user.uid).set({
        email: this.email,
        password: this.password,
        username: this.username,
        country: this.country,
        dob: this.dob,
        created: this.created,
        uid: 'auth.user.uid',
      })

      console.log('success')
    },
    changeEmail(email) {
      this.email = email
    },
    changePassword(password) {
      this.password = password
    },
    changeUsername(username) {
      this.username = username
    },
    changeCountry(country) {
      this.country = country
    },
  }
}
</script>

<style lang='scss' scoped>

</style>
