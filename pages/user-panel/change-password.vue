<template>
  <div class='user-panel'>
    <h2 class='user-panel__title'>Change password</h2>


    <div class='user-panel__form'>
      <BaseInput v-model='currentPassword' :v='$v.currentPassword' type='password' title='Current password' on-admin />
      <BaseInput v-model='newPassword' :v='$v.newPassword' type='password' title='New password' on-admin />

      <div class='control__buttons'>
        <AdminButton text='Change Password' :disabled='isLoading' @click='changePassword' />
      </div>
    </div>
  </div>
</template>

<script>
import { minLength, required } from 'vuelidate/lib/validators'
import BaseInput from '../../components/base/BaseInput'
import AdminButton from '../../components/creational/AdminButton'
export default {
  name: 'change-password',
  components: { AdminButton, BaseInput },
  data() {
    return {
      isLoading: false,
      currentPassword: '',
      newPassword: '',
    }
  },
  validations: {
    currentPassword: {
      minLength: minLength(4),
      required
    },
    newPassword: {
      minLength: minLength(4),
      required
    },
  },
  methods: {
    async changePassword() {
      await this.$v.$touch()

      if (!this.$v.$invalid) {
        try {
          this.isLoading = true

          await this.$api.auth.changePassword(this.currentPassword, this.newPassword)

          alert('success')
          this.isLoading = false
        } catch (err) {
          alert(err)
          this.isLoading = false
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
