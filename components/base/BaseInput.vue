<template>
  <div>
    <label>
      <div class='base-text' v-if='text'>Normal</div>

      <input
        class='base-input'
        type='text'
        :value='value'
        :placeholder='placeholder'
        @input='$emit("input", $event.target.value)'
      >

    </label>

    <div v-if='false' class='error-message'>invalid type of data</div>

  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
  }
}
</script>

<style lang='scss' scoped>
.base-text {
  color: #fff;
  font-size: 14px;
  margin-bottom: 6px;
}

.error {
  padding: 12px 52px 12px 16px;
  border: 1px solid #B83333;
  color: #E6E6E6;
  background: transparent url('../../assets/img/icons/error.svg') no-repeat 204px center;
}

.success {
  padding: 12px 52px 12px 16px;
  border: 1px solid #4CB725;
  color: #E6E6E6;
  background: transparent url('../../assets/img/icons/success.svg') no-repeat 204px center;
}

.error-message {
  color: #B83333;

  margin-top: 5px;
}
</style>
