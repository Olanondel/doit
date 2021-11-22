<template>
  <div class='admin'>

    <div class='admin__navigation'>
      <nuxt-link to='/admin/tournaments'  >Tournaments</nuxt-link>
      <nuxt-link to='/admin/teams' append >Teams</nuxt-link>
      <nuxt-link to='/admin/players' append >Players</nuxt-link>
      <nuxt-link to='/admin/leagues' append >Leagues</nuxt-link>
      <nuxt-link to='/admin/news' append >News</nuxt-link>
      <nuxt-link to='/admin/games' append >Games</nuxt-link>
    </div>



    <div class='admin__content'>
      <nuxt-child />
    </div>

  </div>
</template>

<script>
export default {
  async asyncData({ $api }) {

  },
  data() {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>

.admin {

  &__navigation {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    flex-wrap: wrap;
    gap: 15px;

    & > a {
      padding: 30px;
      border: 2px solid #20252B;
      cursor: pointer;
      font-size: 22px;
      font-weight: 700;
      color: #F5F5F5;
    }
  }
}


.nuxt-link-active {
  background: #D8DFEB;
  color: #0F1215 !important;
}

</style>
