<template>
  <div class='user-panel'>
    <h2 class='user-panel__title'>My Team</h2>

    <div class='user-panel__links'>

      <nuxt-link
        v-for='item in teams'
        :key='item.id'
        :to=" 'my-team/' + item.id "
        class='user-panel__link'
      >{{ item.name }}
      </nuxt-link>

      <nuxt-link to='my-team/create-team' class='user-panel__link'>Create Team</nuxt-link>

    </div>
  </div>
</template>

<script>
export default {
  name: 'my-team',
  props: {
    name: { type: String, default: '' }
  },
  async asyncData({ $api, $fire, $auth }) {
    const profile = await $api.auth.getProfile($auth.user.localId)

    if (profile.myTeams) {
      const teams = await Promise.all(profile.myTeams.map(async el => await $api.team.getTeam(el)))

      return { teams }
    }
  },
  data() {
    return {
      links: [
        { text: 'Create Team', url: 'user-panel/profile' }
      ],
      teams: [],
      team: null
    }
  },
  async mounted() {
  }
}
</script>

<style scoped>

</style>
