<template>
  <div class='datepicker-wrapper' :class="{ 'on-admin': onAdmin }">
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
          :class='{ error: (v && v.$dirty && !v.required) }'
          :value='inputValue'
          v-on='inputEvents'
          :disabled='disabled'
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
    onAdmin: { type: Boolean, default: false },
    config: { type: Object, default: () => ({ type: 'string', mask: 'YYYY-MM-DD', }) },
    v: { type: Object },
    disabled: { type: Boolean, default: false },
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

<style scoped lang='scss'>
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

.base-input {
  width: 100%;
  height: 40px;
  padding: 12px 16px;
  outline: none;
  background: transparent;
  color: #627CA3;
  border: 1px solid #1C2F4D;

&:focus {
   background-color: #121F33;
   color: #627CA3;
   border: 1px solid #627CA3;
 }

&:active {
   background-color: #16263D;
   color: #E6E6E6;
   border: 1px solid #185EC7;
 }

&:disabled {
   background-color: #121F33;
   border: none;
   color: #98A4B5;
   cursor: not-allowed;
 }

&::placeholder {
   color: #627CA3;
 }
}

.base-content {
  display: flex;
  align-items: center;
}

.error {
  border: 1px solid #B83333 !important;
  color: #E6E6E6;
  background: url('@/assets/img/icons/error.svg') no-repeat 96% center;
}

.success {
  border: 1px solid #4CB725;
  color: #E6E6E6;
  background: transparent url('@/assets/img/icons/success.svg') no-repeat 96% center;
}

.error-message {
  color: #B83333;
  margin-top: 5px;
}

.on-admin {
&.container {
   margin-bottom: 22px;
 }

.base-text {
  margin-bottom: 12px;
  font-weight: 700;
  color: #CCCDCD;
}

&.base-input-wrapper {
   display: flex;
   align-items: center;
 }

label {
  flex: 1 1 100%;
}

.base-url {
  padding: 12px 12px 12px 16px;
  color: #78828F;
  background: #20252B;
}

.base-input {
  border: 1px solid #20252B;
  background: #0F1215;
  color: #CCCDCD;
}


&.success {
.base-input-wrapper {
  border: 1px solid #20252B;
}

.base-input {
  border: none;
}

.base-url {
  background: #4CB725;
  color: #CCCDCD;
}
}

&.error {
.base-input {
  border: none;
}

.base-url {
  background: #B83333;
  color: #CCCDCD;
}
}
}
</style>
