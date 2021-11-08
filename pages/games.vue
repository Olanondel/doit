<template>
  <div class='games-container'>
    <h2 class='page-title title'>Games</h2>

    <div class='games'>

      <div
        v-for='item in games'
        :key='item.id'
        class='games__game-container'
      >
        <div class='games__game' :style="{ background: `url(${item.capsules[0].implicit || require('@/assets/img/defaults/game.jpg')}) no-repeat center/cover;` }">
          <h3 class='games__title'>{{item.name}}</h3>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'games',
  async asyncData({ $api }) {
    const [games] = await $api.game.getGames(6)

    return { games }
  },
  data() {
    return {
      games: null
    }
  }
}
</script>

<style lang='scss' scoped>

.games {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;

  &__game-container {
    max-height: 500px;
    height: 500px;
    flex: 0 0 33.3%;
    padding: 0 8px;
    margin-bottom: 30px;

    @media screen and (max-width: 960px) {
      flex: 0 0 50%;
      height: 228px;
      max-height: 228px;
    }

    @media screen and (max-width: 620px) {
      flex: 0 0 100%;
      height: 128px;
      max-height: 128px;
    }
  }

  &__game {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 30px;

    @media screen and (max-width: 620px) {
      align-items: center;
      padding-bottom: 0;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    color: #F5F5F5;
  }
}

.title {
  margin-bottom: 20px;

  @media screen and (max-width: 620px) {
    text-align: center;
  }
}

</style>
