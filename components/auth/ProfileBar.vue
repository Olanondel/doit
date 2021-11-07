<template>
  <div class='profile-side hidden-on-mobile'>

    <div ref='profile-bar' class='profile-bar'>
      <div class='profile-bar__info'>
        <div class='profile-bar__avatar-block'>
          <img src='@/assets/img/icons/profile/profile-bar/avatar.svg' alt='profile-logo'
               class='profile-bar__avatar-image' />
        </div>

        <div class='profile-bar__name-block'>
          <div class='profile-bar__nickname'>JohnsonBaby2020</div>

          <div class='profile-bar__rate'>160 EUR / 16 DTC</div>
        </div>

        <button class='profile-bar__button' @click='openBar'></button>
      </div>

      <div class='profile-bar__toggle-menus'>
        <div class='profile-bar__level'>
          <div class='profile-bar__level-text'> LVL 999</div>

          <div class='profile-bar__level-progress'>
            <div class='profile-bar__level-progress-done'></div>
          </div>
        </div>

        <div class='profile-bar__menus'>
          <div class='profile-bar__main-nav'>
            <nuxt-link
              v-for='link in nav'
              :key='link.title'
              :to='link.url'
            >{{ link.title }}
            </nuxt-link>
          </div>

          <div class='profile-bar__support-nav'>
            <nuxt-link to='/user-panel/support'>Support</nuxt-link>
            <nuxt-link to='/user-panel/settings'>Settings</nuxt-link>
            <nuxt-link to='' @click.native='logout'>Logout</nuxt-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ProfileBar',
  data() {
    return {
      nav: [
        { title: 'My user-panel', url: 'user-panel' },
        { title: 'My team', url: '/user-panel/my-team' },
        { title: 'Withdraw', url: '/user-panel/withdraw' },
        { title: 'Deposit', url: '/user-panel/deposit' },
        { title: 'Premium', url: '/user-panel/premium' },
      ],
      helpNav: [
        { title: 'Support', url: '/user-panel/support' },
        { title: 'Settings', url: '/user-panel/settings' },
        { title: 'Logout', url: '' },
      ]
    }
  },
  methods: {
    openBar() {
      this.$refs['profile-bar'].classList.toggle('profile-bar_open')
    },
    async logout() {
      await this.$auth.logout()

      await this.$router.push('/login')
    }
  }
}
</script>

<style lang='scss' scoped>
.profile-side {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-bar_open {
  background: #161A1F;
  transition: .2s background linear;
}

.profile-bar {
  max-width: 226px;
  width: 226px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #F5F5F5;
  position: relative;
  max-height: 56px;
  height: 56px;
  transition: .2s background linear;

  &_open &__button {
    background: transparent url("@/assets/img/icons/profile/profile-bar/to-top-arrow.svg") no-repeat center;
  }

  &__info {
    padding: 8px 0 8px 8px;
    max-width: 226px;
    width: 226px;
    max-height: 56px;
    height: 56px;
    flex: 1 0 100%;
    display: flex;
    align-items: center;
  }

  &__avatar-block {
    max-width: 40px;
    width: 40px;
    height: 40px;
    max-height: 40px;
    margin-right: 8px;
  }

  &__avatar-image {
    max-width: 100%;
    height: auto;
  }

  &__name-block {
    flex: 0 0 130px;
  }

  &__nickname {
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    color: #F5F5F5;
    margin-bottom: 4px;
  }

  &__rate {
    color: #55AAFF;
    font-size: 12px;
    font-weight: 500;
  }

  &__button {
    background: transparent url("@/assets/img/icons/profile/profile-bar/to-bottom-arrow.svg") no-repeat center;
    border: none;
    cursor: pointer;
    display: inline-block;
    width: 12px;
    height: 100%;
    outline: none;
    margin: 0 13px;
  }

  &_open &__toggle-menus {
    visibility: visible;
    opacity: 1;
    transition: .2s visibility linear, .2s opacity linear;
  }

  &__toggle-menus {
    position: absolute;
    top: 56px;
    left: 0;
    background: #161A1F;
    width: 100%;
    visibility: hidden;
    opacity: 0;
    transition: .2s visibility linear, .2s opacity linear;
    z-index: 9999;

    a {
      color: #F5F5F5;
      font-size: 12px;

      background: transparent url('@/assets/img/icons/profile/profile-bar/to-right-arrow.svg') no-repeat center right;
    }
  }

  &__level {
    font-size: 10px;
    width: 100%;
    padding: 0 8px 14px;
    border-bottom: 2px solid #0F1215;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-text {
      width: 40px;
      margin-right: 8px;
    }

    &-progress {
      background: #2B353F;
      border-radius: 2px;
      height: 2px;
      flex: 0 1 162px;
      width: 100%;

      &-done {
        height: 100%;
        border-radius: 2px;
        width: 70%;
        background: #F5F5F5;
      }
    }
  }

  &__main-nav {
    display: flex;
    flex-direction: column;
    padding: 14px 15px 0 12px;
    border-bottom: 2px solid #0F1215;

    a {
      text-transform: uppercase;

      &:not(:last-child) {
        margin-bottom: 16px;
      }

      &:last-child {
        margin-bottom: 14px;
      }
    }
  }

  &__support-nav {
    display: flex;
    flex-direction: column;
    padding: 14px 15px 11px 12px;

    a {
      color: #969BA3;

      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
}
</style>
