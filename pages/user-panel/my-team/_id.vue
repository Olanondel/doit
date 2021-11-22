<template>
  <div class='user-panel'>
    <h2 v-once class='user-panel__title'>{{ name || 'Create Team' }}</h2>

    <div class='create-team'>

      <AccordeonWithSlot title='Basic info'>
        <BaseInput v-model='name' title='Team name' on-admin />

        <BaseSelect
          v-model='game'
          :options='games'
          label='name'
          title='Main Game'
          on-admin
        />

        <BaseInput v-model='leader' disabled title='Team Leader' on-admin />
        <BaseInput v-model='password' title='Join password' on-admin />
        <BaseInput v-model='country' title='Country' on-admin />
        <BaseInput v-model='site' title='Web-site' on-admin />
        <BaseInput v-model='url' title='URL' url='Doit.gg/team' on-admin />
      </AccordeonWithSlot>

      <AccordeonWithSlot title='Advance'>
        <AdminUploadImage title='logo 128 x 128' :file='logoFileName' @getImage='getImage' />
      </AccordeonWithSlot>

      <div class='control__buttons'>
        <AdminButton :disabled='isLoading' text='Delete Team' @click='removeTeam' />
        <AdminButton :disabled='isLoading' v-if='id' text='Save Team' @click='saveTeam' />
        <AdminButton :disabled='isLoading' v-else text='Create Team' @click='createTeam' />
      </div>

    </div>

  </div>
</template>

<script>
import BaseInput from '../../../components/base/BaseInput'
import AccordeonWithSlot from '../../../components/admin/create/AccordeonWithSlot'
import BaseSelect from '../../../components/base/BaseSelect'
import AdminUploadImage from '../../../components/admin/create/AdminUploadImage'
import AdminButton from '../../../components/creational/AdminButton'

export default {
  name: 'CreateTeam',
  components: { AdminButton, AdminUploadImage, BaseSelect, AccordeonWithSlot, BaseInput },
  props: {

  },
  async asyncData({ $api, $auth, params, error }) {
    const gamesData = await $api.game.getGames()
    const  games = gamesData.map(el => ({ name: el.name, value: el.id }))
    const profile = await $api.auth.getProfile($auth.user.localId)

    if (params.id !== 'create-team') {
      const team = await $api.team.getTeam(params.id)

      if (!team) { error({ errorCode: 404 }) }

      return { ...team, games, leader: profile.nickname }
    }

    return { games, leader: profile.nickname }
  },
  data() {
    return {
      name: '',
      id: '',
      leader: null,
      leaderId: this.$auth.user.localId,
      password: '',
      game: '',
      gameId: '',
      country: '',
      site: '',
      url: '',
      logo: '',
      logoFileName: '',
      logoInitialFileName: '',
      created: this.getDate(),

      logoFile: null,
      games: null,
      isLoading: false
    }
  },
  methods: {
    getImage([ file, name ]) {
      this.logoFile = file
      this.logoFileName = name
    },
    async createTeam() {
      // start

      try {
        this.isLoading = true

        const id = await this.$api.general.getId('teams')

        await this.$api.general.uploadImage(this.logoFile, 'teams', id, this.logoFileName)

        await this.$api.team.setTeam({
          name: this.name,
          leader: this.leader,
          leaderId: this.leaderId,
          password: this.password,
          id,
          game: this.game,
          gameId: this.gameId,
          country: this.country,
          site: this.site,
          url: this.url,
          logo: this.logo,
          logoFileName: this.logoFileName,
          logoInitialFileName: this.logoInitialFileName,
          created: this.created
        })

        await this.$api.auth.addOwnTeam(this.$auth.user.localId, id)

        alert('success')
        this.isLoading = false

        await this.$router.push('/user-panel/my-team')
      } catch (err) {
        alert(err)
        this.isLoading = false
      }

      // end
    },
    getDate() {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();

      return dd + '/' + mm + '/' + yyyy;
    },
    async saveTeam() {
      try {
        this.isLoading = true

        if (this.logoInitialFileName) {
          await this.$api.general.removeImage('teams', this.id, this.logoInitialFileName)
        }

        await this.$api.general.uploadImage(this.logoFile, 'teams', this.id, this.logoFileName)

        await this.$api.team.saveTeam({
          name: this.name,
          leader: this.leader,
          leaderId: this.leaderId,
          password: this.password,
          game: this.game,
          id: this.id,
          gameId: this.gameId,
          country: this.country,
          site: this.site,
          url: this.url,
          logo: this.logo,
          logoFileName: this.logoFileName,
          logoInitialFileName: this.logoFileName,
        })

        alert('success')
        this.isLoading = false

        await this.$router.push('/user-panel/my-team')
      } catch (err) {
        alert(err)
        this.isLoading = false
      }
    },
    async removeTeam() {
      try {
        this.isLoading = true

        await this.$api.auth.removeOwnTeam(this.$auth.user.localId, this.id)

        if (this.logoInitialFileName) {
          await this.$api.general.removeImage('teams', this.id, this.logoInitialFileName)
        }

        await this.$api.team.removeTeam(this.id)

        alert('success')
        this.isLoading = false

        await this.$router.push('/user-panel/my-team')
      } catch (err) {
        alert(err)
        this.isLoading = false
      }
    },
  }
}
</script>

<style lang='scss' scoped>

.create-team {
  max-width: 600px;
  margin: 0 auto;
}

.control__buttons {
  // global styles
}

</style>
