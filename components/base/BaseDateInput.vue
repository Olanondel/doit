<template>
  <div class='base-date-wrapper'>
    <div class='base-text'>
      Date
    </div>

    <div class='input-group'>
      <input v-model='day' type='number' class='day base-input'><!--
      --><input v-model='month' type='number' class='month base-input'><!--
      --><input v-model='year' type='number' class='year base-input'>
    </div>
  </div>
</template>

<script>
import {required, maxLength} from 'vuelidate/lib/validators'

export default {
  name: 'BaseInputDate',
  data() {
    return {
      day: null,
      month: null,
      year: null,
    }
  },
  validations: {
    day: {
      required
    },
    month: {
      required
    },
    year: {
      maxLength: maxLength(4),
      required
    }
  }
}
</script>

<style lang='scss' scoped>
.base-input {
  border: 1px solid #16263D;
  border-radius: 2px;
  color: #627CA3;
  background: transparent;
  padding: 12px 16px;
  max-width: 72px;
  width: 72px;
  text-align: center;

  &:focus {
    background-color: #121F33;
    border: 1px solid #627CA3;
    color: #627CA3;
  }

  &:active {
    background-color: #16263D;
    border: 1px solid #185EC7;
    color: #E6E6E6;
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

.base-input:not(:last-child) {
  margin-right: 12px;
}
</style>
