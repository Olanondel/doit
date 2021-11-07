<template>
  <button class='admin-button' @click='$emit("click")'>{{text}}</button>
</template>

<script>
export default {
  name: 'AdminButton',
  props: {
    text: { type: String, default: '+' }
  }
}
</script>

<style lang='scss' scoped>
.admin-button {
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  padding: 16px 53px;
  white-space: nowrap;
  color: #F5F5F5;
  background: #1A222D;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: .7;
    cursor: not-allowed;
  }
}
</style>
