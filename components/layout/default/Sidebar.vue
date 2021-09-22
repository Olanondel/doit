<template>
  <nav class='sidebar'>
    <ul class='nav'>
        <nuxt-link
          v-for='item in nav'
          :key='item.to'
          no-prefetch
          tag='li'
          :to='item.to'
          :class='item.class'
        />
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      nav: [
        { to: '/knight', class: 'nav__item'},
        { to: '/trophy', class: 'nav__item trophy'},
        { to: '/growth', class: 'nav__item growth'},
        { to: '/network', class: 'nav__item network'},
        { to: '/target', class: 'nav__item target'},
        { to: '/megaphone', class: 'nav__item megaphone'},
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #20252B;

  .nav {
    max-height: 592px;
    height: 592px;
    justify-content: space-around;
    display: flex;
    flex-direction: column;

    .nav__item {
      margin: 0 auto;
      width: 32px;
      cursor: pointer;
      height: 32px;
      padding: 15px 0;
      background: transparent url("../../../assets/img/icons/sidebar/knight.svg") no-repeat center;
    }

    .trophy {
      background: transparent url("../../../assets/img/icons/sidebar/trophy.svg") no-repeat center;
    }

    .growth {
      background: transparent url("../../../assets/img/icons/sidebar/growth.svg") no-repeat center;
    }

    .network {
      background: transparent url("../../../assets/img/icons/sidebar/network.svg") no-repeat center;
    }

    .target {
      background: transparent url("../../../assets/img/icons/sidebar/target.svg") no-repeat center;
    }

    .megaphone {
      background: transparent url("../../../assets/img/icons/sidebar/megaphone.svg") no-repeat center;
    }
  }
}

@media (max-width: 991px) {
  .sidebar {
    width: 80px;
  }
}

@media (max-width: 767px) {
  .sidebar {
    top: initial;
    min-height: 0;
    bottom: 0;
    min-width: 100vw;
    height: 60px;
    display: flex;
    border-right: none;
    flex-direction: row;
    background-color: #0F1215;

    .nav {
      height: 60px;
      min-width: 100vw;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      max-width: 100vw;
    }
  }
}

@media (max-width: 575px) {
  .sidebar {
    .nav {
      .nav__item {

      }
    }
  }
}
</style>
