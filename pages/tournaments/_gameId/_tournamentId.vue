<template>
  <div class='tournament'>
    <div class='tournament__headers'>
      <div class='tournament__back'>Back</div>

      <div
        class='tournament__game-image'
        :style="{ backgroundImage: 'url(' + require('@/assets/img/common/dota.png') + ')' }"
      ></div>
    </div>

    <div class='tournament__row'>
      <div class='tournament__main'>

        <div class='tournament__header'>
          <div class='tournament__image' :style="{ backgroundImage: 'url(' + require('@/assets/img/common/tournament-title.png') + ')' }" />

          <div class='tournament__header-content'>
            <div class='tournament__title'>{{basicInfo.title}}</div>
            <div class='tournament__player-count'>{{players.length}} players signed up</div>
          </div>
        </div>

        <div class='tournament__tabs'>
          <div class='tournament__tabs-row'>
            <nuxt-link to='info' tag='div' class='tournament__tab'>Info</nuxt-link>
            <nuxt-link to='bracket' tag='div' class='tournament__tab'>Bracket</nuxt-link>
            <nuxt-link to='players' tag='div' class='tournament__tab'>Players</nuxt-link>
            <nuxt-link to='rules' tag='div' class='tournament__tab'>Rules</nuxt-link>
            <nuxt-link to='support' tag='div' class='tournament__tab'>Support</nuxt-link>
          </div>

          <div class='tournament__tabs-content'>
            <nuxt-child
              :tournament='$data'
              :players='playersFullInfo'
              :rules='basicInfo.quickRules'
            />
          </div>
        </div>

      </div>

      <div class='tournament__sidebar'>
        <div class='tournament__sidebar-header'>Requirements</div>

        <div class='tournament__sidebar-content'>
          <div class='tournament__sidebar-item'>
            <div class='tournament__sidebar-item-key'>Minimum age</div>
            <div class='tournament__sidebar-item-value'>At least {{addRequirements.minAge}} years old</div>
          </div>

          <div class='tournament__sidebar-item'>
            <div class='tournament__sidebar-item-key'>Residence</div>
            <div class='tournament__sidebar-item-value'>More info</div>
          </div>

          <div class='tournament__sidebar-item'>
            <div class='tournament__sidebar-item-key'>PSN account</div>
            <div class='tournament__sidebar-item-value'>Register your name ID</div>
          </div>

          <div class='tournament__sidebar-item'>
            <div class='tournament__sidebar-item-key'>Play</div>
            <div class='tournament__sidebar-item-value'>Please log in to take part
              in this tournament.</div>
          </div>
        </div>

        <div class='tournament__sidebar-signup'>
          <div class='tournament__sidebar-signup-tip'>Sign up closes in 43 minutes</div>
          <div class='tournament__sidebar-signup-button'>Log in / Register</div>
        </div>

        <div class='tournament__sidebar-social'>
          <a href='' target='_blank' class='tournament__sidebar-social-item tournament__sidebar-social-item_facebook'></a>
          <a href='' target='_blank' class='tournament__sidebar-social-item tournament__sidebar-social-item_twitter'></a>
          <a href='' target='_blank' class='tournament__sidebar-social-item tournament__sidebar-social-item_instagram'></a>
          <a href='' target='_blank' class='tournament__sidebar-social-item tournament__sidebar-social-item_p'></a>
          <a href='' target='_blank' class='tournament__sidebar-social-item tournament__sidebar-social-item_cat'></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '_tournamentId',
  async asyncData({ $api, params }) {
    return { ...await $api.general.getOne('tournaments', params.tournamentId),  }
  },
  data() {
    return {
      playersFullInfo: []
    }
  },
  async mounted() {
    this.playersFullInfo = await Promise.all(this.players.map(async player => {
      return await this.$api.player.getUser(player.id)
    }))
  }

}
</script>

<style lang='scss' scoped>

.nuxt-link-active {
  color: #F5F5F5 !important;
  font-weight: 500;
  font-size: 16px;
  border-top: 2px solid #20252B;
  border-left: 2px solid #20252B;
  border-right: 2px solid #20252B;
  border-bottom: 3px solid #0F1215;
  padding: 8px 36px !important;
  position: relative;
  z-index: 10;
}

.tournament {


  &__headers {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  &__back {
    margin-top: 16px;
    position: relative;
    padding-left: 24px;
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;
    color: #9FB1CC;

    &::before {
      left: 0;
      top: 7px;
      content: "";
      display: inline-block;
      width: 16px;
      height: 8px;
      position: absolute;
      background: transparent url("@/assets/img/icons/tournaments/arrow-to-left.svg") no-repeat center;
    }
  }
  &__game-image {
    width: 253px;
    height: 45px;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }
  &__main {
    flex: 1 1 auto;
  }
  &__header {
    margin-bottom: 30px;
    display: flex;
    padding: 42px 44px;
    border: 2px solid #20252B;
  }
  &__image {
    flex: 0 0 62px;
    height: 62px;
    margin-right: 15px;
  }
  &__header-content {
    flex: 1 1 auto;
  }
  &__title {
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    color: #F5F5F5;
  }
  &__player-count {
    font-size: 16px;
    line-height: 24px;
    color: #67707A;
  }

  &__tabs {

  }
  &__tabs-row {
    display: flex;
  }
  &__tab {
    color: #67707A;
    text-align: center;
    font-size: 16px;
    line-height: 32px;
    padding: 10px 40px;
    cursor: pointer;
  }
  &__tabs-content {
    border: 2px solid #20252B;
    padding: 40px;
    position: relative;
    z-index: 1;
    top: -3px;
  }

  &__sidebar {
    flex: 0 0 300px;
    border: 2px solid #20252B;

    &-header {
      border-bottom: 2px solid #20252B;
      padding: 30px;
      font-weight: 500;
      font-size: 24px;
      line-height: 24px;
      color: #F5F5F5;
    }
    &-content {
      padding: 30px;
      border-bottom: 2px solid #20252B;
    }
    &-item {
      margin-bottom: 24px;

      &-key {
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        color: #F5F5F5;
        margin-bottom: 12px;
      }
      &-value {
        color: #67707A;
      }
    }
    &-signup {
      padding: 30px;
      border-bottom: 2px solid #20252B;

      &-tip {
        color: #B83333;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 16px;
      }
      &-button {
        width: 100%;
        padding: 16px 50px;
        color: #fff;
        cursor: pointer;
        background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 2px;
      }
    }
    &-social {
      padding: 18px 62px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #20252B;


      &-item {
        width: 16px;
        height: 16px;
        cursor: pointer;
        display: inline-block;

        &_facebook {
          background: transparent url("@/assets/img/icons/tournaments/social/facebook.svg") no-repeat center;
        }

        &_twitter {
          background: transparent url("@/assets/img/icons/tournaments/social/twitter.svg") no-repeat center;
        }

        &_instagram {
          background: transparent url("@/assets/img/icons/tournaments/social/instagram.svg") no-repeat center;
        }

        &_p {
          background: transparent url("@/assets/img/icons/tournaments/social/p.svg") no-repeat center;
        }

        &_cat {
          background: transparent url("@/assets/img/icons/tournaments/social/cat.svg") no-repeat center;
        }
      }
    }
  }
}

</style>
