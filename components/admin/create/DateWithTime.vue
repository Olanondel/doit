<template>
  <div class='date-with-time'>
    <div class='date-with-time__title base-text'>
      {{ title }}
    </div>

    <div class='date-with-time__content'>
      <BaseDatePicker v-model='computedDate' :on-admin='onAdmin' />

      <BaseDatePicker v-model='computedTime' :on-admin='onAdmin' mode='time' :config='timeConfig' />
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
    onAdmin: { type: Boolean, default: false }
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
  margin-bottom: 22px;

  &__title {
    margin-bottom: 6px;
  }

  &__content {
    display: flex;
    gap: 16px;
    max-width: 336px;
  }
}

.base-text {
  color: #fff;
  font-size: 14px;
  margin-bottom: 6px;
}
</style>
