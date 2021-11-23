<template>
  <tr>
    <td>
      {{team.name}}
    </td>
    <td>
      {{team.leader}}
    </td>
    <td>
      {{team.game.name}}
    </td>
    <td>
      <input v-if='!isJoin' v-model='password' type='password' class='join__password'>
    </td>
    <td>
      <button v-if='!isJoin' class='join__button' @click='$emit("joinToTeam", team.id, password)'>Join</button>
      <button v-else class='join__button' @click='$emit("quitTeam", team.id)'>Quit</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'TeamTr',
  props: {
    team: { type: Object, default: () => ({ name: '', leader: '', game: { name: '' }, id: '' })},
  },
  data() {
    return {
      password: '',
    }
  },
  computed: {
    isJoin() {
      return this.team?.players?.includes(this.$auth.user.localId)
    }
  }
}
</script>

<style scoped>
td {
  border: 1px solid #20252B;
  padding: 8px 16px;
  border-radius: 4px;
  color: #67707A;
}

.join__password {
  background: transparent;
  border: 1px solid #20252B;
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
