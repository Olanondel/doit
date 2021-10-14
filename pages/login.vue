<template>
  <section class='login-container'>
    <div class='login-page'>

      <div class='login'>
        <div class='login__title'>Login</div>

        <div class='login__form-wrapper'>
          <form class='login__form'>
            <BaseInput
              v-model='email'
              text='Username or Email'
              class='login__input'
            />
            <BaseInput
              v-model='password'
              text='Password'
              class='login__input'
              type='password'
            />
            <BaseButton text='Login' @click='login' />
          </form>

          <div class='login__with'>
            <div class='login__social-text'>or login with</div>
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

      <div class='login-page__bottom'>
        <div class='login-page__fg-password'>
          <nuxt-link to=''>Forgot password?</nuxt-link>
        </div>
        <div>Don't have an account?
          <router-link to=''>Sign up!</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Login',
  components: {},
  layout: 'auth',
  data() {
    return {
      email: 'prbaoleg@gmail.com',
      password: 'zfvnmmn',
      social: [
        { title: 'facebook', icon: '~/assets/img/auth/facebook.svg' },
        { title: 'social', icon: '~/assets/img/auth/social.svg' },
        { title: 'google', icon: '~/assets/img/auth/google.svg' },
        { title: 'steam', icon: '~/assets/img/auth/steam.svg' }
      ]
    }
  },
  methods: {
    async login() {
      try {
        const data = await this.$auth.loginWith('local', { data: { email: this.email, password: this.password } })

        this.$auth.setUser(data.data)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang='scss'>

.login-page {
  max-width: 240px;
  max-height: 572px;
  display: flex;
  align-items: center;
  flex-direction: column;

  &__form {
    margin-bottom: 30px;
  }

  &__bottom {
    text-align: center;
    color: #627CA3;

    a {
      color: #0A68F5;
    }
  }

  &__fg-password {
    margin-bottom: 12px;
  }
}
</style>
