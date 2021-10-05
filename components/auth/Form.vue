<template>
  <div class='login'>
    <div class='login__title'>{{title}}</div>

    <div class='login__form-wrapper'>
      <form class='login__form'>
        <BaseInput
          :text='firstLabelText'
          class='login__input'
        />
        <BaseInput
          :text='secondLabelText'
          class='login__input'
        />
        <BaseButton :text='buttonText' />
      </form>

      <div class='login__with'>
        <div class='login__social-text'>{{socialText}}</div>
        <ul class='login__social-list'>
          <li
            v-for='(item, index) in social'
            :key='index'
            class='login__social-item'
            :class='item.title'
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    title: String,
    socialText: String,
    firstLabelText: String,
    secondLabelText: String,
    buttonText: String,
    email: { type: String, default: '' },
    password: { type: String, default: '' },
  },
  data() {
    return {
      social: [
        { title: 'facebook', icon: '~/assets/img/auth/facebook.svg' },
        { title: 'social', icon: '~/assets/img/auth/social.svg' },
        { title: 'google', icon: '~/assets/img/auth/google.svg' },
        { title: 'steam', icon: '~/assets/img/auth/steam.svg' },
      ]
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
