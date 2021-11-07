<template>
  <div class='upload-image'>
    <div class='upload-image__title'> {{ title }} </div>

      <label class='upload-image__content' :class='{ disabled }'>
        <input ref='imageFile' :disabled='disabled' class='upload-image__file' placeholder='image url' type='file' @change='getImage'>
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
    disabled: { type: Boolean, default: false },
  },
  methods: {
    getImage() {
      const image = this.$refs.imageFile.files[0]
      const reader = new FileReader()

      if(image) {
        reader.onload = () => {
          this.$emit('getImage', [image, image.name, reader.result])
        }

        reader.readAsDataURL(image)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.upload-image {
  margin-bottom: 22px;

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
    overflow: hidden;

    &.disabled {
      opacity: .7;
      cursor: not-allowed;
    }
  }

  &__file {
    display: none;
    text-overflow: ellipsis;
    overflow: hidden;
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
    flex: 1 1 auto;
    overflow: hidden;
  }

  &__button {
    max-width: 157px;
    width: 100%;
    padding: 16px;
    background: #1A222D;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #F5F5F5;
  }
}
</style>
