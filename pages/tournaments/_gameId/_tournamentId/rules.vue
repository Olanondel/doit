<template>
  <div class='rules'>
    {{ rules }}
  </div>
</template>

<script>
export default {
  name: 'rules',
  props: {
    rules: { type: String, default: 'Правила не указаны' }
  }
}
</script>

<style scoped>

</style>
