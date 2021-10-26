<template>
  <div class='datepicker-wrapper'>
    <div class='base-text'>{{title}}</div>
    <v-date-picker
      v-model='pickedDate'
      :mode='mode'
      is-dark
      is24hr
      :model-config='config'
    >
      <template v-slot='{ inputValue, inputEvents }'>
        <input
          class='bg-dark border px-2 py-1 rounded base-input calendar-icon'
          :value='inputValue'
          v-on='inputEvents'
        />
      </template>
    </v-date-picker>
  </div>
</template>

<script>

export default {
  name: 'BaseDatePicker',
  model: {
    prop: 'date',
    event: 'change'
  },
  props: {
   title: { type: String, default: '' },
    date: { type: String, default: '1995-12-30' },
    mode: { type: String, default: '' },
    config: { type: Object, default: () => ({ type: 'string', mask: 'YYYY-MM-DD', }) }
  },
  data() {
    return {
    }
  },
  computed: {
    pickedDate: {
      get() {
        return this.date
      },

      set(value) {
        this.$emit('change', value)
      }
    }
  }
}
</script>

<style>
.calendar-icon {
  background: transparent url('../../assets/img/icons/datepicker-calendar.svg') no-repeat 200px center;
}

.vc-popover-content-wrapper,
.vc-popover-content,
.vc-container{
  background: transparent !important;
  border-radius: 2px !important;
}

.vc-popover-content {
  border: 1px solid #16263D !important;
  margin-top: 4px !important;
  background: #0B1729 !important;
}

.vc-popover-caret {
  display: none !important;
}

.vc-pane-layout {
  margin-top: 0;
}
</style>
