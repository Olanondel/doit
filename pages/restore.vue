<template>
  <section class='restore-container'>
    <div class='restore'>

      <div class='restore__title auth-title'>Forgot password</div>

      <BaseInput class='restore__input' text='Username or Email' />

      <BaseButton text='Reset password' />

      <div class='restore__bottom'>
        <div class='restore__fg-password'>
          <nuxt-link to=''>Back to login</nuxt-link>
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
}
</script>

<style lang='scss' scoped>

.restore {
  max-width: 270px;
  max-height: 572px;
  display: flex;
  align-items: center;
  flex-direction: column;

  &__input {
    margin-bottom: 22px;
  }

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
  }}
</style>
