<template>
  <button :disabled='disabled' class='base-button' @click.prevent='click'>
    {{text}}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    disabled: { type: Boolean, default: false },
    text: { type: String, default: '' }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style lang='scss' scoped>
.base-button {
  display: block;
  width: 100%;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  max-width: 240px;
  max-height: 44px;
  padding: 14px 0;
  text-align: center;
  background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
  color: #F5F5F5;
  font-weight: 700;
  margin-bottom: 30px;

  &:hover {
    background: linear-gradient(180deg, #0960E0 100%, #2788F6 0%);
  }

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
}
</style>
