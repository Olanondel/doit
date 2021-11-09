<template>
  <section class='profile-page'>
    <div class='profile-sidebar'>

      <div class='player-card profile-sidebar__player-card'>
        <div class='player-card__img-wrap'>
          <img :src='avatar' alt='profile-image' class='player-card__img'>
        </div>

        <div class='player-card__names'>
          <div class='player-card__name'>{{ name }}</div>

          <div class='player-card__nickname'> {{ nickname }}</div>

          <div class='player-card__team'>
<!--            <nuxt-link to='/team/'>You are not have a team</nuxt-link>-->
          </div>

          <div class='player-card__contacts'>
            <ul class='player-card__list'>
              <nuxt-link tag='li' to='/' class='player-card__list-item'></nuxt-link>
              <nuxt-link tag='li' to='/' class='player-card__list-item'></nuxt-link>
            </ul>
          </div>
        </div>
      </div>

      <div class='tab-nav'>
        <ul class='tab-nav__list'>
          <nuxt-link
            v-for='(item, index) in nav'
            :key='index'
            :to="item.to"
            tag='li'
            exact
            class='tab-nav__list-item'
            active-class='tab-nav__active'
          >
            {{ item.text }}
          </nuxt-link>

          <li class='tab-nav__list-item' @click='logout'>Logout</li>
        </ul>
      </div>

    </div>

    <div class='tab-content'>
      <nuxt-child/>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      age: '',
      avatarFileName: '',
      avatarInitialFileName: '',
      avatar: '',
      country: '',
      id: '',
      name: '',
      nickname: '',
      dob: '',
      created: '',
      nationality: '',
      sex: '',
      site: '',
      url: '',

      profile: null,

      nav: [
        {text: 'User panel', to: '/user-panel'},
        {text: 'Profile', to: '/user-panel/profile'},
        {text: 'My Team', to: '/user-panel/my-team'},
        {text: 'Withdraw', to: '/user-panel/withdraw'},
        {text: 'Deposit', to: '/user-panel/deposit'},
        {text: 'Premium Account', to: '/user-panel/premium'},
        {text: 'Support', to: '/user-panel/support'},
        {text: 'Game profile', to: '/user-panel/game-profile'},
        {text: 'Change password', to: '/user-panel/change-password'},
        {text: 'Change email', to: '/user-panel/change-email'},
        {text: 'Settings', to: '/user-panel/settings'},
      ],
    }
  },
  async fetch() {
    const uid = this.$auth.user.localId

    const profile = await this.$api.auth.getProfile(uid)

    this.profile = profile

    for (const key in profile) {
      this[key] = profile[key]
    }
  },
  computed: {
    fullName() {
      return this.profile.firstName + ' ' + this.profile.lastName
    }
  },
  methods: {
    logout() {
      this.$auth.logout('local')
    }
  },
}
</script>

<style lang='scss' scoped>
.profile-page {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;

  @media screen and (max-width: 576px){
    display: flex;
  }

  @media screen and (max-width: 620px){
    flex-direction: column;
  }
}

.profile-sidebar {
  padding: 0 15px;
  flex: 0 0 20%;
  min-width: 212px;
  border-right: 1px solid #1A1F24;
}

.player-card {
  @media screen and (max-width: 620px){
    display: none;
  }

  .player-card__img-wrap {
    max-width: 104px;
    max-height: 104px;
    width: 100%;
    height: 100%;
    margin-bottom: 23px;

    .player-card__img {
      max-width: 100%;
      height: auto;
    }
  }

  .player-card__name {
    color: #909AA3;
    line-height: 20.8px;
    margin-bottom: 5px;
  }

  .player-card__nickname {
    font-weight: 700;
    color: #F5F5F5;
    font-size: 24px;
    line-height: 31.2px;
    margin-bottom: 7px;
  }

  .player-card__team {
    text-transform: uppercase;
    margin-bottom: 13px;
  }

  .player-card__list {
    display: flex;

    .player-card__list-item {
      display: inline-block;
      width: 24px;
      height: 24px;
      cursor: pointer;

      &:nth-child(1) {
        background: transparent url('../assets/img/icons/profile/plus.svg') no-repeat center;
      }

      &:nth-child(2) {
        background: transparent url('../assets/img/icons/profile/mail.svg') no-repeat center;
      }

      &:not(:last-child) {
        margin-right: 16px;
      }
    }
  }
}

.tab-nav {
  @media screen and (max-width: 620px){
    display: none;
  }

  .tab-nav__list {

  }

  .tab-nav__list-item {
    padding-left: 19px;
    margin-bottom: 24px;
    color: #FFFFFF;
    position: relative;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 2px;
      display: inline-block;
      width: 11px;
      height: 11px;
      background: #151A1F;
      border: 1px solid #fff;
      border-radius: 50%;
    }

    &:hover {
      color: #37B7FA;
      opacity: 0.8;
    }

    &:hover:before {
      border: 1px solid #37B7FA;
    }
  }

  .tab-nav__active {
    color: #37B7FA;

    &:before {
      border: none;
      background-color: #37B7FA;
    }
  }
}

.profile-sidebar__player-card {
  margin-bottom: 68px;
}

.tab-content {
  flex: 1 1 auto;
  margin-left: 60px;

  @media screen and (max-width: 620px){
    margin-left: 0;
  }
}
</style>
