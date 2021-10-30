<template>
  <div>
    <div class='login'>
      <div class='login__title'>Sign up 2/2</div>

      <div class='login__form-wrapper'>
        <form class='login__form'>
          <BaseInput
            v-model='vUsername'
            :value='username'
            title='Username'
            class='login__input'
            :v='v.username'
            :disabled='isLoading'
          />


          <BaseSelect
            v-model='cCountry'
            :options='countries'
            title='Country'
            placeholder='Country'
            class='login__select'
            :v='v.country'
            :disabled='isLoading'
          />

          <BaseDatePicker
            v-model='cDateOfBirth'
            title='Date of birth'
            class='login__datepicker'
            :v='v.dob'
            :disabled='isLoading'
          />

          <div class='login__checkbox'>
            <BaseCheckbox
              v-model='cTermsAgree'
              text='I’m have at least 13 years of age and agree to the terms of service'
              :v='v'
              :disabled='isLoading'
            />
          </div>

          <BaseButton :disabled='isLoading' text='Create an account' @click='register' />
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import BaseSelect from '../../components/base/BaseSelect'
import BaseDatePicker from '../../components/base/BaseDatePicker'
import BaseCheckbox from '../../components/base/BaseCheckbox'

export default {
  name: 'Step-2',
  components: { BaseCheckbox, BaseDatePicker, BaseSelect },
  layout: 'auth',
  middleware: 'signup',
  auth: false,
  props: {
    username: { type: String, default: '' },
    country: { type: String, default: '' },
    dateOfBirth: { type: String, default: '' },
    termsAgree: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false },
    v: { type: Object },
  },
  data() {
    return {
      countries: ['Ukraine', 'USA', 'Russia', 'Canada'],
    }
  },
  computed: {
    vUsername: {
      get() { return this.username },

      set(v) { this.$emit('changeUsername', v) }
    },
    cCountry: {
      get() { return this.country },

      set(v) { this.$emit('changeCountry', v) }
    },
    cDateOfBirth: {
      get() { return this.dateOfBirth },

      set(v) { this.$emit('changeDateOfBirth', v) }
    },
    cTermsAgree: {
      get() { return this.termsAgree },

      set(v) { this.$emit('changeTermsAgree', v) }
    },
  },
  methods: {
    register() {
      this.v.$touch()

      if (!this.v.$invalid) {
        this.$emit('register')
      }
    }
  },
}
</script>

<style lang='scss' scoped>
.login {
  &__input {
    margin-bottom: 16px;
  }

  &__select {
    margin-bottom: 16px
  }

  &__datepicker {
    margin-bottom: 16px
  }

  &__checkbox {
    margin-bottom: 22px
  }
}
</style>
