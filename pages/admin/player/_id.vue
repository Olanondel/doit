<template>
  <div class='container'>

    <CreateTitle title='New/Edit Player' />

    <AccordeonWithSlot title='Basic info'>
      <BaseInput
        v-model='name'
        title='Name'
        on-admin
      />

      <BaseInput
        v-model='nickname'
        title='Nickname'
        on-admin
      />

      <BaseInput
        v-model='id'
        title='Id'
        disabled
        on-admin
      />

      <BaseInput
        v-model='sex'
        title='Sex'
        on-admin
      />

      <BaseInput
        v-model='age'
        title='Age'
        on-admin
      />

      <BaseInput
        v-model='country'
        title='Country'
        on-admin
      />

      <BaseInput
        v-model='nationality'
        title='Nationality'
        on-admin
      />

      <BaseInput
        v-model='site'
        title='Web-site'
        on-admin
      />

      <BaseInput
        v-model='url'
        title='URL'
        url='Doit.gg/user'
        on-admin
      />
    </AccordeonWithSlot>

    <AccordeonWithSlot title='Advance'>
      <AdminUploadImage title='Avatar 128 x 128' :file='avatarFileName' :disabled='isLoading' @getImage='getAvatar' />
    </AccordeonWithSlot>

    <div class='control-buttons'>
      <AdminButton text='Save user' :disabled='isLoading' @click='setUser' />
    </div>

  </div>
</template>

<script>
import CreateTitle from '../../../components/creational/CreateTitle'
import AccordeonWithSlot from '../../../components/admin/create/AccordeonWithSlot'
import BaseInput from '../../../components/base/BaseInput'
import AdminUploadImage from '../../../components/admin/create/AdminUploadImage'
import AdminButton from '../../../components/creational/AdminButton'
export default {
  name: 'PlayerData',
  components: { AdminButton, AdminUploadImage, BaseInput, AccordeonWithSlot, CreateTitle },
  validate({ params }) {
    return !!params.id
  },
  async asyncData({ $api, params }) {
    return await $api.player.getUser(params.id)
  },
  data() {
    return {
      name: '',
      nickname: '',
      email: '',
      id: '',
      sex: '',
      age: '',
      country: '',
      created: '',
      dob: '',
      nationality: '',
      site: '',
      url: '',
      avatar: '',
      avatarFileName: '',

      // local
      avatarFile: '',
      isLoading: false,
      avatarWasChanged: false,
      avatarInitialFileName: null,
    }
  },
  methods: {
    getAvatar([file, name]) {
      this.avatarFile = file
      this.avatarFileName = name

      this.avatarWasChanged = true
    },
    async setUser() {
      this.isLoading = true

      try {
        const id = this.id || await this.$api.general.getId('players')

        if (this.avatar && this.avatarInitialFileName !== this.avatarFileName) {
          await this.$api.general.removeImage('players', id, this.avatarInitialFileName)
        }

        if (this.avatarWasChanged) {
          this.avatar = await this.$api.general.uploadImage(this.avatarFile, 'players', id, this.avatarFileName)

          this.avatarInitialFileName = this.avatarFileName
        }

        await this.$api.player.setUser(id, {
          name: this.name,
          nickname: this.nickname,
          id,
          email: this.email,
          sex: this.sex,
          age: this.age,
          country: this.country,
          created: this.created,
          dob: this.dob,
          nationality: this.nationality,
          site: this.site,
          url: this.url,
          avatar: this.avatar,
          avatarFileName: this.avatarFileName,
          avatarInitialFileName: this.avatarInitialFileName,
        })

        this.avatarWasChanged = false
        this.isLoading = false
        alert('success')
      } catch (err) {
        alert(err)
        this.isLoading = false
      }
    },
    async removeUser() {
      this.isLoading = true

      if (this.id !== '1VXNxs6Rnjar2OfVy9TcRY1uc4f1') {
        try {
          const id = this.id || await this.$api.general.getId('players')

          if (this.avatar && !this.avatarWasChanged) {
            await this.$api.general.removeImage('players', id, this.avatarFileName)
          }

          await this.$api.player.removeUser(id)

          alert('success')
          this.isLoading = false
        } catch (err) {
          alert(err)
          this.isLoading = false
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>

.container {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}

.control-buttons {
  display: flex;
  justify-content: center;
  padding: 0 15px;
  flex-wrap: wrap;
  gap: 30px;
}

</style>
