<template>
  <div class='players'>
    <div
      v-for='player in players'
      :key='player.id'
      class='players__item-wrapper'
    >
      <div class='players__item'>
        <img :src='player.avatar || defaultAvatar' alt='alt' class='players__image'>

        <div class='players__content'>
          <div class='players__title'>
          <span
            class='players__country'
            :style="{ background: 'transparent url(' + require('@/assets/img/icons/tournaments/players/country.svg')  + ') no-repeat center' }"
          ></span>
            {{player.nickname}}
          </div>

          <div class='players__status'>registered</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tournament: { type: Object, default: () => ({  }) },
  },
  async asyncData({ $api, params }) {
    const tournament = await $api.general.getOne('tournaments', params.tournamentId)

    const teams = await Promise.all(tournament.teams.map(
      async el => await $api.general.getOne('teams', el)
    ))

    const playersId = (teams.map(el => el.players)).flat()

    const players = await Promise.all(playersId.map(
      async el => await $api.general.getOne('players', el)
    ))

    return { players }
  },
  data() {
    return {
      players: []
    }
  },
  computed: {
    defaultAvatar() {
      return require('@/assets/img/icons/tournaments/players/avatar.jpg')
    }
  }
}
</script>

<style lang='scss' scoped>

.players {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;

  &__item-wrapper {
    padding: 0 15px;
    flex: 0 0 25%;
  }

  &__item {
    background: #151A1F;
    padding-bottom: 16px;
    margin-bottom: 30px;
  }

  &__image {
    max-width: 170px;
    width: 100%;
    height: 170px;
    margin-bottom: 12px;
    object-fit: cover;
  }

  &__content {
    padding: 0 23px 0 10px;
  }

  &__title {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #DCE1E6;
    margin-bottom: 8px;
  }

  &__country {
    width: 16px;
    height: 12px;
    display: inline-block;
    object-fit: cover;
    margin-right: 6px;
  }

  &__status {
    font-size: 12px;
    line-height: 12px;
    color: #525C66;
  }
}

</style>
