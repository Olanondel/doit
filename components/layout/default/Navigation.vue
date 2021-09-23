<template>
  <nav class='nav'>
    <div class='logotype'>
      <nuxt-link to='/'>
        <img src='../../../assets/img/logotype.svg' alt='logotype' class='logotype__image'>
      </nuxt-link>
    </div>

    <ul class='nav__list'>
      <nuxt-link
        v-for='item in nav'
        :key='item.to'
        tag='li'
        no-prefetch
        class='nav__item'
        :to='item.to'>
        {{item.text}}
      </nuxt-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      nav: [
        { text: 'Play', to: 'play' },
        { text: 'News', to: 'news' },
        { text: 'Games', to: 'games' },
        { text: 'Shop', to: 'shop' },
        { text: 'Sponsorship', to: 'sponsorship' },
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.nav {
  height: 106px;
  display: flex;
  margin-bottom: 5%;

  .logotype {
    display: flex;
    align-items: center;
    margin-right: 32px;
  }

  .logotype__image {
    max-width: 88px;
    height: 78px;
  }

  .nav__list {
    display: flex;
    max-width: 567px;
    justify-content: space-between;
    width: 100%;
  }

  .nav__item {
    cursor: pointer;
    align-self: center;
    color: #E6E6E6;
    font-family: 'Rubik', sans-serif;
    font-size: 20px;
    font-weight: 700;
  }

  .nav__item:not(:last-child) {
  }
}

@media (max-width: 575px) {
  .nav {
    height: 80px;
    padding-top: 15px;
  }
}
</style>
