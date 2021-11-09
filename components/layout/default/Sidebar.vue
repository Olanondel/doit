<template>
  <nav ref='sidebar' class='sidebar' @click='toggleSidebar'>
    <ul class='nav'>

      <nuxt-link no-prefetch tag='li' to='/knight' class='nav__item knight'>
        <span class='nav__item_text'>Games</span>
      </nuxt-link>

      <nuxt-link no-prefetch tag='li' to='/trophy' class='nav__item trophy'>
        <span class='nav__item_text'>Leagues</span>
      </nuxt-link>

      <nuxt-link no-prefetch tag='li' to='/growth' class='nav__item growth'>
        <span class='nav__item_text'>Top</span>
      </nuxt-link>

      <nuxt-link no-prefetch tag='li' to='/network' class='nav__item network'>
        <span class='nav__item_text'>Sponsors</span>
      </nuxt-link>

      <nuxt-link no-prefetch tag='li' to='/target' class='nav__item target'>
        <span class='nav__item_text'>Internal links</span>
      </nuxt-link>

      <nuxt-link no-prefetch tag='li' to='/megaphone' class='nav__item megaphone'>
        <span class='nav__item_text'>Social media</span>
      </nuxt-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      nav: [
        { to: '/knight', class: 'nav__item knight', text: 'Games' },
        { to: '/trophy', class: 'nav__item trophy', text: 'Leagues' },
        { to: '/growth', class: 'nav__item growth', text: 'Top' },
        { to: '/network', class: 'nav__item network', text: 'Sposnors' },
        { to: '/target', class: 'nav__item target', text: 'Internal links' },
        { to: '/megaphone', class: 'nav__item megaphone', text: 'Social media' }
      ]
    }
  },
  methods: {
    toggleSidebar() {
      this.$refs.sidebar.classList.toggle('sidebar_open')

      if (this.$refs.sidebar.classList.contains('sidebar_open')) {
        document.addEventListener('click', this.closeSidebar)
      }
    },
    closeSidebar(event) {
      if (!this.$refs.sidebar.contains(event.target)) {
        this.$refs.sidebar.classList.remove('sidebar_open')

        document.removeEventListener('click')
      }
    },
  }
}
</script>

<style lang='scss' scoped>
.sidebar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 113px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #20252B;
  transition: all .6s;

  @media (max-width: 991px) {
      max-width: 80px;
      width: 100%;
  }

  @media (max-width: 767px) {
      top: initial;
      min-height: 0;
      bottom: 0;
      min-width: 100vw;
      height: 55px;
      display: flex;
      border-right: none;
      flex-direction: row;
      background-color: #0F1215;
  }

  .nav {
    max-height: 592px;
    height: 100vh;
    justify-content: space-around;
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
      height: 55px;
      min-width: 100vw;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      max-width: 100vw;
      padding: 0 16px;
    }

      .nav__item {
        margin: 0 auto;
        width: 32px;
        cursor: pointer;
        height: 32px;
        padding: 15px 0;

        @media (max-width: 767px) {
          padding: 0;
          width: 22px;
          height: 22px;
          margin: 0;
        }

        &_text {
          display: none;
        }
      }

    .knight {
      background: transparent url("../../../assets/img/icons/sidebar/knight.svg") no-repeat center;

      @media (max-width: 767px) { background: transparent url("../../../assets/img/icons/sidebar/mobile/knight.svg") no-repeat center; }
      }

    .trophy {
      background: transparent url("../../../assets/img/icons/sidebar/trophy.svg") no-repeat center;

      @media (max-width: 767px) { background: transparent url("../../../assets/img/icons/sidebar/mobile/trophy.svg") no-repeat center; }
    }

    .growth {
      background: transparent url("../../../assets/img/icons/sidebar/growth.svg") no-repeat center;

      @media (max-width: 767px) { background: transparent url("../../../assets/img/icons/sidebar/mobile/growth.svg") no-repeat center; }
    }

    .network {
      background: transparent url("../../../assets/img/icons/sidebar/network.svg") no-repeat center;

      @media (max-width: 767px) { background: transparent url("../../../assets/img/icons/sidebar/mobile/network.svg") no-repeat center; }
    }

    .target {
      background: transparent url("../../../assets/img/icons/sidebar/target.svg") no-repeat center;

      @media (max-width: 767px) { background: transparent url("../../../assets/img/icons/sidebar/mobile/target.svg") no-repeat center; }
    }

    .megaphone {
      background: transparent url("../../../assets/img/icons/sidebar/megaphone.svg") no-repeat center;

      @media (max-width: 767px) { background: transparent url("../../../assets/img/icons/sidebar/mobile/megaphone.svg") no-repeat center; }
    }
  }
}

@media (max-width: 991px) {
  .sidebar {
    width: 80px;
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

.sidebar_open {
  width: 304px;
  padding-left: 44px;
  justify-content: flex-start;
  background: #151C23;
  box-shadow: 8px 0px 40px 0px #0B0E120D;

  .nav {
    .nav__item {
      padding: 3px 0 !important;

      &_active {
        fill: #F5F5F5;

        .nav__item_text {
          color: #F5F5F5;
        }
      }

      &_text {
        display: block;
        padding-left: 48px;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #8BA6CC;
        white-space: nowrap;
      }
    }
  }
}
</style>
