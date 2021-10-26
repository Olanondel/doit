<template>
  <div class='upload-image' :style="{ marginBottom: mb + 'px' }">
    <div class='upload-image__title'> {{ title }} </div>



      <label class='upload-image__content'>
        <input ref='imageFile' class='upload-image__file' placeholder='image url' type='file' @change='getImage'>
        <div class='upload-image__url-input'> {{ file || 'FILE' }} </div>
        <div class='upload-image__button'>UPLOAD</div>
      </label>
  </div>
</template>

<script>

export default {
  name: 'AdminUploadImage',
  components: {   },
  props: {
    title: { type: String, default: '' },
    file: { type: String, default: 'FILE' },
    mb: { type: String, default: '0' }
  },
  methods: {
    getImage() {
      const image = this.$refs.imageFile.files[0]
      const reader = new FileReader()

      reader.onload = () => {
        this.$emit('getImage', [reader.result, image.name])
      }

      reader.readAsDataURL(image)
    }
  }
}
</script>

<style lang='scss' scoped>
.upload-image {
  &__title {
    margin-bottom: 12px;
  }

  &__content-wrapper {
    display: flex;
  }

  &__map-name {

  }

  &__content {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    flex: 1 1 auto;
  }

  &__file {
    display: none;
  }

  &__url-input {
    width: 100%;
    margin-right: 16px;
    outline: none;
    background: #0F1215;
    border: 2px solid #20252B;
    border-radius: 4px;
    padding: 0 16px;
    color: #3C434D;
    display: flex;
    align-items: center;
  }

  &__button {
    max-width: 157px;
    width: 100%;
    padding: 16px 0;
    background: #1A222D;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #F5F5F5;
  }
}
</style>
