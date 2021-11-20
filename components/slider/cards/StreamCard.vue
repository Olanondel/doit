<template>
  <div
    class='stream'
    :style="{ backgroundImage: 'url(' + data.image + ')' }"
  >

  </div>
</template>

<script>
export default {
  name: 'StreamsCard',
  props: {
    data: {
      type: Object,
      default: () => ({
        image: '',
        text: '',
      })
    }
  }
}
</script>

<style scoped>
.stream {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 200px;
  height: 200px;
  background: red;
}
</style>
