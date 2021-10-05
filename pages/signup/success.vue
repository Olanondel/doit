<template>
  <div class='success'>
    <div class='message'>
      You registered on <nuxt-link to='/'>doit.gg</nuxt-link>
      <br> to continue verify your email
    </div>

    <BaseButton
      text='Verify email'
    />

    <div class='bottom-text'>
      <div>This is an automated email.</div>
      <div>If you received it in error, no action is required</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Success'
}
</script>

<style scoped>
.success {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #E6E6E6;
}

.message {
  line-height: 30px;
  margin-bottom: 15px;
}

.bottom-text {
  font-size: 14px;
  color: #2B405E;
  line-height: 21px;
}
</style>
