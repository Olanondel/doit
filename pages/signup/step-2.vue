<template>
  <div>
    <div class='login'>
      <div class='login__title'>Sign up 2/2</div>

      <div class='login__form-wrapper'>
        <form class='login__form'>
          <BaseInput
            v-model='username'
            text='Username'
            class='login__input'
          />


          <BaseSelect class='login__select' />

          <BaseDatePicker class='login__datepicker' />

          <div class='login__checkbox'>
            <BaseCheckbox
              text='I’m have at least 13 years of age and agree to the terms of service'
            />
          </div>

          <BaseButton @click='register' text='Create an account' />
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
  components: { BaseCheckbox, BaseDatePicker, BaseSelect }
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
