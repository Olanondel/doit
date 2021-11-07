<template>
  <div class='user-panel'>
    <h2 class='user-panel__title'>Edit account details</h2>

    <div class='user-panel__form'>

      <BaseInput v-model='nickname' title='Nickname' :disabled='isLoading' on-admin />
      <BaseInput v-model='name' title='Name' :disabled='isLoading' on-admin />
      <BaseInput v-model='country' title='Country' :disabled='isLoading' on-admin />
      <BaseSelect v-model='mainTeam' :options='teams' :reduce='el => el.id' label='name' title='Main Team' on-admin />
      <BaseInput v-model='sex' title='Sex' :disabled='isLoading' on-admin />
      <BaseDatePicker v-model='dob' title='Date of birth' on-admin />

      <div class='control__buttons'>
        <AdminButton text='Change details' :disabled='isLoading' @click='updateAccount' />
      </div>
    </div>

  </div>
</template>

<script>
import BaseInput from '../../components/base/BaseInput'
import AdminButton from '../../components/creational/AdminButton'
import BaseSelect from '../../components/base/BaseSelect'
import BaseDatePicker from '../../components/base/BaseDatePicker'
export default {
  name: 'account-details',
  components: { BaseDatePicker, BaseSelect, AdminButton, BaseInput },
  async asyncData({ $api, $auth }) {
    const profile = await $api.auth.getProfile($auth.user.localId)
    const teams = await $api.team.getTeamsFromArray(profile.myTeams)

    return {
      nickname: profile.nickname,
      name: profile.name,
      country: profile.country,
      mainTeam: profile.mainTeam,
      sex: profile.sex,
      dob: profile.dob,
      teams
    }
  },
  data() {
    return {
      isLoading: false,
      teams: null,

      nickname: '',
      name: '',
      country: '',
      mainTeam: '',
      sex: '',
      dob: '',
    }
  },
  methods: {
    async updateAccount() {
      try {
        this.isLoading = true

        await this.$api.auth.updateProfile(this.$auth.user.localId, {
          nickname: this.nickname,
          name: this.name,
          country: this.country,
          mainTeam: this.mainTeam,
          sex: this.sex,
          dob: this.dob,
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

</style>
