<template>
  <div class='date-with-time'>
    <div class='date-with-time__title'>
      {{ title }}
    </div>

    <div class='date-with-time__content'>
      <BaseDatePicker v-model='computedDate' />

      <BaseDatePicker v-model='computedTime' mode='time' :config='timeConfig' />
    </div>
  </div>
</template>

<script>
import BaseDatePicker from '../../base/BaseDatePicker'
export default {
  name: 'DateWithTime',
  components: { BaseDatePicker },
  props: {
    title: { type: String, default: '' },
    time: { type: String, default: '' },
    date: { type: String, default: '' },
  },
  data() {
    return {
      timeConfig: {
        type: 'string',
        mask: 'HH:mm'
      }
    }
  },
  computed: {
    computedTime: {
      get() {
        return this.time
      },
      set(time) {
        this.$emit('update:time', time)
      }
    },
    computedDate: {
      get() {
        return this.date
      },
      set(date) {
        this.$emit('update:date', date)
      }
    },
  }
}
</script>

<style lang='scss' scoped>
.date-with-time {
  &__title {
    margin-bottom: 6px;
  }

  &__content {
    display: flex;
    gap: 16px;
    max-width: 336px;
  }
}
</style>
