<template>
  <div class='choose'>
    <div class='choose__text'>{{text}}</div>

    <div class='choose__item'>{{buttonText}}</div>
  </div>
</template>

<script>
export default {
  name: 'LinkWithText',
  props: {
    text: { type: String, default: '' },
    buttonText: { type: String, default: '' },
  }
}
</script>

<style lang='scss' scoped>
.choose {
  display: flex;
  align-items: center;
  gap: 25px;

  &__text {
    color: #CCCDCD;
  }

  &__item {
    padding: 12px;
    font-weight: 700;
    color: #0A61E1;
    background: #1A222D;
    cursor: pointer;
     }
}
</style>
