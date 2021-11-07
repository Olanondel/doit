  <template>
  <section class='login-container'>
    <div class='login-page'>

      <div class='login'>
        <div class='login__title'>Login</div>

        <div class='login__form-wrapper'>
          <form class='login__form'>
            <BaseInput
              v-model='email'
              title='Username or Email'
              class='login__input'
              :v='$v.email'
              :disabled='isLoading'
            />
            <BaseInput
              v-model='password'
              title='Password'
              class='login__input'
              type='password'
              :v='$v.password'
              :disabled='isLoading'
            />
            <BaseButton :disabled='isLoading' text='Login' @click='login' />
          </form>

          <div class='login__with'>
            <div class='login__social-text'>or login with</div>
            <ul class='login__social-list'>
              <li class='login__social-item facebook'></li>
              <li class='login__social-item social'></li>
              <li class='login__social-item google'></li>
              <li class='login__social-item steam'></li>
            </ul>
          </div>
        </div>
      </div>

      <div class='login-page__bottom'>
        <div class='login-page__fg-password'>
          <nuxt-link to=''>Forgot password?</nuxt-link>
        </div>
        <div>Don't have an account?
          <router-link to='/signup/step-1'>Sign up!</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import { email, maxLength, minLength, required } from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  components: {},
  layout: 'auth',
  data() {
    return {
      email: 'prbaoleg@gmail.com', // prbaoleg@gmail.com
      password: 'zfvnmmn', // zfvnmmn
      isLoading: false,

      social: [
        { title: 'facebook', icon: '~/assets/img/auth/facebook.svg' },
        { title: 'social', icon: '~/assets/img/auth/social.svg' },
        { title: 'google', icon: '~/assets/img/auth/google.svg' },
        { title: 'steam', icon: '~/assets/img/auth/steam.svg' }
      ]
    }
  },
  validations: {
    email: {
      email,
      required,
      minLength: minLength(3),
      maxLength: maxLength(18),
    },
    password: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(16),
    }
  },
  methods: {
    async login() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        try {
          this.isLoading = true

          await this.$api.auth.login(this.email, this.password)

          await this.$auth.loginWith('local', { data: { email: this.email, password: this.password } })
        } catch (err) {
          alert(err)
          this.isLoading = false
        }
      }
    },
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

.login__input {
  margin-bottom: 22px !important;
}
</style>
