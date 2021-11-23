<template>
  <div class='admin-create-wrapper'>
    <div class='admin-create'>

      <AdminCreateTitle title='New/Edit Tournament' />

      <AccordeonWithSlot title='Basic info'>
        <BaseSelect
          v-model='basicInfo.host'
          :options='hostList'
          on-admin
          title='Host'
          mb='22'
        />

        <BaseInput
          v-model='basicInfo.title'
          on-admin
          mb='22'
          title='Tournament name*' />

        <BaseInput
          v-model='basicInfo.url'
          title='URL'
          on-admin
          mb='22'
          url='Doit.gg/'
          text='URL'
        />

        <BaseTextarea
          v-model='basicInfo.quickRules'
          class='mb22'
          on-admin
          placeholder='You can write here somebody about your tournament....'
          title='Quick Rules'
        />
      </AccordeonWithSlot>

      <AccordeonWithSlot title='Game info'>
        <BaseSelect
          v-model='game.game'
          :options='gamesList'
          label='name'
          title='Game'
          on-admin
        />

        <AdminRadio
          v-model='game.type'
          name='gameTypes'
          :options='radioGameType'
          title='Type'
        />

        <BaseSelect
          v-model='game.format'
          title='Format*'
          :options='formatList'
          on-admin
        />

        <BaseCheckbox
          v-model='game.thirdPlaceMatch'
          text='Include a match for 3rd place'
          on-admin
        />

        <div class='flex-between'>
          <BaseSelect
            v-model='game.mode'
            :options='modeList'
            title='Mode'
            class='mode'
            on-admin />

          <BaseSelect
            v-model='game.mapVotingSystem'
            :options='mapVotingSystemList'
            title='Map voting system'
            class='voting'
            on-admin
          />
        </div>

        <AdminUploadImage
          :file='game.mainBannerFileName'
          title='Main Banner 370x200*'
          @getImage='changeMainBanner'
        />

        <AdminUploadImage
          :file='game.tournamentBgFileName'
          title='Tournament background min 2000 x 3000'
          @getImage='changeTournamentBg'
        />

      </AccordeonWithSlot>

      <AccordeonWithSlot title='Registration'>

        <BaseCheckbox v-model='registration.autoApprove' on-admin text='Don’t Approve players automatically' />

        <RegistrationType v-model='registration.type' class='mb22' />

        <DateWithTime
          on-admin
          :date.sync='registration.startDate'
          :time.sync='registration.startTime'
          class='mb22'
          title='Start time*'
        />

        <DateWithTime
          on-admin
          :date.sync='registration.estimatedEndDate'
          :time.sync='registration.estimatedEndTime'
          class='mb22'
          title='Estimated end*' />

        <BaseCheckbox
          v-model='registration.isCheckinTime'
          on-admin
          text='Checkin Time'
        />

        <BaseSelect
          v-model='registration.checkinTime'
          :options='checkinTimeList'
          label='string'
          class='checkinTime'
          on-admin
        />

        <div class='admin-create__timezone mb22'>{{ timeZone }}</div>

      </AccordeonWithSlot>

      <AccordeonWithSlot title='If paid'>
        <InputWithText v-model.number='registration.cost' class='register-cost' text='Register Cost' />
      </AccordeonWithSlot>

      <AccordeonWithSlot title='Player list'>
        <PlayersButtons class='mb22' @openList='openModal' />

        <BaseCheckbox v-model='isHiddenOnWebsite' on-admin text='Don’t show tournament on website' class='mb22' />
      </AccordeonWithSlot>

      <AccordeonWithSlot title='Leagues'>
        <LinkWithText text='Connect tournament with league' button-text='Choose League' class='mb22' @clickBtn='openLeaguesModal' />

        <BaseCheckbox v-model='isOnlyLeague' on-admin text='Only League System' class='mb22' />
      </AccordeonWithSlot>

      <AccordeonWithSlot title='Prize pool'>
        <div class='flex-between mb22 '>
          <InputWithText v-model.number='prizePool.pool' text='Prize pool: ' />

          <DoubleInputWithText
            text='MAX players/teams:'
            :max-players.sync='prizePool.maxPlayers'
            :max-teams.sync='prizePool.maxTeams'
          />
        </div>

        <BaseCheckbox v-model='prizePool.isThirdPlace' on-admin text='3rd place turn on?' class='mb22' />

        <div class='flex-between'>
          <div class='column'>
            <PrizePlaces :places='prizePlaces' class='mb22' v-bind.sync='prizePool.places' />

            <AdminRadio v-model='prizePool.type' :options='prizeTypes' name='prize-type' class='mb22' title='Type' />
          </div>
          <div class='column'>
            <PrizeRounds v-bind.sync='prizePool.rounds' class='mb22' />

            <AdminRadio v-model='prizePool.isDonations' name='prizePoolDonation' :options='prizePoolDonations'
                        title='Donations' />
          </div>
        </div>
      </AccordeonWithSlot>

      <AccordeonWithSlot title='Voting'>

        <BaseCheckbox v-model='voting.everyMatch' on-admin class='mb22 admin-checkbox'
                      text='Allow registered users in tournament to provide scores for every match' />
        <BaseCheckbox v-model='voting.ownMatch' on-admin class='mb22 admin-checkbox'
                      text='Allow registered users only in their match to provide scores' />

      </AccordeonWithSlot>

      <AccordeonWithSlot title='Additional requirements'>

        <div class='flex-between mb22'>
          <div>
            <BaseCheckbox on-admin v-model='addRequirements.accounts.psn' text='PSN Account' class='account__item' />
            <BaseCheckbox on-admin v-model='addRequirements.accounts.xbox' text='Xbox Account' class='account__item' />
            <BaseCheckbox on-admin v-model='addRequirements.accounts.steam' text='Steam Account'
                          class='account__item' />
            <BaseCheckbox on-admin v-model='addRequirements.accounts.lol' text='League of Legends Account'
                          class='account__item' />
            <BaseCheckbox on-admin v-model='addRequirements.accounts.blizzard' text='Blizzard Account'
                          class='account__item' />
          </div>

          <div>
            <InputWithText v-model='addRequirements.country' text='Country: ' button-text='Choose country' class='mb22' />

            <InputWithText v-model='addRequirements.minAge' text='Min Age: ' />
          </div>
        </div>

      </AccordeonWithSlot>

      <AccordeonWithSlot title='Extra'>

        <BaseInput v-model='extra.lobby' title='Lobby' on-admin class='mb22' />
        <BaseInput v-model='extra.mode' title='Mode' on-admin class='mb22' />
        <BaseInput v-model='extra.veto' title='VETO' on-admin class='mb22' />

        <div class='flex mb22'>
          <div class='extra__server'>
            <h2 class='admin__title500 mb22'>Server region</h2>

            <BaseCheckbox
              v-for='item in serverRegion'
              :key='item.value'
              v-model='extra.serverRegion[item.value]'
              :text='(item.text).toUpperCase()'
              class='server__item'
              on-admin
            />
          </div>
          <div>
            <h2 class='admin__title500 mb22'>Platform</h2>

            <BaseCheckbox
              v-for='item in platforms'
              :key='item.value'
              v-model='extra.platform[item.value]'
              :text='(item.text).toUpperCase()'
              class='server__item'
              on-admin
            />
          </div>
        </div>

        <BaseInput v-model='extra.social.discord' title='Discord URL' on-admin class='mb22' />
        <BaseInput v-model='extra.social.facebook' title='Facebook URL' on-admin class='mb22' />
        <BaseInput v-model='extra.social.twitter' title='Twitter URL' on-admin class='mb22' />
        <BaseInput v-model='extra.social.vk' title='VK URL' on-admin class='mb22' />
        <BaseInput v-model='extra.social.twitch' title='Twitch URL' on-admin class='mb22' />
        <BaseInput v-model='extra.social.youtube' title='Youtube URL' on-admin class='mb22' />

      </AccordeonWithSlot>

      <AccordeonWithSlot ref='streamsWrapper' title='Streams'>

        <div
          v-for='(item, index) in streams'
          :key='index'
          class='mb22'
        >
          <BaseInput v-model='streams[index].url' on-admin title='Twitch Stream' />

          <BaseInput v-model='streams[index].nationality' title='Nationality' on-admin class='stream__nationality' />
        </div>

        <div class='add__button mb22' @click='addStream'>+ Add Stream</div>

      </AccordeonWithSlot>

      <AccordeonWithSlot ref='sponsorsWrapper' title='Sponsors'>

        <AdminUploadImage
          v-for='(item, index) in sponsors'
          :key='index'
          :file='item.imageFileName'
          :title=" 'Sponsor logo #' + (index + 1)"
          class='mb22'
          @getImage='changeSponsorImage($event, index)'
        />

        <div class='add__button mb22' @click='addSponsor'>+ Add Sponsor</div>

      </AccordeonWithSlot>

      <AccordeonWithSlot title='Rules'>

        <BaseTextarea v-model='rules' title='Rules' on-admin class='mb22' />

      </AccordeonWithSlot>

      <div class='control-buttons'>
        <div v-if='id' class='control-buttons__button' @click='removeTournament'>Delete Tournament</div>
        <div v-if='id && ongoing' class='control-buttons__button' @click='finishTournament'>Finish Tournament</div>
        <div class='control-buttons__button' @click='saveTournament'>Save changes</div>
      </div>

      <div v-show='isModalOpen' ref='players-modal' class='modal'>
        <div class='modal__content'>

          <div v-if='!players.length' class='modal__item'>Список игроков пуст!</div>

          <div
            v-for='item in players'
            :key='item.id'
            class='modal__item'
          >
            <div class='modal__name'>item.name</div>

            <div class='modal__remove-button' @click='removePlayer(item.id)'>remove</div>
          </div>

        </div>
      </div>

      <div v-show='isLeaguesModalOpen' ref='leagues-modal' class='modal'>
        <div class='modal__content'>

          <div v-if='!leaguesList.length' class='modal__item'>Список лиг пуст!</div>

          <div
            v-for='item in leaguesList'
            :key='item.id'
            class='modal__item'
          >
            <div class='modal__name'>{{ item.title }}</div>

            <div v-if='!ownLeagues.find(el => el.id === item.id)' class='modal__remove-button modal__remove-button_join' @click='joinToLeague(item)'>Join</div>
            <div v-else class='modal__remove-button' @click='leaveLeague(item)'>Leave</div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import AdminCreateTitle from '../../../components/creational/CreateTitle'
