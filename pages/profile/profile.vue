<template>
  <div class='profile'>
    <div class='profile__infowrap'>
      <h2 class='profile__title'>Profile</h2>

      <div class='profile__info profile-info'>
        <div
          v-for='item in profileData'
          :key='item.key'
          class='profile-info__item'
        >
          <div class='profile-info__key'>{{item.key}}</div>
          <div class='profile-info__value'>{{item.value}}</div>
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
          <div class='awards__progress'></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data() {
    return {
      profileData: [
        { key: 'ID', value: '7917450' },
        { key: 'Name', value: 'Nikodem Świder ' },
        { key: 'Nickname', value: 'BlacerLordTV' },
        { key: 'With us from', value: '28/08/13' },
        { key: 'Sex / Age', value: 'Male / 22' },
        { key: 'Nationality', value: 'Poland' },
        { key: 'Country', value: 'Poland' },
        { key: 'Web-site', value: 'http://blacerTV.com' }
      ],
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
  padding-left: 60px;
  display: flex;
  flex: 1 0 100%;

  .profile__title {
    font-weight: 700;
    color: #F5F5F5;
    text-transform: uppercase;
    margin-bottom: 26px;
  }

  .profile__infowrap {
    flex: 1 0 50%;
  }

  .profile__achievement {
    flex: 1 0 50%;
  }
}

.profile-info {
  &__item {
    display: flex;
    max-width: 365px;
    margin-bottom: 18px;
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
  }

  .awards__text {
    display: flex;
    justify-content: space-between;

    .awards__title {

    }

    .awards__count {

    }
  }

  .awards__progress {

  }
}
</style>
