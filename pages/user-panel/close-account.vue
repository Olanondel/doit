<template>
  <div class='user-panel'>
    <h2 class='user-panel__title'>Close Account</h2>


    <div class='user-panel__form'>
      <BaseInput v-model='currentPassword' :v='$v.currentPassword' type='password' title='Current password' on-admin />

      <div class='control__buttons'>
        <AdminButton text='Close Account' :disabled='isLoading' @click='removeAccount' />
      </div>
    </div>
  </div>
</template>

<script>
import { minLength, required } from 'vuelidate/lib/validators'
import AdminButton from '../../components/creational/AdminButton'

export default {
  name: 'close-account',
  components: { AdminButton },
  data() {
    return {
      currentPassword: ''
    }
  },
  validations: {
    currentPassword: {
      required,
      minLength: minLength(4)
    }
  },
  methods: {
    async removeAccount() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        try {
          this.$nuxt.$loading.start()

          await this.$api.auth.removeAccount(this.currentPassword)

          await this.$auth.logout('local')

          this.$nuxt.$loading.finish()

        } catch (err) {
          this.$nuxt.$loading.finish()
          alert(err)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
