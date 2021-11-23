<template>
  <div class='tournament'>
    <div class='tournament__headers'>
      <div class='tournament__back' @click='$router.push("/tournaments/" + $route.params.gameId)'>Back</div>

      <div
        class='tournament__game-image'
        :style="{ backgroundImage: 'url(' + require('@/assets/img/common/dota.png') + ')' }"
      ></div>
    </div>

    <div class='tournament__row'>
      <div class='tournament__main'>

        <div class='tournament__header'>
          <div class='tournament__image'
               :style="{ backgroundImage: 'url(' + require('@/assets/img/common/tournament-title.png') + ')' }" />

          <div class='tournament__header-content'>
            <div class='tournament__title'>{{ basicInfo.title }}</div>
            <div class='tournament__player-count'>{{ players.length }} players signed up</div>
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
            <div class='tournament__sidebar-item-value'>At least {{ addRequirements.minAge }} years old</div>
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
              in this tournament.
            </div>
          </div>
        </div>

        <div class='tournament__sidebar-signup'>
          <div class='tournament__sidebar-signup-tip'>Sign up closes in 43 minutes</div>
          <div v-if='joined' class='tournament__sidebar-signup-button tournament__sidebar-signup-button_joined' @click='openModal'>Joined</div>
          <div v-else class='tournament__sidebar-signup-button' @click='openModal'>'Get in ->'</div>
        </div>

        <div class='tournament__sidebar-social'>
          <a href='' target='_blank'
             class='tournament__sidebar-social-item tournament__sidebar-social-item_facebook'></a>
          <a href='' target='_blank'
             class='tournament__sidebar-social-item tournament__sidebar-social-item_twitter'></a>
          <a href='' target='_blank'
             class='tournament__sidebar-social-item tournament__sidebar-social-item_instagram'></a>
          <a href='' target='_blank' class='tournament__sidebar-social-item tournament__sidebar-social-item_p'></a>
          <a href='' target='_blank' class='tournament__sidebar-social-item tournament__sidebar-social-item_cat'></a>
        </div>
      </div>
    </div>

    <div ref='modal' class='modal'>
      <div class='modal__content'>
        <div class='modal__title'>Select team</div>
        <div
          v-for='item in ownTeams'
          :key='item.id'
          class='modal__item'
        >
          <div class='modal__item-title'>{{ item.name }}</div>
          <div v-if='!teams.includes(item.id)' class='modal__item-button' @click='joinWithTeam(item.id)'>Join With</div>
          <div v-else class='modal__item-button' @click='cancelRegistration(item.id)'>Cancel</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  async asyncData({ $api, params }) {
    return { ...await $api.general.getOne('tournaments', params.tournamentId) }
  },
  data() {
    return {
      playersFullInfo: [],
      ownTeams: [],
      profile: null
    }
  },
  computed: {
    joined() {
      return this.ownTeams.some(el => this.teams.includes(el.id))
    }
  },
  async mounted() {
    if (this.players?.length) {
      this.playersFullInfo = await Promise.all(this.players.map(async player => {
        return await this.$api.player.getUser(player.id)
      }))
    }

    await this.getOwnTeams()
  },
  methods: {
    openModal() {
      this.$refs.modal.classList.add('modal_active')

      this.$refs.modal.addEventListener('click', this.checkClickToCloseModal)
    },
    async getOwnTeams() {
      this.profile = await this.$api.auth.getProfile(this.$auth.user.localId)

      this.ownTeams = await Promise.all(this.profile.myTeams.map(async el => await this.$api.general.getOne('teams', el)))
    },
    checkClickToCloseModal(e) {
      if (e.target.classList.contains('modal')) {
        this.$refs.modal.classList.remove('modal_active')

        this.$refs.modal.removeEventListener('click', this.checkClickToCloseModal)
      }
    },
    async joinWithTeam(id) {
      if (!this.joined) {
        this.$nuxt.$loading.start()
        await this.$api.general.update('tournaments', this.$route.params.tournamentId, {
          teams: firebase.firestore.FieldValue.arrayUnion(id)
        })
        const tournament = await this.$api.general.getOne('tournaments', this.$route.params.tournamentId)
        this.teams = tournament.teams

        this.$nuxt.$loading.finish()
      } else {
        alert('Only one team can be joined')
      }
    },
    async cancelRegistration(id) {
      this.$nuxt.$loading.start()
      await this.$api.general.update('tournaments', this.$route.params.tournamentId, {
        teams: firebase.firestore.FieldValue.arrayRemove(id)
      })
      const tournament = await this.$api.general.getOne('tournaments', this.$route.params.tournamentId)
      this.teams = tournament.teams
      this.$nuxt.$loading.finish()
    }
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

        &_joined {
          background:linear-gradient(-120deg, #D62121, #C72C2C, #3a1111);
        }
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

  .modal {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: none;
    z-index: 19;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;

    &_active {
      display: flex;
    }

    &__content {
      max-width: 300px;
      background: #0F1215;
      padding: 24px 27px;
      width: 100%;
      height: 400px;
      overflow: auto;
      border-radius: 4px;
    }

    &__title {
      font-weight: 500;
      font-size: 24px;
      line-height: 24px;
      color: #F5F5F5;
      margin-bottom: 24px;
      padding-bottom: 6px;
      border-bottom: 1px solid #F5F5F5;
    }

    &__item {
      display: flex;
      justify-content: space-between;

      &-title {
        color: slategray;
      }

      &-button {
        color: green;
        cursor: pointer;
      }
    }
  }
}


</style>
