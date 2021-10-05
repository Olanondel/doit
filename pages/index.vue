<template>
  <div class='home-wrapper content'>
    <section v-if='!isAuth' class="greetings">
      <div class='greetings__content'>
        <h1 class='greetings__title'>Doit <span class='hidden-on-mobile'>beta</span></h1>
        <div class='greetings__text'>
          Prepare for your esports career and get ready for awesome tournaments with big prize pools and many fun!
          Register Now!
        </div>
        <AuthButtons class='hidden-on-mobile greetings__auth-buttons' />
      </div>
    </section>
  </div>
</template>
<script>
import AuthButtons from '../components/auth/AuthButtons'
export default {
  components: { AuthButtons },
  data() {
    return {
      isAuth: false
    }
  },
  methods: {

  },
}
</script>
<style lang='scss' scoped>
.home-wrapper {
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.greetings {
  width: 100%;
  flex: 1 0 auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: transparent url('@/assets/img/bg/on-main-top.png') no-repeat top/cover;

  @media (max-width: 991px) {
  }

  &__content {
    margin-top: 12%;
    max-width: 650px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 991px) {
      margin-top: 8%;
    }

    @media (max-width: 680px) {
      margin-top: 16%;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 125px;
    line-height: 125px;
    color: #F5F5F5;
    text-transform: uppercase;
    margin-bottom: 17px;

    @media (max-width: 991px) {
      font-size: 96px;
    }

    @media (max-width: 680px) {
      font-size: 84px;
    }
  }

  &__text {
    max-width: 463px;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    color: #CCCCCC;
    margin-bottom: 26px;
  }

  &__auth-buttons {
    flex: 1 1 auto;
  }
}
</style>
