<template>
  <div class='container'>
    <AccordeonWithSlot title='basic'>

      <BaseInput v-model='title' title='Title' on-admin />

      <BaseSelect
        v-model='game'
        :options='games'
        title='Game'
        on-admin
        label='game'
      />

      <BaseTextarea v-model='description' title='Description' on-admin />

      <AdminUploadImage :disabled='isLoading' title='Main Image' :file='mainImageFileName' @getImage='getImage' />

    </AccordeonWithSlot>

    <div class='control__buttons'>
      <AdminButton :disabled='!id || isLoading' text='Remove News' @click='removeNews' />
      <AdminButton :disabled='isLoading' text='Add News' @click='setNews' />
    </div>
  </div>
</template>

<script>
import AccordeonWithSlot from '../../../components/admin/create/AccordeonWithSlot'
import BaseInput from '../../../components/base/BaseInput'
import BaseTextarea from '../../../components/base/BaseTextarea'
import AdminUploadImage from '../../../components/admin/create/AdminUploadImage'
import BaseSelect from '../../../components/base/BaseSelect'
import AdminButton from '../../../components/creational/AdminButton'

export default {
  components: { AdminButton, BaseSelect, AdminUploadImage, BaseTextarea, BaseInput, AccordeonWithSlot },
  async asyncData({ $api, error, params }) {
    const data = await $api.news.getNews(params.id)

    if (data) {
      return data
    }

    if (params.id !== 'addNews') {
      error({ statusCode: 404 })
    }

  },
  data() {
    return {
      title: '',
      id: '',
      description: '',
      game: {},
      mainImage: '',
      mainImageFileName: '',
      mainImageWasChanged: false,
      initialMainImage: '',
      author: '',
      created: this.getDate(),

      isLoading: false,
      games: [
        { game: 'StarCraft ||', gameId: '2qY3sFllNEDSWPX4EfJD' },
        { game: 'Dota ||', gameId: 'whngAthyzDDKdCTYQHpP' },
        { game: 'CS:GO', gameId: '1kTwjy6hhBBciqOhPJMP' },
        { game: 'LOL', gameId: 'eZ79fJosNM7yjZsDPbvt' },
        { game: 'Fortnite', gameId: 'jncC7JU6geXRFSXHeQom' }
      ]
    }
  },
  methods: {
    getDate() {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();

      return dd + '/' + mm + '/' + yyyy;
    },
    getImage([img, name]) {
      this.mainImage = img
      this.mainImageFileName = name
      this.mainImageWasChanged = true
    },
    async setNews() {

      try {
        this.isLoading = true

        const id = this.id || await this.$api.general.getId('news')

        if (this.initialMainImage && this.mainImageWasChanged) {
          await this.$api.general.removeImage('news', id, this.initialMainImage)
        }

        const mainImage = await this.$api.general.uploadImage(this.mainImage, 'news', id, this.mainImageFileName)

        await this.$api.news.setNews({
          id,
          mainImage,
          title: this.title,
          description: this.description,
          game: this.game,
          mainImageFileName: this.mainImageFileName,
          mainImageWasChanged: false,
          initialMainImage: this.mainImageFileName,
          created: this.created
        })

        this.isLoading = false
        alert('success')

        await this.$router.push(id)
      } catch (err) {
        alert(err)
        this.isLoading = false
      }
    },
    async removeNews() {
      try {
        this.isLoading = true

        if (this.initialMainImage) {
          await this.$api.general.removeImage('news', this.id, this.mainImageFileName)
        }

        await this.$api.news.removeNews(this.id)

        alert('success')

        await this.$router.push('addNews')
        this.isLoading = false
      } catch (err) {
        alert(err)
        this.isLoading = false
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

.control__buttons {
  text-align: center;
}
</style>
