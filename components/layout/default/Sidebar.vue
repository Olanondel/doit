<template>
  <nav ref='sidebar' class='sidebar'>
    <ul class='nav'>

      <nuxt-link no-prefetch tag='li' to='/knight' class='nav__item knight' @click.native.prevent='openSidebar'>
        <span class='nav__item_text'>Games</span>

        <ul class='nav__inner-menu'>
          <nuxt-link to='' tag='li' class='nav__inner-menu-item'>The main league</nuxt-link>
          <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Second</nuxt-link>
          <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Third value league</nuxt-link>
          <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Fourth league</nuxt-link>
          <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Fiveth lague</nuxt-link>
        </ul>
      </nuxt-link>

      <nuxt-link ref='leagues' no-prefetch tag='li' to='/tournaments/' class='nav__item trophy' @click.native.prevent='openSidebar'>
        <span class='nav__item_text'>Leagues</span>


          <ul class='nav__inner-menu'>
            <nuxt-link to='' tag='li' class='nav__inner-menu-item'>The main league</nuxt-link>
            <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Second</nuxt-link>
            <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Third value league</nuxt-link>
            <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Fourth league</nuxt-link>
            <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Fiveth lague</nuxt-link>
          </ul>
      </nuxt-link>

      <nuxt-link no-prefetch tag='li' to='/growth' class='nav__item growth' @click.native.prevent='openSidebar'>
        <span class='nav__item_text'>Top</span>

        <ul class='nav__inner-menu'>
          <nuxt-link to='' tag='li' class='nav__inner-menu-item'>The main league</nuxt-link>
          <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Second</nuxt-link>
          <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Third value league</nuxt-link>
          <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Fourth league</nuxt-link>
          <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Fiveth lague</nuxt-link>
        </ul>
      </nuxt-link>

      <nuxt-link no-prefetch tag='li' to='/network' class='nav__item network' @click.native.prevent='openSidebar'>
        <span class='nav__item_text'>Sponsors</span>

        <ul class='nav__inner-menu'>
          <nuxt-link to='' tag='li' class='nav__inner-menu-item'>The main league</nuxt-link>
          <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Second</nuxt-link>
          <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Third value league</nuxt-link>
          <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Fourth league</nuxt-link>
          <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Fiveth lague</nuxt-link>
        </ul>
      </nuxt-link>

      <nuxt-link no-prefetch tag='li' to='/target' class='nav__item target' @click.native.prevent='openSidebar'>
        <span class='nav__item_text'>Internal links</span>

        <ul class='nav__inner-menu'>
          <nuxt-link to='' tag='li' class='nav__inner-menu-item'>The main league</nuxt-link>
          <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Second</nuxt-link>
          <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Third value league</nuxt-link>
          <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Fourth league</nuxt-link>
          <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Fiveth lague</nuxt-link>
        </ul>
      </nuxt-link>

      <nuxt-link no-prefetch tag='li' to='/megaphone' class='nav__item megaphone' @click.native.prevent='openSidebar'>
        <span class='nav__item_text'>Social media</span>

        <ul class='nav__inner-menu'>
          <nuxt-link to='' tag='li' class='nav__inner-menu-item'>The main league</nuxt-link>
          <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Second</nuxt-link>
          <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Third value league</nuxt-link>
          <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Fourth league</nuxt-link>
          <nuxt-link to='' tag='li'  class='nav__inner-menu-item'>Fiveth lague</nuxt-link>
        </ul>
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
    openSidebar() {
      this.$refs.sidebar.classList.add('sidebar_open')

      if (this.$refs.sidebar.classList.contains('sidebar_open')) {
        document.addEventListener('click', this.closeSidebar)
      }
    },
    closeSidebar(event) {
      if (!this.$refs.sidebar.contains(event.target)) {
        this.$refs.sidebar.classList.remove('sidebar_open')

        document.removeEventListener('click', this.closeSidebar)
      }
    },
  }
}
</script>

