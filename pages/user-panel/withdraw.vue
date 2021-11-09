<template>
  <div class='user-panel'>
    <h2 class='user-panel__title'>Withdraw</h2>

    <h3 class='user-panel__balance'>Current balance: <span>{{ currentBalance }}</span></h3>

    <BaseInput v-model.number='input' type='number' :disabled='isLoading' on-admin />

    <AdminButton :disabled='isLoading' text='withdraw' @click='withdraw' />
  </div>
</template>

<script>
import BaseInput from '../../components/base/BaseInput'
import AdminButton from '../../components/creational/AdminButton'
export default {
  name: 'withdraw',
  components: { AdminButton, BaseInput },
  async asyncData({ $api, $auth }) {
    const profile = await $api.auth.getProfile($auth.user.localId)

    return { currentBalance: profile.balance }
  },
  data() {
    return {
      input: 0,
      currentBalance: 0,
      isLoading: false
    }
  },
  methods: {
    async withdraw() {
      // start

      if (+this.currentBalance > +this.input) {
        try {
          this.isLoading = true

          await this.$api.auth.updateProfile(this.$auth.user.localId, {
            balance: +this.currentBalance - +this.input
          })

          alert('success')

          this.currentBalance = +this.currentBalance - +this.input
          this.input = 0

          this.isLoading = false
        } catch (err) {
          alert(err)
          this.isLoading = false
        }
      } else {
        alert('На вашем щету недостаточно средств!')
      }

      // end
    }
  }
}
</script>

<style lang='scss' scoped>
.user-panel__balance {
  font-size: 24px;
  margin-bottom: 24px;
  color: gray;

  span {
    font-weight: 700;
    color: #f5f5f5;
  }
}
</style>
