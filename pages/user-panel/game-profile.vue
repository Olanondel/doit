<template>
  <div class='user-panel'>
    <h2 class='user-panel__title'>Game profile</h2>

    <AccordeonWithSlot title='Game profile'>
      <BaseInput v-model='riot' title='Riot Games account' on-admin />
      <BaseInput v-model='battlenet' title='Battlenet' on-admin />
      <BaseInput v-model='steam' title='SteamID' on-admin />
      <BaseInput v-model='game' title='GameAccount' on-admin />
    </AccordeonWithSlot>

    <div class='control__buttons'>
      <AdminButton :disabled='isLoading' text='Save profile' @click='save' />
    </div>
  </div>
</template>

<script>
import AccordeonWithSlot from '../../components/admin/create/AccordeonWithSlot'
import BaseInput from '../../components/base/BaseInput'
import AdminButton from '../../components/creational/AdminButton'
export default {
  name: 'game-profile',
  components: { AdminButton, BaseInput, AccordeonWithSlot },
  async asyncData({ $api, $auth }) {
    const profile = await $api.auth.getProfile($auth.user.localId)

    return { ...profile.gameProfile }
  },
  data() {
    return {
      riot: '',
      battlenet: '',
      steam: '',
      game: '',

      isLoading: false
    }
  },
  methods: {
    async save() {
      try {
        this.isLoading = true

        await this.$api.auth.updateProfile(this.$auth.user.localId, {
          gameProfile: {
            riot: this.riot,
            battlenet: this.battlenet,
            steam: this.steam,
            game: this.game,
          }
        })

        alert('success')
        this.isLoading = false
      } catch (err) {
        alert(err)
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>
.user-panel {
  margin-bottom: 60px;
}
</style>
