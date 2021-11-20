<template>
  <div ref='tournament' class='tournament'>
    <div
      class='tournament__image'
      :style="{ backgroundImage: 'url(' + require('@/assets/img/common/tournament.jpg') + ')' }"
    >
      <span class='tournament__status tournament__status_ongoing'>Ongoing</span>
      <router-link append :to="tournamentId" tag='div' class='tournament__title tournament__title_mobile'>Dota 2 5v5 #2 - Sunday</router-link>
    </div>

    <div
      class='tournament__image tournament__image_mobile'
      :style="{ backgroundImage: 'url(' + require('@/assets/img/common/tournament.jpg') + ')' }"
      @click='toggleAccordion'
    >
      <span class='tournament__status tournament__status_ongoing'>Ongoing</span>
      <router-link append :to="tournamentId" tag='div' class='tournament__title tournament__title_mobile'>Dota 2 5v5 #2 - Sunday</router-link>
    </div>

    <div class='tournament__content'>
      <router-link :to="tournamentId" append tag='div' class='tournament__title'>Dota 2 5v5 #2 - Sunday</router-link>

      <div class='tournament__info info'>
        <div class='info__item'>
          <div class='info__key'>Prize</div>
          <div class='info__value'>$10</div>
        </div>

        <div class='info__item'>
          <div class='info__key'>Entry free</div>
          <div class='info__value'>Free to enter</div>
        </div>

        <div class='info__item'>
          <div class='info__key'>platform</div>
          <div class='info__value'>PS4</div>
        </div>

        <div class='info__item'>
          <div class='info__key'>Slots</div>
          <div class='info__value'>2 / 8</div>
        </div>

        <div class='info__item'>
          <div class='info__key'>Mode</div>
          <div class='info__value'>Capitains mode</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tournament',
  props: {
    tournamentId: { type: String, default: '' },

  },
  methods: {
    toggleAccordion(e) {
      this.$refs.tournament.classList.toggle('tournament_active')
    }
  }
}
</script>

<style lang='scss' scoped>

.tournament {
  border: 2px solid #20252B;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  transition: .6s;

  @media screen and (max-width: 480px) {
    flex: 0 0 100%;
    flex-direction: column;
    background: #151A1F;
  }

  &_active {
    .tournament__image {
      height: 165px;
    }

    .tournament__title_mobile {
      display: none;
    }

    .tournament__content {
      max-height: 100%;
      padding: 22px 33px;
    }
  }

  &__image {
    flex: 0 0 116px;
    position: relative;
    background-repeat: no-repeat;
    height: 128px;

    @media screen and (max-width: 480px) {
      background-size: cover;
      height: 66px;
      flex: 1 1 auto;
      display: none;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    &_mobile {
      display: none;

      @media screen and (max-width: 480px) {
        display: block;
        display: flex;
      }
    }
  }

  &__status {
    position: absolute;
    top: 6px;
    left: 6px;
    max-width: 88px;
    width: 100%;
    height: 32px;
    line-height: 24px;
    padding: 4px 13px;
    color: #F5F5F5;
    font-size: 16px;

    @media screen and (max-width: 480px) {
      display: none;
    }

    &_ongoing {
      background: #0A68F5;
    }

    &_finished {
      background: #B83333;
    }
  }

  &__content {
    padding: 22px 33px;
    flex: 1 1 auto;

    @media screen and (max-width: 480px) {
      overflow: hidden;
      max-height: 0;
      transition: all 0.2s ease-out;
      padding: 0;
    }
  }
  &__title {
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    opacity: 0.88;
    color: #F5F5F5;
    margin-bottom: 16px;
    position: relative;
    white-space: nowrap;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      font-size: 20px;
    }

    &_finished {
      color: #67707A;
    }

    &::after {
      @media screen and (max-width: 480px) {
        content: "";
        display: inline-block;
        width: 16px;
        top: 7px;
        right: 0;
        height: 9px;
        position: absolute;
        background: transparent url("@/assets/img/icons/tournaments/title-arrow.svg") no-repeat center;
      }
    }

    &_mobile {
      font-size: 20px;
      line-height: 20px;
      width: 100%;
      text-align: center;
      margin-bottom: 0 !important;
      display: none;

      &::after {
        right: 30px !important;
        background: transparent url("@/assets/img/icons/tournaments/title-arrow-to-bottom.svg") no-repeat center;
      }

      @media screen and (max-width: 480px) {
        display: block;
      }
    }
  }
}

.info {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;

  @media screen and (max-width: 480px) {
    gap: 24px;
  }

  &__item {
    display: flex;
    flex-direction: column;
  }
  &__key {
    font-size: 16px;
    line-height: 24px;
    color: #67707A;
    text-transform: uppercase;

    @media screen and (max-width: 480px) {
      font-size: 10px;
    }
  }
  &__value {
    color: #F5F5F5;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;

    @media screen and (max-width: 480px) {
      font-size: 14px;
    }
  }
}

</style>
