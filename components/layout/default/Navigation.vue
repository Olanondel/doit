<template>
  <nav class='nav'>
    <div class='logotype'>
      <nuxt-link to='/'>
        <img src='@/assets/img/logotype.svg' alt='logotype' class='logotype__image'>
      </nuxt-link>
    </div>

    <div class='nav__list-wrapper'>

      <div ref='nav__burger-icon' @click='toggleMenu' class='nav__burger-icon'></div>

      <div ref='nav-group' class='nav__group'>
        <ul class='nav__list'>
          <nuxt-link
            v-for='item in nav'
            :key='item.to'
            tag='li'
            no-prefetch
            class='nav__item'
            :to='item.to'>
            {{ item.text }}
          </nuxt-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navigation',
  components: {  },
  data() {
    return {
      nav: [
        { text: 'Play', to: 'play' },
        { text: 'News', to: 'news' },
        { text: 'Games', to: 'games' },
        { text: 'Shop', to: 'shop' },
        { text: 'Sponsorship', to: 'sponsorship' }
      ],
      isAuth: false
    }
  },
  methods: {
    toggleMenu() {
      this.$refs['nav__burger-icon'].classList.toggle('nav__burger-icon_open')
      this.$refs['nav-group'].classList.toggle('nav__group_open')
      // document.body.style.overflow = (document.body.style.overflow === 'hidden') ? 'visible' : 'hidden'
    }
  }
}
</script>

<style lang='scss' scoped>

.nav {
  display: flex;
  flex: 0 1 695px;
  align-items: center;
  margin-right: 15px;

  @media screen and (max-width: 680px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    flex: 1 1 auto;
    margin-right: 0;
  }

  .logotype {
    margin-right: 56px;
    height: 64px;
    flex: 0 0 72px;

    @media (max-width: 1100px) {
      margin-right: 32px;
    }

    @media (max-width: 991px) {
      margin-right: 15px;
    }

    @media screen and (max-width: 680px) {
      order: 2;
      height: 48px;
      flex: 0 0 56px;
      margin-right: 0;
    }
  }

  .logotype__image {
    max-width: 100%;
    height: auto;
  }

  .nav__list-wrapper {
    .nav__burger-icon {
      cursor: pointer;
      width: 24px;
      height: 16px;
      display: none;
      background: transparent url('@/assets/img/icons/navigation/burger.svg') no-repeat center;

      &_open {
        background: transparent url('@/assets/img/icons/navigation/burger-open.svg') no-repeat bottom;
      }

      @media screen and (max-width: 680px) {
        display: inline-block;
      }
    }
  }

  .nav__group {
    @media screen and (max-width: 680px) {
      background: #0F1215;
      z-index: 3;

      position: absolute;
      top: -530px;
      left: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: top .6s;

      &_open {
        top: 80px;
        height: 100%;
      }
    }
  }

  .nav__list-wrapper {
    max-width: 567px;
    width: 100%;
  }

  .nav__list {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-right: 15px;
    gap: 5px;

    @media screen and (max-width: 680px) {
      flex-direction: column;
      justify-content: normal;
      margin-right: 0;
      margin-bottom: 84px;
    }
  }

  .nav__item {
    cursor: pointer;
    align-self: center;
    color: #E6E6E6;
    font-family: 'Rubik', sans-serif;
    font-size: 20px;
    font-weight: 700;

    @media (max-width: 991px) {
      font-size: 19px;
    }

    @media (max-width: 767px) {
      font-size: 18px;
    }

    @media screen and (max-width: 680px) {
      margin-bottom: 30px;
      font-size: 20px;
    }
  }

  &__auth {
    flex: none;
  }

  .mobile {
    @media screen and (min-width: 680px) {
      display: none;
    }
  }
}
</style>
