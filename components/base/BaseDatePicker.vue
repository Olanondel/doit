<template>
  <div class='datepicker-wrapper'>
    <div class='base-text'>Date</div>
    <v-date-picker v-model='date' is-dark>
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
  data() {
    return {
      date: new Date()
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
