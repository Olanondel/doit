<template>
  <div class='auth-buttons hidden-on-mobile'>
    <nuxt-link class='auth-buttons__login auth-btn' to='login'>Login</nuxt-link>
    <nuxt-link class='auth-buttons__signup auth-btn' to='signup/step-1'>Sign up</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'AuthButtons',
  components: {  }
}
</script>

<style lang='scss' scoped>
.auth-buttons {
  flex: 0 1 233px;
  max-width: 233px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 680px) {
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1 1 auto;
    max-width: 328px;
    width: 100%;
    gap: 12px;
  }

  .auth-btn {
    font-weight: 700;
    font-size: 16px;
    line-height: 18.96px;
    text-align: center;
    display: inline-block;
    color: #F5F5F5;
    max-height: 44px;
    padding: 12px 0;
    border-radius: 2px;

    @media screen and (max-width: 680px) {
      padding: 16px 0;
      min-height: 48px;
      width: 100%;
      flex: 1 1 auto;
      margin: 0 23px;
    }
  }

  &__login {
    flex: 0 1 105px;
    background: #1A222D;
  }

  &__signup {
    flex: 0 1 120px;
    background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
  }
}
</style>
