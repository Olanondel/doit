<template>
  <section class='contacts content'>
    <div class='contacts__content'>
      <h2 class='page-title contacts__title'>Contact us</h2>

      <ul class='contacts__info'>
        <li class='contacts__location contacts__item'><span class='contacts__item_opacity'>2440, Daisy Dr undefined Pembroke Pines, Arizona</span></li>
        <li class='contacts__number contacts__item'><span class='contacts__item_opacity'>Headquater</span>  <span class='contacts__item_color'>(+48) 517 429 774</span></li>
        <li class='contacts__email contacts__item'>
          <ul class='contacts__email-list'>
            <li class='contacts__email-item'><span class='contacts__item_color'>Support</span><span class='contacts__item_opacity'>@doit.gg</span></li>
            <li class='contacts__email-item'><span class='contacts__item_color'>Organizer</span><span class='contacts__item_opacity'>@doit.gg</span></li>
            <li class='contacts__email-item'><span class='contacts__item_color'>Sponsorship</span><span class='contacts__item_opacity'>@doit.gg</span></li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'contacts'
}
</script>

<style lang='scss' scoped>
.contacts {

  &__title {
    margin-bottom: 61px;
    margin-left: 24px;

    @media screen and (max-width: 680px) {
      margin-bottom: 44px;
      font-size: 32px;
    }
  }

  &__info {
    padding-left: 40px;
    margin-left: 42px;
    border-left: 1px solid #151A1F;
    font-size: 22px;
    line-height: 22px;
    color: #CCCCCC;

    @media screen and (max-width: 680px) {

    }
  }

  &__item {
    position: relative;

    &:not(:last-child) {
      margin-bottom: 68px;
    }

    &_color {
      color: #CCCCCC;
    }

    &_opacity {
      opacity: .5;
    }

    &:before {
      content: '';
      display: inline-block;
      width: 48px;
      height: 48px;
      border: 2px solid #151A1F;
      border-radius: 4px;
      left: -65px;
      top: -15px;
      position: absolute;
    }

    @media screen and (max-width: 680px) {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 63px;
    }
  }

  &__location {
    &:before {
      background: #0F1215 url('@/assets/img/icons/contacts/location.svg') no-repeat center
    }
  }
  &__number {
    &:before {
      background: #0F1215 url('@/assets/img/icons/contacts/phone.svg') no-repeat center
    }
  }
  &__email {
    &:before {
      background: #0F1215 url('@/assets/img/icons/contacts/email.svg') no-repeat center
    }
  }

  &__email-list {

  }

  &__email-item {
    &:not(:last-child) {
      margin-bottom: 22px;

      @media screen and (max-width: 680px) {
        margin-bottom: 16px;
      }
    }
  }
}
</style>
