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
      <AdminUploadImage title='Avatar 128 x 128' :file='avatarFileName' @getImage='getAvatar' />
    </AccordeonWithSlot>

    <div class='control-buttons'>
      <AdminButton text='Delete user' />
      <AdminButton @click='setUser' text='Add user' />
    </div>

  </div>
</template>

<script>
import CreateTitle from '../../components/creational/CreateTitle'
import AccordeonWithSlot from '../../components/admin/create/AccordeonWithSlot'
import BaseInput from '../../components/base/BaseInput'
import AdminUploadImage from '../../components/admin/create/AdminUploadImage'
import AdminButton from '../../components/creational/AdminButton'
export default {
  name: 'PlayerData',
  components: { AdminButton, AdminUploadImage, BaseInput, AccordeonWithSlot, CreateTitle },
  data() {
    return {
      name: '',
      id: '',
      sex: '',
      age: '',
      country: '',
      nationality: '',
      site: '',
      url: '',
      avatarUrl: '',
      avatarFileName: '',

      // local
      avatarFile: '',
    }
  },
  methods: {
    getAvatar([image, name]) {
      this.avatarFile = image
      this.avatarFileName = name
    },
    async setUser() {
      await this.$api.player.setUser({
        name: this.name,
        id: this.id,
        sex: this.sex,
        age: this.age,
        country: this.country,
        nationality: this.nationality,
        site: this.site,
        url: this.url,
        avatarUrl: this.avatarUrl,
        avatarFileName: this.avatarFileName,
      })
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
  gap: 30px;
}

</style>
