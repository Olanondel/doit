<template>
  <section class='main-layout'>

    <Sidebar />

    <div class='content-wrapper'>
      <Navigation />

      <Nuxt />
    </div>

  </section>
</template>

<script>
import Navigation from '@/components/layout/default/Navigation'
import Sidebar from '@/components/layout/default/Sidebar'

export default {
  name: 'default',
  components: { Navigation, Sidebar }
}
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
}

.content-wrapper {
  max-width: 1100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 15px 0 15px;
  margin: 0 auto;
}
</style>
