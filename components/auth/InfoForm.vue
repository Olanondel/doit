<template>
  <div class='login'>
    <div class='login__title'>{{title}}</div>

    <div class='login__form-wrapper'>
      <form class='login__form'>
        <BaseInput
          :text='firstLabelText'
          class='login__input'
        />

        <BaseSelect />

        <BaseDatePicker />

        <BaseCheckbox text='I’m have at least 13 years of age
and agree to the terms of service' />

        <BaseButton :text='buttonText' />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoForm',
  props: {
    title: String,
    socialText: String,
    firstLabelText: String,
    secondLabelText: String,
    buttonText: String

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
  }
}
</script>

<style lang='scss' scoped>
.login {
  margin-bottom: 30px;

  &__title {
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 32px;
    color: #E6E6E6;
  }

  &__input {
    margin-bottom: 22px;
  }

  &__form {
    margin-bottom: 30px;
  }

  &__with {
    text-align: center;
  }

  &__social-text {
    margin-bottom: 16px;
  }

  &__social-list {
    display: flex;
    justify-content: space-between;
  }

  &__social-item {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 1px solid #16263D;
    cursor: pointer;
  }

  .facebook {
    background: transparent url("~/assets/img/icons/auth/facebook.svg") no-repeat center;
  }

  .social {
    background: transparent url("~/assets/img/icons/auth/social.svg") no-repeat center;
  }

  .google {
    background: transparent url("~/assets/img/icons/auth/google.svg") no-repeat center;
  }

  .steam {
    background: transparent url("~/assets/img/icons/auth/steam.svg") no-repeat center;
  }
}
</style>
