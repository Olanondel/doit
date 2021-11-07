<template>
  <div class='team-container'>
    <CreateTitle title='New/Edit Team' />

    <AccordeonWithSlot title='Basic info'>
      <BaseInput v-model='name' on-admin title='Team name' />
      <BaseInput v-model='id' disabled on-admin title='ID' />
      <BaseSelect v-model='game' on-admin title='Main Game' />
      <BaseInput v-model='leader' on-admin title='Team Leader' />
      <BaseInput v-model='country' on-admin title='Country' />
      <BaseInput v-model='site' on-admin title='Web-site' />
      <BaseInput v-model='url' on-admin title='URL' url='Doit.gg/team' />
    </AccordeonWithSlot>

    <AccordeonWithSlot title='Players'>
      <PlayersButtons :disabled='isLoading' />
    </AccordeonWithSlot>

    <AccordeonWithSlot title='Advance'>
      <AdminUploadImage :disabled='isLoading' title='logo 128 x 128' :file='logoName' @getImage='getImage' />
    </AccordeonWithSlot>

    <div class='team__controls'>
      <AdminButton :disabled='isLoading || id' text='Delete Team' @click='removeTeam' />
      <AdminButton :disabled='isLoading' text='Save Team' @click='setTeam' />
    </div>
  </div>
</template>

<script>
import CreateTitle from '../../../components/creational/CreateTitle'
import AccordeonWithSlot from '../../../components/admin/create/AccordeonWithSlot'
import BaseInput from '../../../components/base/BaseInput'
import BaseSelect from '../../../components/base/BaseSelect'
import AdminButton from '../../../components/creational/AdminButton'
import AdminUploadImage from '../../../components/admin/create/AdminUploadImage'
import PlayersButtons from '../../../components/admin/create/PlayersButtons'
export default {
  name: 'TeamData',
  components: { PlayersButtons, AdminUploadImage, AdminButton, BaseSelect, BaseInput, AccordeonWithSlot, CreateTitle },
  validate({ params }) {
    return !!params.id
  },
  async asyncData({ $api, params }) {
    return await $api.team.getTeam(params.id)
  },
  data() {
    return {
      name: '',
      id: '',
      game: '',
      leader: '',
      leaderId: '',
      country: '',
      site: '',
      url: '',
      players: [],
      logoUrl: '',
      logoName: '',
      logoInitialName: '',

      isLoading: false,
      logoFile: null
    }
  },
  mounted() {},
  methods: {
    async setTeam() {

      this.isLoading = true

      try {
        const id = (this.id || await this.$api.general.getId('teams'))
        let ref

        if (this.logoUrl && this.logoInitialName) {
          await this.$api.general.removeImage('teams', id, this.logoInitialName)
        }

        if (this.logoFile) {
          ref = await this.$api.general.uploadImage(this.logo, 'teams', id, this.logoName )
        }

        await this.$api.team.setTeam({
          name: this.name,
          id,
          game: this.game,
          leader: this.leader,
          leaderId: '1VXNxs6Rnjar2OfVy9TcRY1uc4f1',
          country: this.country,
          site: this.site,
          url: this.url,
          players: this.players,
          logoUrl: ref || '',
          logoName: this.logoName,
          logoInitialName: this.logoName
        })

        this.logoFile = null

        alert('Success')
        this.isLoading = false
      } catch (err) {
        alert(err)
        console.log(err)
        this.isLoading = false
      }

    },

    async removeTeam() {

      try {
        this.isLoading = true

        if (this.logoUrl) {
          await this.$api.general.removeImage('teams', this.id, this.logoInitialName)
        }

        if (this.id) {
          await this.$api.team.removeTeam(this.id)
        }

        this.isLoading = false
      } catch (err) {
        alert(err)
        this.isLoading = false
      }

    },


    getImage([ref, name]) {
      this.logoFile = ref
      this.logoName = name
    },
  },
}
</script>

<style lang='scss' scoped>
.team-container {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}

.team__controls {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 60px;
  padding: 0 15px;
  flex-wrap: wrap;
}
</style>
