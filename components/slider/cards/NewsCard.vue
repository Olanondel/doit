<template>
  <div class='card'>
    <div class='card__image-wrapper'>
      <img class='card__image' :src='data.image' alt='tournaments-image'>
    </div>

    <div class='card__title'>
      {{ data.title }}
    </div>

    <div class='card__text'>
      {{ data.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    data: { type: Object, default: () => ({
        image: '', title: '', text: ''
      }) }
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

.card {
  background: #E1E6EB;

  &__image-wrapper {
    border: 2px solid #E1E6EB;
    border-bottom: none;
  }

  &__title {
    color: #0F1215;
    margin-bottom: 22px;
  }

  &__text {
    color: #5E656B;
    padding: 0 22px;
    margin-bottom: 42px;
  }
}
</style>
