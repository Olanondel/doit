<template>
  <div class='profile'>
    <div class='profile__infowrap'>
      <h2 class='profile__title'>Profile</h2>

      <div class='profile__info profile-info'>
        <div class='profile-info__item' >
          <div class='profile-info__key'>ID</div>
          <div class='profile-info__value'>{{profile.id.slice(1, 9)}}</div>
        </div>
        <div class='profile-info__item' >
          <div class='profile-info__key'>Name</div>
          <div class='profile-info__value'>{{profile.name}}</div>
        </div>
        <div class='profile-info__item' >
          <div class='profile-info__key'>Nickname</div>
          <div class='profile-info__value'>{{profile.nickname}}</div>
        </div>
        <div class='profile-info__item' >
          <div class='profile-info__key'>With us from</div>
          <div class='profile-info__value'>28/08/13</div>
        </div>
        <div class='profile-info__item' >
          <div class='profile-info__key'>Sex / Age</div>
          <div class='profile-info__value'>{{profile.sex}} / {{profile.age}}</div>
        </div>
        <div class='profile-info__item' >
          <div class='profile-info__key'>Nationality</div>
          <div class='profile-info__value'>{{profile.nationality}}</div>
        </div>
        <div class='profile-info__item' >
          <div class='profile-info__key'>Country</div>
          <div class='profile-info__value'>{{profile.country}}</div>
        </div>
        <div class='profile-info__item' >
          <div class='profile-info__key'>Web-site</div>
          <div class='profile-info__value'>{{profile.site}}</div>
        </div>
      </div>
    </div>

    <div class='profile__achievement'>
      <h2 class='profile__title'>
        Level and awards
      </h2>

      <div class='profile__awards awards'>
        <div
          v-for='award in awards'
          :key='award.title'
          class='awards__item'
          :style='{color: award.color}'
        >
          <div class='awards__text'>
            <div class='awards__title'>{{award.title}}</div>
            <div class='awards__count'>{{award.count}}</div>
          </div>
          <div class='awards__progress-container'>
            <div class='awards__progress'>
              <div class='awards__progress-element' :style='{background: award.color}'>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {

  },
  async asyncData({ $api, $auth }) {
    return { profile: await $api.auth.getProfile($auth.user.localId) }
  },
  data() {
    return {
      profile: null,

      awards: [
        { title: 'StarCraft ||', count: '15', progress: 80, color: '#55AAFF' },
        { title: 'League of Legends', count: '3', progress: 80, color: '#55FF8F' },
        { title: 'Hearthstone', count: '2', progress: 80, color: '#B455FF' },
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.profile {
  display: flex;
  flex: 1 1 100%;
  flex-wrap: wrap;



  .profile__title {
    font-weight: 700;
    color: #F5F5F5;
    text-transform: uppercase;
    margin-bottom: 26px;
  }

  .profile__infowrap {
    flex: 0 0 50%;
    overflow: hidden;

    @media screen and (max-width: 1100px) {
      margin-bottom: 60px;
    }
  }

  .profile__achievement {
    flex: 0 0 50%;
    overflow: hidden;
  }

  .profile__infowrap,
  .profile__achievement {
    @media screen and (max-width: 1100px) {
      flex: 1 1 100%;
    }
  }
}

.profile-info {
  &__item {
    display: flex;
    max-width: 365px;
    margin-bottom: 18px;

    @media screen and (max-width: 1100px) {
      max-width: none;
    }
  }

  &__key {
    color: #67707A;
    width: 50%;
  }

  &__value {
    width: 50%;
    color: #fff;
    line-height: 100%;
  }
}

.awards {
  .awards__item {
    max-width: 270px;
    margin-bottom: 26px;

    @media screen and (max-width: 620px){
      max-width: 100%;
    }
  }

  .awards__text {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    .awards__title {

    }

    .awards__count {

    }
  }

  .awards__progress-container {
    display: flex;
    align-items: center;
    height: 4px;
  }

  .awards__progress {
    background: #2B353F;
    width: 100%;
    height: 2px;
    border-radius: 2%;
    display: flex;
    align-items: center;

    &-element {
      box-shadow: 0 0 10px;
      background: #55AAFF;
      border-radius: 2px;
      width: 30%;
      height: 4px;
    }
  }
}
</style>
