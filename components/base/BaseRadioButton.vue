<template>
  <label class='base-radio' :class='{ onAdmin: onAdmin }'>
    <input type='radio' :name='name' />
    Hello world!
  </label>
</template>

<script>
export default {
  name: 'BaseRadioButton',
  props: {
    onAdmin: { type: Boolean, default: false },
    text: { type: String, default: '' },
    name: { type: String, default: '' }
  }
}
</script>

<style lang='scss' scoped>
.base-radio {
  cursor: pointer;
}

  .base-radio.onAdmin {
    color: #CCCDCD;
    font-size: 16px;
    line-height: 16px;
  }

</style>
