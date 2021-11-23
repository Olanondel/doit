<template>
  <div class='rules'>
    {{ quickRules || 'Quick Rules is empty!' }}
  </div>
</template>

<script>
export default {
  name: 'rules',
  async asyncData({ $api, params }) {
    const tournament = await $api.general.getOne('tournaments', params.tournamentId)

    return { quickRules: tournament.basicInfo.quickRules }

  },
  props: {
    rules: { type: String, default: 'Правила не указаны' }
  }
}
</script>

<style scoped>

</style>
