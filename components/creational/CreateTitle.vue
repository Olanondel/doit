<template>
  <h2 class='admin-create__title'> {{ title }} </h2>
</template>

<script>
export default {
  name: 'CreateTitle',
  props: {
    title: { type: String, default: '' }
  }
}
</script>

<style scoped>
.admin-create__title {
  font-weight: 700;
  font-size: 22px;
  line-height: 22px;
  text-align: center;
  padding: 30px 15px;
  width: 100%;
  display: block;
  background-color: #D8DFEB;
  color: #0F1215;
  margin-bottom: 28px;
}
</style>
