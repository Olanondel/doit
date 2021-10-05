<template>
  <div class='auth-layout'>
    <div class='auth'>
      <div class='auth__logo-container'>
        <nuxt-link to='/' class='auth__logo-image'></nuxt-link>
      </div>

      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'empty',
}
</script>

<style lang='scss'>
.auth-layout {
  background: #0B1729;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth {
  max-width: 400px;

  &__logo-container {
    text-align: center;
    margin-bottom: 44px;
  }

  &__logo-image {
    width: 88px;
    height: 80px;
    margin: auto;
    display: inline-block;
    background: transparent url("~/assets/img/logotype.svg") no-repeat center/contain;
  }

  a {
    color: #0A68F5;
  }

  .bottom-links {
    text-align: center;
  }
}

.login {
  margin-bottom: 30px;
  max-width: 241px;

  &__title {
    margin-bottom: 30px;
    text-align: center;
    font-weight: bold;
    font-size: 32px;
    line-height: 32px;
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