<style lang='scss' scoped>
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

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
    transition: all .6s;

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
        background-position: center;

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

    &__inner-menu {
      display: none;
    }

    @media (max-width: 767px) {
      &.knight {
        background-image: url("@/assets/img/icons/sidebar/mobile/knight.svg") !important;
      }

      &.trophy {
        background-image: url("@/assets/img/icons/sidebar/mobile/trophy.svg") !important;
      }

      &.growth {
        background-image: url("@/assets/img/icons/sidebar/mobile/growth.svg") !important;
      }

      &.network {
        background-image: url("@/assets/img/icons/sidebar/mobile/network.svg") !important;
      }

      &.target {
        background-image: url("@/assets/img/icons/sidebar/mobile/target.svg") !important;
      }

      &.megaphone {
        background-image: url("@/assets/img/icons/sidebar/mobile/megaphone.svg") !important;
      }
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

  @media (max-width: 991px) {
    max-width: 100%;
  }

  @media (max-width: 767px) {
    height: 55px;
    padding-left: 0;
  }

  .nav {
    .nav__item {
      padding: 4px 0 0 48px !important;
      width: auto;
      height: auto;
      background-position: left top;
      margin: 0;

      @media (max-width: 767px) {
        width: 22px;
        height: 22px;
        background-position: center;
        padding: 0 !important;
      }

      &_active {
        fill: #F5F5F5;

        .nav__item_text {
          color: #F5F5F5;
        }
      }

      &_text {
        display: block;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #8BA6CC;
        white-space: nowrap;

        @media (max-width: 767px) {
          display: none !important;
        }
      }
    }

    &__inner-menu {

      @media (max-width: 767px) {
        height: 0;
      }


      &-item {
        font-size: 16px;
        line-height: 19px;
        color: #6F85A3;
        margin-bottom: 12px;
      }
    }
  }

  .nuxt-link-active {
    .nav__inner-menu {
      margin-top: 16px;
      display: block;

      @media (max-width: 767px) {
        margin-top: 0;
        position: absolute;
        bottom: 55px;
        width: 100%;
        left: 0;
        background: #151C23;
        text-align: center;
        border-bottom: 2px solid black;
        height: auto;
      }

      &-item {
        @media (max-width: 767px) {
          padding: 15px 0;
        }

        &:hover {
          color: #f5f5f5;
        }
      }
    }

    .nav__item_text {
      color: #F5F5F5;
    }

    &.knight {
      background-image: url("@/assets/img/icons/sidebar/knight-active.svg") !important;
    }

    &.trophy {
      background-image: url("@/assets/img/icons/sidebar/trophy-active.svg");
    }

    &.growth {
      background-image: url("@/assets/img/icons/sidebar/growth-active.svg");
    }

    &.network {
      background-image: url("@/assets/img/icons/sidebar/network-active.svg");

      @media (max-width: 767px) {
        background-image: url("@/assets/img/icons/sidebar/mobile/network.svg") !important;
      }
    }

    &.target {
      background-image: url("@/assets/img/icons/sidebar/target-active.svg");
    }

    &.megaphone {
      background-image: url("@/assets/img/icons/sidebar/megaphone-active.svg");
    }

    @media (max-width: 767px) {
      .nuxt-link-active.knight {
        background-image: url("@/assets/img/icons/sidebar/mobile/knight.svg") !important;
      }

      .nuxt-link-active.trophy {
        background-image: url("@/assets/img/icons/sidebar/mobile/trophy.svg") !important;
      }

      .nuxt-link-active.growth {
        background-image: url("@/assets/img/icons/sidebar/mobile/growth.svg") !important;
      }

      .nuxt-link-active.network {
        background-image: url("@/assets/img/icons/sidebar/mobile/network.svg") !important;
      }

      .nuxt-link-active.target {
        background-image: url("@/assets/img/icons/sidebar/mobile/target.svg") !important;
      }

      .nuxt-link-active.megaphone {
        background-image: url("@/assets/img/icons/sidebar/mobile/megaphone.svg") !important;
      }
    }
  }
}

.nuxt-link-active {
}
</style>
