<template>
  <div class='user-panel'>
    <h2 class='user-panel__title'>User Panel</h2>

    <div class='user-panel__links'>

      <nuxt-link
        v-for='link in links'
        :key='link.text'
        :to='link.url'
        class='user-panel__link'
      >{{link.text}}</nuxt-link>

      <nuxt-link to='' class='user-panel__link' @click.native='logout'>Logout</nuxt-link>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: 'My Profile', url: 'user-panel/profile', },
        { text: 'My Team', url: 'user-panel/my-team', },
        { text: 'Withdraw', url: 'user-panel/withdraw', },
        { text: 'Deposit', url: 'user-panel/deposit', },
        { text: 'Premium Account', url: 'user-panel/premium', },
        { text: 'Support', url: 'user-panel/support', },
        { text: 'Settings', url: 'user-panel/settings', },
        { text: 'Game profile', url: 'user-panel/game-profile', },
      ]
    }
  },
  methods: {
    logout() {
      this.$auth.logout('local')
    }
  }
}
</script>

<style lang='scss' scoped>

// find in global styles.scss

</style>
