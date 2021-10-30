<template>
  <div>
    <div class='login'>
      <div class='login__title'>Sign up 1/2</div>

      <div class='login__form-wrapper'>
        <form class='login__form'>
          <BaseInput
            v-model='cEmail'
            :value='email'
            title='Email'
            class='login__input'
            :v='v.email'
            error-text='fuck!'
            :disabled='isLoading'
          />
          <BaseInput
            v-model='cPassword'
            :value='password'
            title='Password'
            class='login__input'
            type='password'
            :v='v.password'
            :disabled='isLoading'
          />

          <BaseButton :disabled='isLoading' text='next step' @click='nextStep' />
        </form>

        <div class='login__with'>
          <div class='login__social-text'>or signup with</div>
          <ul class='login__social-list'>
            <li
              v-for='(item, index) in social'
              :key='index'
              class='login__social-item'
              :class='item.title'
            ></li>
          </ul>
        </div>
      </div>
    </div>

    <div class='bottom-links'>
      <nuxt-link to='/login'>Already have an account?</nuxt-link>
    </div>
  </div>
</template>

<script>

import BaseButton from '../../components/base/BaseButton'
export default {
  name: 'step-1',
  components: { BaseButton  },
  auth: false,
  layout: 'auth',
  props: {
    email: { type: String, default: '' },
    password: { type: String, default: '' },
    v: { type: Object },
    isLoading: { type: Boolean, default: false },
  },
  data() {
    return {
      social: [
        { title: 'facebook', icon: '~/assets/img/auth/facebook.svg' },
        { title: 'social', icon: '~/assets/img/auth/social.svg' },
        { title: 'google', icon: '~/assets/img/auth/google.svg' },
        { title: 'steam', icon: '~/assets/img/auth/steam.svg' },
      ]
    }
  },
  computed: {
    cEmail: {
      get() { return this.email },

      set(v) { this.$emit('changeEmail', v) }
    },
    cPassword: {
      get() { return this.password },

      set(v) { this.$emit('changePassword', v) }
    },
  },
  methods: {
    nextStep() {
      this.v.email.$touch()
      this.v.password.$touch()

      if (!this.v.email.$invalid && !this.v.password.$invalid) {
        this.$router.push('step-2')
      }
    }
  },
}
</script>

<style scoped>

</style>
