<template>
  <div class='user-panel'>
    <h2 class='user-panel__title'>Settings</h2>

    <div class='user-panel__links'>

      <nuxt-link
        v-for='link in links'
        :key='link.text'
        :to='link.url'
        class='user-panel__link'
      >{{ link.text }}
      </nuxt-link>

    </div>
  </div>
</template>

<script>
export default {
  name: 'settings',
  data() {
    return {
      links: [
        { text: 'Edit account details', url: '/user-panel/account-details', },
        { text: 'Change adress email', url: '/user-panel/change-email', },
        { text: 'Change password', url: '/user-panel/change-password', },
        // { text: 'Manage preferences', url: '', },
        { text: 'Close Account', url: '/user-panel/close-account', },
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
.user-panel {

  &__title {
    // global styles
  }

  &__links {
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
  }

  &__link {
    flex: 1 1 auto;
    text-align: center;
    font-weight: 700;
    font-size: 22px;
    line-height: 22px;
    color: #F5F5F5;
    padding: 30px 15px;
    border: 2px solid #20252B;
    margin-bottom: 50px;
  }
}
</style>
