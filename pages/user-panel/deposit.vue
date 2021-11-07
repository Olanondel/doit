<template>
  <div class='user-panel'>
    <h2 class='user-panel__title'>Deposit</h2>

    <h3 class='user-panel__balance'>Current balance: <span>{{ currentBalance }}</span></h3>

    <BaseInput v-model.number='balance' type='number' :disabled='isLoading' on-admin />

    <AdminButton :disabled='isLoading' text='add to balance' @click='addToBalance' />
  </div>
</template>

<script>
import BaseInput from '../../components/base/BaseInput'
import AdminButton from '../../components/creational/AdminButton'
export default {
  name: 'deposit',
  components: { AdminButton, BaseInput },
  async asyncData({ $api, $auth }) {
    const profile = await $api.auth.getProfile($auth.user.localId)

    return { currentBalance: profile.balance }
  },
  data() {
    return {
      balance: 0,
      currentBalance: null,
      isLoading: false
    }
  },
  methods: {
    async addToBalance() {
      // start

      try {
        this.isLoading = true

        await this.$api.auth.updateProfile(this.$auth.user.localId, {
          balance: +this.balance + +this.currentBalance
        })

        alert('success')

        this.currentBalance = +this.currentBalance + +this.balance
        this.balance = 0

        this.isLoading = false
      } catch (err) {
        alert(err)
        this.isLoading = false
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