import AccordeonWithSlot from '../../../components/admin/create/AccordeonWithSlot'
import BaseInput from '../../../components/base/BaseInput'
import BaseSelect from '../../../components/base/BaseSelect'
import BaseTextarea from '../../../components/base/BaseTextarea'
import BaseCheckbox from '../../../components/base/BaseCheckbox'
import AdminRadio from '../../../components/admin/create/AdminRadio'
import AdminUploadImage from '../../../components/admin/create/AdminUploadImage'
import RegistrationType from '../../../components/admin/create/RegistrationType'
import DateWithTime from '../../../components/admin/create/DateWithTime'
import PlayersButtons from '../../../components/admin/create/PlayersButtons'
import InputWithText from '../../../components/admin/create/InputWithText'
import PrizePlaces from '../../../components/admin/create/PrizePlaces'
import PrizeRounds from '../../../components/admin/create/PrizeRounds'
import DoubleInputWithText from '../../../components/admin/create/DoubleInputWithText'
import LinkWithText from '../../../components/admin/create/LinkWithText'

export default {
  name: 'TournamentData',
  components: {
    LinkWithText,
    DoubleInputWithText,
    PrizeRounds,
    PrizePlaces,
    InputWithText,
    PlayersButtons,
    DateWithTime,
    RegistrationType,
    AdminUploadImage,
    AdminRadio,
    BaseCheckbox,
    BaseTextarea,
    BaseSelect,
    BaseInput,
    AccordeonWithSlot,
    AdminCreateTitle
  },
  async asyncData({ $api, params, error }) {

    const tournament = await $api.tournament.getTournament(params.id)

    if (!tournament && params.id !== 'add') error({ statusCode: 404 })

    const gamesData = await $api.game.getGames(10)

    const games = gamesData[0].map(el => ({ name: el.name, id: el.id }))

    return {  gamesList: games, ...tournament }
  },
  data() {
    return {
      isHiddenOnWebsite: false,
      league: '',
      isOnlyLeague: false,
      rules: '',
      id: '',
      ongoing: true,
      ownLeagues: [],

      basicInfo: {
        host: '',
        title: '',
        url: '',
        quickRules: ''
      },

      game: {
        title: '',
        type: 'two',
        format: '',
        thirdPlaceMatch: false,
        mode: '',
        mapVotingSystem: '',
        mainBanner: '',
        mainBannerFileName: '',
        mainBannerFile: '',
        mainBannerInitial: '',
        tournamentBg: '',
        tournamentBgFileName: '',
        tournamentBgInitial: '',
        tournamentBgFile: '',
        game: {},
      },

      registration: {
        autoApprove: false,
        type: 'Free',
        startDate: '',
        startTime: '',
        estimatedEndDate: '',
        estimatedEndTime: '',
        isCheckinTime: false,
        checkinTime: '',
        cost: ''
      },

      players: [

      ],

      prizePool: {
        pool: '',
        places: { first: '', second: '', third: '', fourth: '' },
        type: 'Nothing',
        rounds: { Ro8: '', Ro16: '', Ro32: '', Ro64: '', Ro128: '', Ro256: '', Ro512: '' },
        isThirdPlace: false,
        isDonations: 'No Active',
        maxPlayers: '',
        maxTeams: ''
      },

      voting: {
        everyMatch: false,
        ownMatch: false
      },

      addRequirements: {
        accounts: { psn: false, xbox: false, steam: false, lol: false, blizzard: false },
        country: '',
        minAge: 0
      },

      extra: {
        lobby: '',
        mode: '',
        veto: '',

        serverRegion: {
          'EU&NE': false,
          'EU&W': false,
          'AU&OC': false,
          'CHINA': false,
          'ASIA': false,
          'AMERICA': false
        },
        platform: {
          pc: false,
          xboxOne: false,
          ps4: false,
          nintendoSwitch: false,
          ps5: false,
          xboxSeriesX: false
        },

        social: {
          discord: '',
          facebook: '',
          twitter: '',
          vk: '',
          twitch: '',
          youtube: ''
        }
      },

      streams: [
        { url: '', nationality: '' }
      ],

      sponsors: [
        { url: '', image: '', initialImage: '', imageFile: '', imageFileName: '' }
      ],


      radioGameType: [
        { text: 'Single stage tournament', value: 'single' },
        { text: 'Two stage tournament', value: 'two' }
      ],
      prizeTypes: [
        { value: 'Money', text: 'Money' },
        { value: 'Thing', text: 'Thing' },
        { value: 'Money+Thing', text: 'Money+Thing' },
        { value: 'Nothing', text: 'Nothing' },
        { value: 'Qualifiers', text: 'Qualifiers' }
      ],
      prizeRounds: ['Ro8', 'Ro16', 'Ro32', 'Ro64', 'Ro128', 'Ro256', 'Ro512'],
      prizePoolDonations: [
        { text: 'Active', value: 'Active' },
        { text: 'No Active', value: 'No Active' }
      ],
      tournamentBgTitle: '',
      prizePlaces: ['1st   place: ', '2nd   place: ', '3rd   place: ', '4th   place: '],
      serverRegion: [
        { text: 'europe nordic & east', value: 'EU&NE' },
        { text: 'Europe West', value: 'EU&W' },
        { text: 'Australia & Oceania', value: 'AU&OC' },
        { text: 'china', value: 'CHINA' },
        { text: 'Asia', value: 'ASIA' },
        { text: 'America', value: 'AMERICA' }
      ],
      platforms: [
        { text: 'pc', value: 'pc' },
        { text: 'xbox one', value: 'xboxOne' },
        { text: 'ps4', value: 'ps4' },
        { text: 'nintendo switch', value: 'nintendoSwitch' },
        { text: 'ps5', value: 'ps5' },
        { text: 'xbox series x', value: 'xboxSeriesX' }
      ],
      gamesList: [],
      leaguesList: [],
      formatList: ['1v1', '2v2', '5v5'],
      mapVotingSystemList: ['map voting 1', 'map voting 2', 'map voting 3',],
      hostList: ['host 1', 'host 2', 'host 3'],
      modeList: ['mode 1', 'mode 2', 'mode 3'],
      checkinTimeList: [
        { string: '10 minute', number: 10 },
        { string: '20 minute', number: 20 },
        { string: '30 minute', number: 30 }
      ],
      isModalOpen: false,
      isLeaguesModalOpen: false,
      isLoading: false

    }
  },
  computed: {
    timeZone() {
      return '(GMT -05:00) Eastern time — set the time zone from your settings'
    }
  },
  methods: {
    joinToLeague(league) {
      this.ownLeagues.push(league)
    },
    leaveLeague(league) {
      this.ownLeagues = this.ownLeagues.filter(el => el.id !== league.id)
    },
    async removeTournament() {
      try {
        this.$nuxt.$loading.start()

        await Promise.all([
          this.game.mainBannerInitial ? await this.$api.tournament.removeImage(this.id, this.game.mainBannerInitial) : Promise.resolve,
          this.game.tournamentBgInitial ? await this.$api.tournament.removeImage(this.id, this.game.tournamentBgInitial) : Promise.resolve,

          ...this.sponsors.map(async (el, index) => {
            if (el.initialImage) {
              await this.$api.tournament.removeImage(this.id, el.initialImage, `sponsor-${index}`)
            }
          })
        ])

        await this.$api.tournament.removeTournament(this.id)
        this.$nuxt.$loading.finish()
        alert('success')
      } catch (err) {
        alert(err)
        this.$nuxt.$loading.finish()
      }
    },
    async finishTournament() {
      try {
        this.$nuxt.$loading.start()

        await this.$api.tournament.saveTournament({
          ongoing: false,
          id: this.id
        })

        this.ongoing = false

        this.$nuxt.$loading.finish()
        alert('success')
      } catch (err) {
        alert(err)
        this.$nuxt.$loading.finish()
      }
    },
    async openLeaguesModal() {
      try {
        this.$nuxt.$loading.start()

        if (!this.leaguesList.length) {
          const leagues = await this.$api.general.get('leagues')

          if (leagues?.length) {
            this.leaguesList = leagues.map(el => ({ title: el.basicInfo.title, id: el.id }))
          }
        }

        this.isLeaguesModalOpen = true
        this.$refs['leagues-modal'].addEventListener('click', this.checkClickToCloseLeaguesModal)
        this.$nuxt.$loading.finish()
      } catch (err) {
        this.$nuxt.$loading.finish()
        alert(err)
      }
    },
    openModal() {
      this.isModalOpen = true

      this.$refs['players-modal'].addEventListener('click', this.checkClickToCloseModal)
    },
    checkClickToCloseModal(e) {
      if (e.target.classList.contains('modal')) {
        this.isModalOpen = false

        this.$refs['players-modal'].removeEventListener('click', this.checkClickToCloseModal)
      }
    },
    checkClickToCloseLeaguesModal(e) {
      if (e.target.classList.contains('modal')) {
        this.isLeaguesModalOpen = false

        this.$refs['leagues-modal'].removeEventListener('click', this.checkClickToCloseLeaguesModal)
      }
    },
    changeHost(data) {
      this.basicInfo.host = data
    },
    changeMainBanner([image, name]) {
      this.game.mainBannerFileName = name
      this.game.mainBannerFile = image

      const reader = new FileReader()

      reader.onload = () => {
        this.game.mainBanner = reader.result
      }

      reader.readAsDataURL(image)
    },
    changeTournamentBg([image, name]) {
      this.game.tournamentBgFileName = name
      this.game.tournamentBgFile = image
      const reader = new FileReader()

      reader.onload = () => {
        this.game.tournamentBg = reader.result
      }

      reader.readAsDataURL(image)
    },
    addStream() {
      this.streams.push({ url: '', nationality: '' })

      this.$refs.streamsWrapper.resize()
    },
    addSponsor() {
      this.sponsors.push({ url: '', image: '', initialImage: '', imageFile: '', imageFileName: '' })

      this.$refs.sponsorsWrapper.resize()

    },
    changeSponsorImage([file, name], index) {
      this.sponsors[index].imageFile = file
      this.sponsors[index].imageFileName = name
    },
    removePlayer(id) {
      this.players = this.players.filter(item => item.id !== id)
    },
    async saveTournament() {
      try {
        this.$nuxt.$loading.start()

        const id = this.id ? this.id : await this.$api.general.getId('tournaments')

        await Promise.all([
          this.game.mainBannerInitial ? await this.$api.tournament.removeImage(id, this.game.mainBannerInitial) : Promise.resolve,
          this.game.tournamentBgInitial ? await this.$api.tournament.removeImage(id, this.game.tournamentBgInitial) : Promise.resolve,

          this.game.mainBanner = this.game.mainBannerFile ? await this.$api.tournament.uploadImage(id, this.mainBannerFile, this.mainBannerFileName) : this.game.mainBanner,
          this.game.mainBannerFile = null,
          this.game.tournamentBg = this.game.tournamentBgFile ? await this.$api.tournament.uploadImage(id, this.tournamentBgFile, this.tournamentBgFileName) : this.game.tournamentBg,
          this.game.tournamentBgFile = null,

          ...this.sponsors.map(async (el, index) => {
            if (el.imageFile && el.initialImage) {
              await this.$api.tournament.removeImage(id, el.initialImage, `sponsor-${index}`)
            }

            if (el.imageFile)
            this.sponsors[index].image = await this.$api.tournament.uploadImage(id, el.imageFile, el.imageFileName, `sponsor-${index}`)
            this.sponsors[index].initialImage = el.imageFileName

            this.sponsors[index].imageFile = null
          })
        ])

        const data = {
          id,
          addRequirements: this.addRequirements,
          basicInfo: this.basicInfo,
          extra: this.extra,
          game: this.game,
          isHiddenOnWebsite: this.isHiddenOnWebsite,
          isOnlyLeague: this.isOnlyLeague,
          league: this.league,
          players: this.players,
          prizePool: this.prizePool,
          registration: this.registration,
          sponsors: this.sponsors,
          streams: this.streams,
          voting: this.voting,
          rules: this.rules,
          ongoing: true,
          ownLeagues: this.ownLeagues,
          teams: []
        }

        this.id ? await this.$api.tournament.saveTournament(data) : await this.$api.tournament.setTournament(data, id)

        this.$nuxt.$loading.finish()
        alert('success')
      } catch (err) {
        alert(err)
        this.$nuxt.$loading.finish()
      }

    }
  }
}
</script>

