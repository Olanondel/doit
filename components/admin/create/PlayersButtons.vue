<template>
  <div class='players'>
    <div class='players__item' :class='{ disabled }' @click='click'>List of players</div>
  </div>
</template>

<script>
export default {
  name: 'PlayersButtons',
  props: {
    disabled: { type: Boolean, default: false }
  },
  methods: {
    click() {
      this.$emit('openList')
    }
  }
}
</script>

<style lang='scss' scoped>
.players {
  display: flex;
  gap: 20px;
  color: #0A61E1;
  font-weight: 700;

  &__item {
    padding: 12px 16px;
    background: #1A222D;
    cursor: pointer;

    &.disabled {
      opacity: .7;
      cursor: not-allowed;
    }
  }
}
</style>
