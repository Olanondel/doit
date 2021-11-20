<template>
  <div class='card'>
    <div class='card__image-wrapper'>
      <img class='card__image' :src='data.game.mainBanner || img' alt='tournaments-image'>
    </div>

    <div class='card__title'>
      {{ data.basicInfo.title }}
    </div>

    <div class='card__info'>
      <div class='card__info-item'>
        <div class='card__info-item-title'>Start</div>
        <div class='card__info-item-content'>{{ data.extra.mode }}</div>
      </div>
      <div class='card__info-item'>
        <div class='card__info-item-title'>Mode</div>
        <div class='card__info-item-content'>{{ data.game.mode }}</div>
      </div>
      <div class='card__info-item'>
        <div class='card__info-item-title'>Slots</div>
        <div class='card__info-item-content'>16 / 30</div>
      </div>
      <div class='card__info-item'>
        <div class='card__info-item-title'>Pool</div>
        <div class='card__info-item-content'>{{ data.prizePool.pool }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TournamentsCard',
  props: {
    data: {
      type: Object, default: () => ({
        image: '',
        title: '',
        info: { start: '', mode: '', slots: '', pool: '' }
      })
    }
  },
  computed: {
    img() {
      return require("@/assets/img/home/games/csgo.jpg")
    }
  }
}
</script>

<style lang='scss' scoped>
.card {
  border-radius: 2px;
  background: #151A1F;
  display: flex;
  flex-direction: column;
  height: 100%;

  &__image-wrapper {
    margin-bottom: 30px;
  }

  &__image {
    max-width: 100%;
    width: 100%;
    height: auto;
  }

  &__title {
    font-size: 22px;
    line-height: 28px;
    color: #E6E8EB;
    font-weight: 500;
    margin-bottom: 30px;
    padding: 0 22px;
    flex: 1 0 auto;
  }

  &__info {
    display: flex;
    padding: 0 22px;
    justify-content: space-between;
    margin-bottom: 30px;
    flex-wrap: wrap;

    &-item-title {
      margin-bottom: 8px;
    }

    &__item {

      &:nth-child(3), &:nth-child(4) {
        .card__info-item-title {
          text-align: right;
        }
      }

      &__title {
        margin-bottom: 8px;
        font-size: 16px;
        line-height: 16px;
        color: #8996A3;
      }

      &__content {
        color: #DCE1E6;
        font-weight: 500;
      }
    }
  }
}
</style>
