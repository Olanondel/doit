<template>
  <div
    class='card'
    :style="{ backgroundImage: 'url(' + (data.capsules[0].image || defaultImage) + ')' }"
  >
    <div class='card__text'>
      {{data.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameCard',
  props: {
    data: {
      type: Object,
      default: () => ({
        image: '',
        text: '',
      })
    }
  },
  computed: {
    defaultImage() {
      return require('@/assets/img/home/games/dota1.jpg')
    }
  }
}
</script>

<style lang='scss' scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 500px;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &__text {
    font-size: 30px;
    line-height: 30px;
    font-weight: 700;
    color: #F5F5F5;
    margin-bottom: 30px;
  }
}
</style>
