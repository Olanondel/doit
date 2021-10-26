<template>
  <section v-if='!$auth.loggedIn' class='greetings'>
    <div class='greetings__content'>
      <h1 class='greetings__title'>Doit <span class='hidden-on-mobile'>beta</span></h1>
      <div class='greetings__text'>
        Prepare for your esports career and get ready for awesome tournaments with big prize pools and many fun!
        Register Now!
      </div>

      <AuthButtons class='hidden-on-mobile greetings__auth-buttons' />
    </div>
  </section>
</template>

<script>
import AuthButtons from '../auth/AuthButtons'
export default {
  name: 'Greetings',
  components: { AuthButtons }
}
</script>

<style lang='scss' scoped>
.greetings {
  margin-bottom: 130px;
  width: 100%;
  max-height: 760px;
  padding: 14% 0 40%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: transparent url('@/assets/img/bg/on-main-top.png') no-repeat top/contain;

@media (max-width: 991px) {

}

@media (max-width: 680px) {
  background-position: center;

}

@media (max-width: 480px) {
  background-position: center;
}

&__content {
   max-width: 650px;
   text-align: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

@media (max-width: 991px) {
//margin-top: 8%;
}

@media (max-width: 680px) {
//margin-top: 16%;
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
  line-height: 96px;
}

@media (max-width: 680px) {
  font-size: 84px;
  line-height: 84px;
  margin-bottom: 8px;
}
}

&__text {
   max-width: 463px;
   text-align: center;
   font-size: 16px;
   line-height: 24px;
   color: #CCCCCC;
   margin-bottom: 26px;

@media (max-width: 680px) {
  font-size: 14px;
  line-height: 21px;
}
}

&__auth-buttons {
   flex: 1 1 auto;
 }
}
</style>
