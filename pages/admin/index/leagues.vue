<template>
  <div>
    <div class='tools'>
      <GameFilter :current-filter='gameFilter' @changeCurrentFilter='changeGameFilter' />
      <div class='tools__search'>
        <input v-model.trim='search' placeholder='Search by name, prize, signed, etc.' type='text'
               class='tools__search-item'>
      </div>
      <div class='tools__buttons'>
        <nuxt-link to='/admin/tournament/add' class='tools__button'>+ Add tournament</nuxt-link>
      </div>
    </div>

    <table v-if='filteredResult.length' class='table'>
      <tr>
        <th>Leagues`s name</th>
        <th>Entry price</th>
        <th>Pool price</th>
        <th>Signed</th>
        <th>Start in</th>
      </tr>

      <tr
        v-for='league in filteredResult'
        :key='league.id'
      >
        <td>
          {{league.basicInfo.title}}
        </td>
        <td>
          {{league.registration.type}}
        </td>
        <td>
          $ {{league.prizePool.pool}}
        </td>
        <td>
          {{league.players.length || 0}}
        </td>
        <td>
          {{league.registration.checkinTime.string || 0}}
        </td>
      </tr>
    </table>

    <h2 v-else class='empty'>Список лиг пуст!</h2>
  </div>
</template>

<script>
import GameFilter from '../../../components/admin/GameFilter'
export default {
  components: { GameFilter  },
  async asyncData({ $api }) {
    return { leagues: await $api.general.get('leagues') }
  },
  data() {
    return {
      leagues: [],
      gameFilter: 'All',
      search: ''
    }
  },
  computed: {
    results() {
      return !this.search.length ?
        this.leagues :
        this.leagues.filter(el => {
          return (
            el.basicInfo.title?.toLowerCase().includes(this.search.toLowerCase()) ||
            el.registration.type?.toLowerCase().includes(this.search.toLowerCase()) ||
            el.prizePool.pool?.toString().toLowerCase().includes(this.search.toLowerCase()) ||
            el.registration.checkinTime.string?.toLowerCase().includes(this.search.toLowerCase())
          )
        })
    },
    filteredResult() {
      return this.gameFilter === 'All' ? this.results : this.results.filter(el => el.game.game.id === this.gameFilter)
    }
  },
  methods: {
    changeGameFilter(filter) {
      this.gameFilter = filter
    }
  }
}
</script>

<style lang='scss' scoped>

.table {
  width: 100%;

  border: 2px solid #20252B;
  border-collapse: separate;
  border-spacing: 28px 13px;

  th {
    text-align: left;
    font-weight: 500;
    font-size: 22px;
    line-height: 22px;
    color: #E6E6E6;
  }

  td {
    border: 1px solid #20252B;
    padding: 8px 16px;
    border-radius: 4px;
    color: #67707A;
  }
}

.empty {
  font-size: 44px;
  color: #E6E6E6;
  font-weight: 700;
}


.tools {
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;

  &__search {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 244px;
    background: transparent url("@/assets/img/icons/tournaments/search.svg") no-repeat right 8px;

    &-item {
      border: none;
      padding-bottom: 3px;
      border-bottom: 2px solid #20252B;
      background: transparent;
      flex: 0 0 100%;
      font-size: 12px;
      line-height: 12px;
      color: #434951;

      &::placeholder {
        color: #434951;
      }
    }
  }

  &__buttons {

  }

  &__button {
    padding: 16px 44px;
    background: #1A222D;
    font-weight: 700;
    color: #F5F5F5;
    font-size: 16px;
  }
}
</style>
