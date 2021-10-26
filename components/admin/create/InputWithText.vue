<template>
  <div class='form flex-between'>
    <div class='form__text'>{{ text }}</div>

    <input :value='value' @input="$emit('input', $event.target.value)" type='text' class='form__input' />
  </div>
</template>

<script>
export default {
  name: 'InputWithText',
  props: {
    text: { type: String, default: '' },
    value: { type: String, default: '' }
  }
}
</script>

<style lang='scss' scoped>
.form {
  gap: 15px;
  margin-bottom: 8px;
  align-items: center;

  &__text {
    color: #CCCDCD;
    font-weight: 700;
    white-space: nowrap;
  }

  &__input {
    color: #CCCDCD;
    font-weight: 700;
    border: 2px solid #20252B;
    background: transparent;
    border-radius: 4px;
    text-align: center;
    width: 100%;
    padding: 0 5px;
    max-width: 100px;
    height: 25px;
  }
}
</style>