<style lang='scss' scoped>

.mode {
  max-width: 110px;
}

.voting {
  max-width: 276px
}

.checkinTime {
  max-width: 160px;
}

.if-paid {
  display: flex;
  align-items: center;

  &__title {
    margin-right: 12px;
  }
}

.admin-checkbox {
}

.account__item {
  margin-bottom: 16px;
}

.server__item {
  margin-bottom: 8px;
}

.extra__server {
  margin-right: 80px;
}

.admin__title500 {
  font-size: 24px;
  line-height: 32px;
  font-weight: 500;
  color: #F5F5F5;
}

.stream__nationality {
  max-width: 160px;
  margin-left: auto;
}

.add__button {
  padding: 16px 40px;
  white-space: nowrap;
  font-weight: 700;
  color: #F5F5F5;
  background: #1A222D;
  max-width: 187px;
  text-align: center;
  margin: 0 auto 22px;
  cursor: pointer;
}

.control-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;

  &__button {
    padding: 16px 12px;
    background: #1A222D;
    color: #F5F5F5;
    font-weight: 700;
    cursor: pointer;
  }
}

.register-cost {
  max-width: 380px;
}


.modal {
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;

  &__content {
    max-width: 300px;
    background: #0F1215;
    padding: 24px 27px;
    width: 100%;
    height: 400px;
    overflow: auto;
    border-radius: 4px;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    align-items: center;
  }
  &__name {
    font-size: 16px;
    line-height: 16px;
    color: #fff;
  }
  &__remove-button {
    cursor: pointer;
    background: #601414;
    font-weight: 700;
    color: #fff;
    padding: 4px 2px;

    &_join {
      background: forestgreen;
    }
  }
}
</style>
