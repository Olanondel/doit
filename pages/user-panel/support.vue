<template>
  <div class='user-panel'>
    <h2 class='user-panel__title'>Support</h2>

    <div class='user-panel__form'>
      <BaseInput v-model='user' disabled placeholder='Name' on-admin />
      <BaseInput v-model='topic' placeholder='Topic' on-admin />
      <BaseTextarea v-model='problem' placeholder='Your problem...' on-admin />

      <div class='control__buttons'>
        <AdminButton :disabled='isLoading' text='Submit' @click='sendSupportForm' />
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from '../../components/base/BaseInput'
import BaseTextarea from '../../components/base/BaseTextarea'
import AdminButton from '../../components/creational/AdminButton'
export default {
  name: 'support',
  components: { AdminButton, BaseTextarea, BaseInput },
  async asyncData({ $api, $auth }) {
    const profile = await $api.auth.getProfile($auth.user.localId)

    return {
      user: profile.name
    }
  },
  data() {
    return {
      isLoading: false,
      user: '',
      topic: '',
      problem: '',
    }
  },
  methods: {
    async sendSupportForm() {
      try {
        this.isLoading = true

        await this.$api.general.setSupportForm({
          user: this.user,
          userId: this.$auth.user.localId,
          topic: this.topic,
          problem: this.problem,
        })

        alert('success')
        this.isLoading = false

        await this.$router.push('/user-panel')
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
