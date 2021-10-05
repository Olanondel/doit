<template>
  <div>
    <div class='login'>
      <div class='login__title'>Sign up 1/2</div>

      <div class='login__form-wrapper'>
        <form class='login__form'>
          <BaseInput
            v-model='email'
            text='Email'
            class='login__input'
          />
          <BaseInput
            v-model='password'
            text='Password'
            class='login__input'
            type='password'
          />
          <BaseButton @click='nextStep' text='Next step' />
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
      <nuxt-link to=''>Already have an account?</nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'step-1',
  components: {  },
  data() {
    return {
      email: '',
      password: '',
      social: [
        { title: 'facebook', icon: '~/assets/img/auth/facebook.svg' },
        { title: 'social', icon: '~/assets/img/auth/social.svg' },
        { title: 'google', icon: '~/assets/img/auth/google.svg' },
        { title: 'steam', icon: '~/assets/img/auth/steam.svg' },
      ]
    }
  },
  methods: {
    nextStep() {
      this.router.push('/signup/step-2')
    }
  }
}
</script>

<style scoped>

</style>
