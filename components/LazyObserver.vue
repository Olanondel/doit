<template>
  <div class='observer'></div>
</template>

<script>
export default {
  name: 'LazyObserver',
  props: {
    options: { type: Object, default: () => ({  }) }
  },
  data() {
    return {
      observer: null
    }
  },
  mounted() { this.setObserver() },
  destroyed() { this.observer.disconnect() },
  methods: {
    setObserver() {
      this.observer = new IntersectionObserver(([element]) => {
        if (element?.isIntersecting) {
          this.$emit('alert')
        }
      }, this.options)

      this.observer.observe(document.querySelector('.observer'))
    }
  },
}
</script>

<style scoped>

</style>
