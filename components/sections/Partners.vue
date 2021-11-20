<template>
  <div class='partners'>

    <div class='partners__title'>Partners</div>

    <div class='partners__content'>

      <a href='https://www.google.com/' target='_blank' tag='a' class='partners__item partners__item_google'></a>
      <a href='https://www.google.com/' target='_blank' class='partners__item partners__item_nasa'></a>
      <a href='https://www.google.com/' target='_blank' class='partners__item partners__item_navi'></a>
      <a href='https://www.google.com/' target='_blank' class='partners__item partners__item_arb'></a>
      <a href='https://www.telegram.com/' target='_blank' class='partners__item partners__item_telegram'></a>
      <a href='https://www.youtube.com/' target='_blank' class='partners__item partners__item_youtube'></a>
      <a href='https://www.google.com/' target='_blank' class='partners__item partners__item_be'></a>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Partners',
  props: {
    partners: { type: Array, default: () => [] }
  }
}
</script>

<style lang='scss' scoped>

.partners {
  margin-bottom: 116px;

  &__title {
    margin-bottom: 50px;
    font-weight: 700;
    line-height: 44px;
    font-size: 44px;
    color: #F5F5F5;
  }
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
  }
  &__item {
    max-width: 130px;
    width: 100%;
    cursor: pointer;
    height: auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    &_google {
      flex: 0 0 130px;
      background: url("@/assets/img/icons/partners/google.svg") no-repeat center;
      height: 48px;
    }

    &_nasa {
      flex: 0 0 70px;
      background: url("@/assets/img/icons/partners/nasa.svg") no-repeat center;
      height: 70px;
    }

    &_navi {
      flex: 0 0 70px;
      background: url("@/assets/img/icons/partners/navi.svg") no-repeat center;
      height: 64px;
    }

    &_arb {
      flex: 0 0 154px;
      background: url("@/assets/img/icons/partners/arb.svg") no-repeat center;
      height: 49px;
      background-size: contain;
    }

    &_telegram {
      flex: 0 0 56px;
      background: url("@/assets/img/icons/partners/telega.svg") no-repeat center;
      height: 56px;
    }

    &_youtube {
      flex: 0 0 56px;
      background: url("@/assets/img/icons/partners/youtube.svg") no-repeat center;
      height: 56px;
      background-size: contain;
    }

    &_be {
      flex: 0 0 52px;
      background: url("@/assets/img/icons/partners/be.svg") no-repeat center;
      height: 52px;
    }
  }
}

</style>
