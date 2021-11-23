<template>
  <div>
    <div class='tools'>
      <GameFilter :current-filter='gameFilter' @changeCurrentFilter='changeGameFilter' />
      <div class='tools__search'>
        <input v-model.trim='search' placeholder='Search by name, prize, signed, etc.' type='text'
               class='tools__search-item'>
      </div>
      <div class='tools__buttons'>
      </div>
    </div>

    <table v-if='filteredResult.length' class='table'>
      <tr>
        <th>Team</th>
        <th>Leader</th>
        <th>Main Game</th>
        <th>Password</th>
        <th></th>
      </tr>

      <TeamTr
        v-for='(item) in teams'
        :key='item.id'
        :team='item'
        @joinToTeam='joinToTeam'
        @quitTeam='quitTeam'
      />
    </table>

    <h2 v-else class='empty'>Список команд пуст!</h2>
  </div>
</template>

<script>
import firebase from 'firebase'
import GameFilter from '../components/admin/GameFilter'
import TeamTr from '../components/team/TeamTr'
export default {
  components: { TeamTr, GameFilter   },
  async asyncData({ $api }) {
    return { teams: await $api.general.get('teams') }
  },
  data() {
    return {
      teams: [],
      search: '',
      gameFilter: 'All',
      joinPassword: '',
    }
  },
  computed: {
    results() {
      return !this.search.length ?
        this.teams :
        this.teams.filter(el => {
          return (
            el.name?.toLowerCase().includes(this.search.toLowerCase()) ||
            el.leader?.toLowerCase().includes(this.search.toLowerCase()) ||
            el.game.name?.toLowerCase().includes(this.search.toLowerCase()) ||
            el.created?.toLowerCase().includes(this.search.toLowerCase())
          )
        })
    },
    filteredResult() {
      return this.gameFilter === 'All' ? this.results : this.results.filter(el => el.game.value === this.gameFilter)
    }
  },
  methods: {
    changeGameFilter(filter) {
      this.gameFilter = filter
    },
    async joinToTeam(id, password) {
      const team = await this.$api.general.getOne('teams', id)

      if (team?.password === password) {
        this.$nuxt.$loading.start()
        await this.$api.general.update('teams', id, {
          players: firebase.firestore.FieldValue.arrayUnion(this.$auth.user.localId)
        })
        this.teams = await this.$api.general.get('teams')
        this.$nuxt.$loading.finish()
      } else {
        alert('Password is wrong!')
      }
    },
    async quitTeam(id) {
      this.$nuxt.$loading.start()
      await this.$api.general.update('teams', id, {
        players: firebase.firestore.FieldValue.arrayRemove(this.$auth.user.localId)
      })
      this.teams = await this.$api.general.get('teams')
      this.$nuxt.$loading.finish()
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
    display: inline-block;
  }
}

.join__password {
  background: transparent;
  border: none;
  color: #f5f5f5;
}
.join__button {
  width: 100%;
  background: transparent;
  border: 1px solid #f5f5f5;
  color: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
}

</style>
