<template>
  <div class='map' :style="{ marginBottom: mb + 'px' }">

    <div class='map__title'>{{title}}</div>

    <div class='map__content'>
      <input
        v-model='cMap'
        placeholder='Map name'
        type='text'
        class='map__name'
      >
      <div class='map__file'>{{fileName.length ? fileName : 'Logo map 256 x 256'}}</div>
      <label class='map__button'>
        UPLOAD
        <input
          ref='map__file-field'
          type='file'
          class='map__file-field'
          @change='getImage'
        />
      </label>
    </div>

  </div>
</template>

<script>
export default {
  name: 'UploadImageWithInput',
  props: {
    fileName: { type: String, default: 'Logo map 256 x 256' },
    title: { type: String, default: '' },
    name: { type: String, default: '' },
    mb: { type: String, default: '0' },
  },
  data() {
    return {}
  },
  computed: {
    cMap: {
      get() {
        return this.name
      },

      set(v) {
        this.$emit('input', v)
      }
    }
  },
  methods: {
    getImage() {
      const file = this.$refs['map__file-field'].files[0]
      const reader = new FileReader()

      reader.onload = () => {
        this.$emit('getImage', [ reader.result, file.name ])
      }

      reader.readAsDataURL(file)
    }
  }
}
</script>

<style lang='scss' scoped>
.map {
  display: flex;
  flex-direction: column;

  &__title {
    margin-bottom: 8px;
    color: #CCCDCD;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
  }

  &__content {
    display: flex;
    font-size: 16px;
    line-height: 16px;
    gap: 8px;
  }

  &__name {
    font-size: 16px;
    line-height: 16px;
    border-radius: 4px;
    border: 2px solid #20252B;
    background: #0F1215;
    color: #3C434D;
    padding: 0 8px;
    max-width: 161px;

    &::placeholder {
      color: #3C434D;
    }
  }

  &__file {
    max-width: 171px;
    color: #3C434D;
    border-radius: 4px;
    border: 2px solid #20252B;
    background: #0F1215;
    text-align: center;
    width: 100%;
    padding: 16px 10px;
    white-space: nowrap;
    margin-right: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &__button {
    max-width: 157px;
    width: 100%;
    padding: 16px 0;
    background: #1A222D;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    color: #F5F5F5;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .map__file-field {
    display: none;
  }
}
</style>
