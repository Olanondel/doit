  <template>
    <div class='admin-create-wrapper'>
      <div class='admin-create'>

        <AdminCreateTitle title='New/Edit Tournament' />

        <AccordeonWithSlot title='Basic info'>
          <BaseSelect :current='basicInfo.host' title='Host' mb='22' @changeValue='changeHost' />

          <BaseInput
            v-model='basicInfo.title'
            on-admin
            mb='22'
            title='Tournament name*' />

          <BaseInput v-model='basicInfo.url' on-admin mb='22' url='Doit.gg/' text='URL' />

          <BaseTextarea v-model='basicInfo.quickRules' class='mb22' title='Quick Rules' />
        </AccordeonWithSlot>

        <AccordeonWithSlot title='Game info'>
          <BaseSelect :current='game.title' class='mb22' title='Game' @changeValue='changeGameTitle' />

          <AdminRadio v-model='game.type' name='gameTypes' :options='radioGameType' title='Type' class='mb22' />

          <BaseSelect :current='game.format' class='mb22' title='Format*' @changeValue='changeGameFormat' />

          <div class='mb22'>
            <BaseCheckbox v-model='game.thirdPlaceMatch' text='Include a match for 3rd place' />
          </div>

          <div class='flex-between mb22'>
            <BaseSelect title='Mode' :current='game.mode' class='mode' @changeValue='changeGameMode' />

            <BaseSelect title='Map voting system' :current='game.mapVotingSystem' class='voting'
                        @changeValue='changeVotingSystem' />
          </div>

          <AdminUploadImage class='mb22' :file='mainBannerTitle' title='Main Banner 370x200*'
                            @changeImage='changeMainBanner' />

          <AdminUploadImage class='mb22' :file='tournamentBgTitle' title='Tournament background min 2000 x 3000'
                            @changeImage='changeTournamentBg' />

        </AccordeonWithSlot>

        <AccordeonWithSlot title='Registration'>

          <BaseCheckbox v-model='registration.autoApprove' class='mb22' text='Don’t Approve players automatically' />

          <RegistrationType v-model='registration.type' class='mb22' />

          <DateWithTime :date.sync='registration.startDate' :time.sync='registration.startTime' class='mb22' title='Start time*' />

          <DateWithTime :date.sync='registration.estimatedEndDate' :time.sync='registration.estimatedEndTime' class='mb22' title='Estimated end*' />

          <BaseCheckbox v-model='registration.isCheckinTime' class='mb22' text='Checkin Time' />

          <BaseSelect class='mb22 checkinTime' />

          <div class='admin-create__timezone mb22'>{{ timeZone }}</div>

        </AccordeonWithSlot>

        <AccordeonWithSlot title='If paid'>
          <div class='if-paid mb22'>
            <div class='if-paid__title'>Register cost</div>
            <BaseInput v-model='registration.cost' />
          </div>
        </AccordeonWithSlot>

        <AccordeonWithSlot title='Player list'>
          <PlayersButtons class='mb22' />

          <BaseCheckbox v-model='isHiddenOnWebsite' text='Don’t show tournament on website' class='mb22' />
        </AccordeonWithSlot>

        <AccordeonWithSlot title='Leagues'>
          <LinkWithText text='Connect tournament with league' button-text='Choose League' class='mb22' />

          <BaseCheckbox v-model='isOnlyLeague' on-admin text='Only League System' class='mb22' />
        </AccordeonWithSlot>

        <AccordeonWithSlot title='Prize pool'>
          <div class='flex-between mb22 '>
            <InputWithText v-model='prizePool.pool' text='Prize pool: ' />

            <DoubleInputWithText
              text='MAX players/teams:'
              :max-players.sync='prizePool.maxPlayers'
              :max-teams.sync='prizePool.maxTeams'
            />
          </div>

          <BaseCheckbox v-model='prizePool.isThirdPlace' text='3rd place turn on?' class='mb22' />

          <div class='flex-between'>
            <div class='column'>
              <PrizePlaces :places='prizePlaces' class='mb22' v-bind.sync='prizePool.places' />

              <AdminRadio v-model='prizePool.type' :options='prizeTypes' name='prize-type' class='mb22' title='Type' />
            </div>
            <div class='column'>
              <PrizeRounds v-bind.sync='prizePool.rounds' class='mb22' />

              <AdminRadio v-model='prizePool.isDonations' name='prizePoolDonation' :options='prizePoolDonations' title='Donations' />
            </div>
          </div>
        </AccordeonWithSlot>

        <AccordeonWithSlot title='Voting' >

          <BaseCheckbox v-model='voting.everyMatch' on-admin class='mb22 admin-checkbox' text='Allow registered users in tournament to provide scores for every match' />
          <BaseCheckbox v-model='voting.ownMatch' on-admin class='mb22 admin-checkbox' text='Allow registered users only in their match to provide scores' />

        </AccordeonWithSlot>

        <AccordeonWithSlot title='Additional requirements'>

          <div class='flex-between mb22'>
            <div>
              <BaseCheckbox on-admin v-model='addRequirements.accounts.psn' text='PSN Account' class='account__item' />
              <BaseCheckbox on-admin v-model='addRequirements.accounts.xbox' text='Xbox Account' class='account__item' />
              <BaseCheckbox on-admin v-model='addRequirements.accounts.steam' text='Steam Account' class='account__item' />
              <BaseCheckbox on-admin v-model='addRequirements.accounts.lol' text='League of Legends Account' class='account__item' />
              <BaseCheckbox on-admin v-model='addRequirements.accounts.blizzard' text='Blizzard Account' class='account__item' />
            </div>

            <div>
              <LinkWithText text='Country: ' button-text='Choose country' class='mb22' />

              <InputWithText v-model='addRequirements.minAge' text='Min Age: ' />
            </div>
          </div>

        </AccordeonWithSlot>

        <AccordeonWithSlot title='Extra'>

          <BaseInput text='Lobby' class='mb22' />
          <BaseInput text='Mode' class='mb22' />
          <BaseInput text='VETO' class='mb22' />

            <div class='flex mb22'>
            <div class='extra__server'>
              <h2 class='admin__title500 mb22'>Server region</h2>

              <BaseCheckbox
                v-for='item in serverRegion'
                :key='item.value'
                v-model='extra.serverRegion[item.value]'
                :text='(item.text).toUpperCase()'
                class='server__item'
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
              />
            </div>
          </div>

          <BaseInput v-model='extra.social.discord' text='Discord URL' class='mb22' />
          <BaseInput v-model='extra.social.facebook' text='Facebook URL' class='mb22' />
          <BaseInput v-model='extra.social.twitter' text='Twitter URL' class='mb22' />
          <BaseInput v-model='extra.social.vk' text='VK URL' class='mb22' />
          <BaseInput v-model='extra.social.twitch' text='Twitch URL' class='mb22' />
          <BaseInput v-model='extra.social.youtube' text='Youtube URL' class='mb22' />

        </AccordeonWithSlot>

        <AccordeonWithSlot ref='streamsWrapper' title='Streams'>

        <div
          v-for='(item, index) in streams'
          :key='index'
          class='mb22'
        >
          <BaseInput v-model='streams[index].url'  text='Twitch Stream' />

          <BaseSelect class='stream__nationality' />
        </div>

          <div class='add__button mb22' @click='addStream'>+ Add Stream</div>

        </AccordeonWithSlot>

        <AccordeonWithSlot ref='sponsorsWrapper' title='Sponsors'>

          <AdminUploadImage
            v-for='(item, index) in sponsors'
            :key='index'
            :file='item.name'
            :title=" 'Sponsor logo #' + (index + 1) "
            class='mb22'
            @changeImage='changeSponsorImage($event, index)'
          />

          <div class='add__button mb22' @click='addSponsor'>+ Add Sponsor</div>

        </AccordeonWithSlot>

        <AccordeonWithSlot title='Rules'>

          <BaseTextarea v-model='rules' title='Rules' class='mb22' />

        </AccordeonWithSlot>

        <div class='control-buttons'>
          <div class='control-buttons__button'>Delete Tournament</div>
          <div class='control-buttons__button'>Finish Tournament</div>
          <div class='control-buttons__button'>Save changes</div>
        </div>

      </div>
    </div>
  </template>

  <script>
  import AdminCreateTitle from '../../components/creational/CreateTitle'
  import AccordeonWithSlot from '../../components/admin/create/AccordeonWithSlot'
  import BaseInput from '../../components/base/BaseInput'
  import BaseSelect from '../../components/base/BaseSelect'
  import BaseTextarea from '../../components/base/BaseTextarea'
  import BaseCheckbox from '../../components/base/BaseCheckbox'
  import AdminRadio from '../../components/admin/create/AdminRadio'
  import AdminUploadImage from '../../components/admin/create/AdminUploadImage'
  import RegistrationType from '../../components/admin/create/RegistrationType'
  import DateWithTime from '../../components/admin/create/DateWithTime'
  import PlayersButtons from '../../components/admin/create/PlayersButtons'
  import InputWithText from '../../components/admin/create/InputWithText'
  import PrizePlaces from '../../components/admin/create/PrizePlaces'
  import PrizeRounds from '../../components/admin/create/PrizeRounds'
  import DoubleInputWithText from '../../components/admin/create/DoubleInputWithText'
  import LinkWithText from '../../components/admin/create/LinkWithText'

  export default {
    name: 'Tournaments',
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
    data() {
      return {
        isHiddenOnWebsite: false,
        league: '',
        isOnlyLeague: false,
        rules: '',

        basicInfo: {
          host: 'FOO',
          title: '123',
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
          tournamentBg: ''
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

        players: [],

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
          { url: '', nationality: '' },
        ],

        sponsors: [
          { url: '', name: '' }
        ],





        radioGameType: [
          { text: 'Single stage tournament', value: 'single' },
          { text: 'Two stage tournament', value: 'two' }
        ],
        prizeTypes: [
          { value: 'Money', text: 'Money', },
          { value: 'Thing', text: 'Thing', },
          { value: 'Money+Thing', text: 'Money+Thing', },
          { value: 'Nothing', text: 'Nothing', },
          { value: 'Qualifiers', text: 'Qualifiers', },
        ],
        prizeRounds: ['Ro8', 'Ro16', 'Ro32', 'Ro64', 'Ro128', 'Ro256', 'Ro512'],
        prizePoolDonations: [
          { text: 'Active', value: 'Active' },
          { text: 'No Active', value: 'No Active' },
        ],
        mainBannerTitle: '',
        tournamentBgTitle: '',
        prizePlaces: ['1st   place: ', '2nd   place: ', '3rd   place: ', '4th   place: '],
        serverRegion: [
          { text: 'europe nordic & east', value: 'EU&NE' },
          { text: 'Europe West', value: 'EU&W' },
          { text: 'Australia & Oceania', value: 'AU&OC' },
          { text: 'china', value: 'CHINA' },
          { text: 'Asia', value: 'ASIA' },
          { text: 'America', value: 'AMERICA' },
        ],
        platforms: [
          { text: 'pc', value: 'pc' },
          { text: 'xbox one', value: 'xboxOne' },
          { text: 'ps4', value: 'ps4' },
          { text: 'nintendo switch', value: 'nintendoSwitch' },
          { text: 'ps5', value: 'ps5' },
          { text: 'xbox series x', value: 'xboxSeriesX' },
        ]

      }
    },
    computed: {
      timeZone() {
        return '(GMT -05:00) Eastern time — set the time zone from your settings'
      },
    },
    methods: {
      changeHost(data) {
        this.basicInfo.host = data
      },
      changeMainBanner(image) {
        this.mainBannerTitle = image.name
        const reader = new FileReader()

        reader.onload = () => {
          this.game.mainBanner = reader.result
        }

        reader.readAsDataURL(image)
      },
      changeTournamentBg(image) {
        this.tournamentBgTitle = image.name
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
        this.sponsors.push({ url: '', name: '' })

        this.$refs.sponsorsWrapper.resize()

      },
      changeSponsorImage(file, idx) {

        this.sponsors[idx].name = file.name

        const reader = new FileReader()

        reader.onload = () => {
          this.sponsors[idx].url = reader.result
        }

        reader.readAsDataURL(file)
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

  .admin-checkbox {}

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
    justify-content: space-between;

    &__button {
      padding: 16px 12px;
      background: #1A222D;
      color: #F5F5F5;
      font-weight: 700;
    }
  }

  </style>
