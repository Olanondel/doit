<template>
  <section class='main-layout'>

    <Sidebar />

    <div class='content-wrapper'>
      <div class='top'>
        <Navigation />

        <AuthButtons v-if='!$auth.loggedIn' />
        <ProfileBar class='hidden-on-mobile' v-else />
      </div>


      <Nuxt />
    </div>

  </section>
</template>

<script>
import AuthButtons from '../components/auth/AuthButtons'
import ProfileBar from '../components/auth/ProfileBar'
import Navigation from '@/components/layout/default/Navigation'
import Sidebar from '@/components/layout/default/Sidebar'

export default {
  components: { ProfileBar, AuthButtons, Navigation, Sidebar },
  data() {
    return {
      isAuth: false
    }
  },
}
</script>

<style lang='scss' scoped>
.main-layout {
  min-height: 100vh;
  padding-left: 113px;
  background: linear-gradient(180deg, #0F1215 0%, rgba(15, 18, 21, 0) 32.81%, rgba(15, 18, 21, 0) 79.69%, #0F1215 100%), url('@/assets/img/home-bg.jpg'), #0F1215;


  @media (max-width: 991px) {
    padding-left: 80px;
  }

  @media (max-width: 767px) {
    padding-left: 0;
  }
}

.content-wrapper {
  max-width: 1100px;
  padding: 0 15px 0 15px; // 128
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 991px) {
    padding: 0 15px 0 15px; // 95
  }

  @media (max-width: 767px) {
    padding: 0 15px 0 15px;
    margin-bottom: 80px;

  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 32px 0 54px 0;

    @media screen and (max-width: 680px) {
      flex-direction: column;
      margin: 16px 16px 36px;
    }

    .upper-mobile {
      @media screen and (max-width: 680px) {
        display: none;
      }
    }
  }
}
</style>
