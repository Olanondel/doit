<template>
  <div class='new-game'>

    <CreateTitle title='New/Edit Game' />

    <AccordeonWithSlot ref='basic-info' title='Basic info'>

      <BaseSelect
        v-model='name'
        :options='games'
        on-admin
        title='Game name*'
        mb='22'
      />

      <BaseInput
        v-if="name === 'Add Custom'"
        v-model='newName'
        title='New Game Name*'
        on-admin
        mb='22'
      />

      <BaseInput
        v-model='url'
        on-admin
        url='Doit.gg/games'
        title='URL*'
        mb='22'
      />

      <BaseTextarea
        v-model='description'
        title='Description'
        placeholder='You can write here somebody about your tournament....'
        on-admin
        mb='44'
      />

    </AccordeonWithSlot>

    <AccordeonWithSlot title='Capsules'>

      <AdminUploadImage
        v-for='(item, index) in capsules'
        :key='index'
        :title='item.title'
        :file='item.name'
        mb='16'
        @getImage='getImage($event, index)'
      />

    </AccordeonWithSlot>

    <AccordeonWithSlot title='Tournament system'>

      <AdminRadio
        v-model='cTournamentSystemActive'
        title='Active'
        name='tournamentSystemActive'
        mb='29'
        :options="trueFalseOptions"
      />

      <BaseSelect
        v-model='serverSystem'
        title='Servers system'
        :options='serverSystems'
        :reduce='game => game.value'
        label='game'
        on-admin
      />

    </AccordeonWithSlot>

    <AccordeonWithSlot ref='map-voting' title='Map Voting'>

      <AdminRadio
        v-model='cMapVotingActive'
        title='Active'
        name='mapVotingActive'
        mb='25'
        :options="trueFalseOptions"
      />

      <UploadImageWithInput
        v-for='(item, index) in maps'
        :key='index'
        v-model='maps[index].map'
        :title=" 'Map ' + (index + 1) "
        :file-name='item.fileName'
        :name='item.map'
        mb='12'
        @getImage='getMapImage($event, index)'
      />

      <div class='flex-center add-map'>
        <AdminButton text='+ Add Map' @click='addMap' />
      </div>

    </AccordeonWithSlot>

    <div class='control-buttons'>
<!--      <AdminButton-->
<!--        text='Delete Game'-->
<!--        :disabled='isLoading || isMain'-->
<!--        @click='removeGame'-->
<!--      />-->
      <AdminButton
        :disabled='isLoading'
        text='Save Game'
        @click='setGame'
      />
    </div>

  </div>
</template>

<script>
import AccordeonWithSlot from '../../../components/admin/create/AccordeonWithSlot'
import BaseSelect from '../../../components/base/BaseSelect'
import BaseInput from '../../../components/base/BaseInput'
import BaseTextarea from '../../../components/base/BaseTextarea'
import AdminUploadImage from '../../../components/admin/create/AdminUploadImage'
import AdminRadio from '../../../components/admin/create/AdminRadio'
import CreateTitle from '../../../components/creational/CreateTitle'
import UploadImageWithInput from '../../../components/creational/UploadImageWithInput'
import AdminButton from '../../../components/creational/AdminButton'

export default {
  name: 'GameData',
  components: { AdminButton, UploadImageWithInput, CreateTitle, AdminRadio, AdminUploadImage, BaseTextarea, BaseInput, BaseSelect, AccordeonWithSlot },
  validate({ params }) {
    return !!params.id
  },
  async asyncData({ $api, params, error }) {
    const data = await $api.game.getGame(params.id)

    if ( !(data || params.id === 'newGame') ) { error({ statusCode: 404 }) }

    return data
  },
  data() {
    return {
      name: '',
      id: '',
      isMain: true,
      newName: '',
      url: '',
      description: '',
      capsules: [
        { title: 'Main Banner 387x500*', image: null, name: '', initialName: '', wasChanged: false },
        { title: 'Mobile Banner 329x129*', image: null, name: '', initialName: '', wasChanged: false },
        { title: 'Game icon 32x32*', image: null, name: '', initialName: '', wasChanged: false },
        { title: 'Game logo 253x45*', image: null, name: '', initialName: '', wasChanged: false },
        { title: 'Game background 2206 x 2278', image: null, name: '', initialName: '', wasChanged: false },
        { title: 'Game logo 64x64*', image: null, name: '', initialName: '', wasChanged: false },
      ],
      isTournamentSystemActive: false,
      serverSystem: '',
      isMapVotingSystem: false,
      maps: [
        { map: '', fileName: '', image: '', initialImage: '', wasChanged: false },
      ],
      games: ['StarCraft 2', 'Dota 2', 'CS:GO', 'LOL', 'Fortnite'],

      // local
      trueFalseOptions: [
        { value: 'Yes', text: 'Yes' },
        { value: 'No', text: 'No' },
      ],
      serverSystems: [
        { game: 'StarCraft ||', value: 'starcraft2' },
        { game: 'Dota ||', value: 'dota2' },
        { game: 'CS:GO', value: 'csgo' },
        { game: 'LOL', value: 'leagueOfLegends' },
        { game: 'Fortnite', value: 'fortnite' },
      ],
      isLoading: false
    }
  },
  computed: {
    cTournamentSystemActive: {
      get() {
        return this.isTournamentSystemActive ? 'Yes' : 'No'
      },
      set(v) {
        if (v === 'Yes') {
          this.isTournamentSystemActive = true
        } else if (v === 'No') {
          this.isTournamentSystemActive = false
        }
      }
    },
    cMapVotingActive: {
      get() {
        return this.isMapVotingSystem ? 'Yes' : 'No'
      },
      set(v) {
        if (v === 'Yes') {
          this.isMapVotingSystem = true
        } else if (v === 'No') {
          this.isMapVotingSystem = false
        }
      }
    },
  },
  methods: {
    async setGame() {
      try {
        this.isLoading = true

        const id = this.id || await this.$api.general.getId('games')

        const capsules = await this.$api.game.uploadCapsules(this.capsules, id)

        const maps = await this.$api.game.uploadMaps(this.maps, id)

        await this.$api.game.setGame({
          id,
          name: this.name,
          isMain: this.isMain,
          url: this.url,
          description: this.description,
          capsules,
          isTournamentSystemActive: this.isTournamentSystemActive,
          serverSystem: this.serverSystem,
          isMapVotingSystem: this.isMapVotingSystem,
          maps
        })

        alert('success')
        this.isLoading = false

        await this.$router.push(id)
      } catch (e) {
        alert(e)
        this.isLoading = false
      }
    },
    async removeGame() {
      if (!this.isMain) {
        try {
          this.isLoading = true

          await this.$api.game.removeCapsules(this.capsules, this.id)

          await this.$api.game.removeGame(this.id)
          this.isLoading = false
        } catch (err) {
          alert(err)
          this.isLoading = false
        }
      }
    },
    getImage([img, name], idx) {
      this.capsules[idx].image = img
      this.capsules[idx].name = name
      this.capsules[idx].wasChanged = true
    },
    getMapImage([file, name], index) {
      this.maps[index].fileName = name
      this.maps[index].image = file
      this.maps[index].wasChanged = true
    },
    addMap() {
      this.maps.push({ map: '', fileName: '', image: '', initialImage: '', wasChanged: false })

      this.$refs['map-voting'].resize()
    },
  },
}
</script>

<style lang='scss' scoped>

.new-game {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}

.add-map {
  margin-top: 40px;
}

.control-buttons {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 60px;
}

</style>
