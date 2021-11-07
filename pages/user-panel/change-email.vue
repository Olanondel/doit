<template>
  <div class='user-panel'>
    <h2 class='user-panel__title'>Change email</h2>


    <div class='user-panel__form'>
      <BaseInput v-model='currentPassword' :v='$v.currentPassword' type='password' title='Current password' on-admin />
      <BaseInput v-model='newEmail' :v='$v.newEmail' type='email' title='New email' on-admin />

      <div class='control__buttons'>
        <AdminButton text='Change Email' :disabled='isLoading' @click='changeEmail' />
      </div>
    </div>
  </div>
</template>

<script>
import { email, minLength, required } from 'vuelidate/lib/validators'
import BaseInput from '../../components/base/BaseInput'
import AdminButton from '../../components/creational/AdminButton'
export default {
  name: 'change-email',
  components: { AdminButton, BaseInput },
  data() {
    return {
      isLoading: false,
      currentPassword: '',
      newEmail: '',
    }
  },
  validations: {
    currentPassword: {
      minLength: minLength(4),
      required
    },
    newEmail: {
      minLength: minLength(4),
      required,
      email
    },
  },
  methods: {
    async changeEmail() {
      await this.$v.$touch()

      if (!this.$v.$invalid) {
        try {
          this.isLoading = true

          await this.$api.auth.changeEmail(this.currentPassword, this.newEmail)

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
