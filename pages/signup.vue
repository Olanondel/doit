<template>
  <section class='signup-container'>
    <nuxt-child
      :email='email'
      :password='password'
      :username='username'
      :country='country'
      :terms-agree='isTermsAgree'
      :v='$v'
      :isLoading='isLoading'

      @changeEmail='changeEmail'
      @changePassword='changePassword'
      @changeUsername='changeUsername'
      @changeCountry='changeCountry'
      @changeDateOfBirth='changeDateOfBirth'
      @changeTermsAgree='changeTermsAgree'
      @register='register'
    />
  </section>
</template>

<script>

import { maxLength, minLength, required } from 'vuelidate/lib/validators'
import email from 'vuelidate/lib/validators/email'

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
      created: '',
      isTermsAgree: false,
      isLoading: false
    }
  },
  validations: {
    email: {
      required,
      email,
      minLength: minLength(3),
      maxLength: maxLength(18)
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(18)
    },
    username: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(12)
    },
    country: {
      required
    },
    dob: {
      required
    },
    isTermsAgree: {
      required
    }
  },
  methods: {
    async register() {
      this.isLoading = true

      try {
        const auth = await this.$fire.auth.createUserWithEmailAndPassword(this.email, this.password)
        const user = auth.user

        await this.$fire.firestore.collection('players').doc(auth.user.uid).set({
          email: this.email,
          password: this.password,
          username: this.username,
          country: this.country,
          created: user.metadata.creationTime,
          dob: this.dob,
          id: user.uid,
          name: '',
          sex: '',
          age: '',
          nationality: '',
          site: '',
          url: '',
          avatar: ''
        })

        await this.$auth.loginWith('local', { data: { email: this.email, password: this.password } })
        await this.$router.push('/')
        this.isLoading = false
      } catch (err) {
        this.isLoading = false
        alert(err)
      }

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
    changeDateOfBirth(dob) {
      this.dob = dob
    },
    changeTermsAgree(v) {
      this.isTermsAgree = v
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
