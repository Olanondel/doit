<template>
  <div class='form flex-between'>
    <div class='form__text'>{{ text }}</div>

    <input maxlength='4' :value='maxPlayers' @input="$emit('update:maxPlayers', $event.target.value)" type='text' class='form__input form__input_first' />
    <div class='form__symbol'>/</div>
    <input maxlength='4' :value='maxTeams' @input="$emit('update:maxTeams', $event.target.value)" type='text' class='form__input form__input_second' />
  </div>
</template>

<script>
export default {
  name: 'DoubleInputWithText',
  props: {
    text: { type: String, default: '' },
    'maxPlayers': { type: String, default: '' },
    'maxTeams': { type: String, default: '' },
  }
}
</script>

<style lang='scss' scoped>
.form {
  margin-bottom: 8px;
  align-items: center;
  white-space: nowrap;

  &__text {
    color: #CCCDCD;
    font-weight: 700;
    white-space: nowrap;
    margin-right: 15px;
  }

  &__symbol {
    border-top: 2px solid #20252B;
    border-bottom: 2px solid #20252B;
    height: 25px;
    display: flex;
    align-items: center;
  }

  &__input {
    color: #CCCDCD;
    font-weight: 700;
    border: 2px solid #20252B;
    background: transparent;
    border-radius: 4px 0 0 4px;
    text-align: center;
    width: 100%;
    padding: 0 5px;
    max-width: 45px;
    height: 25px;

    &_first {
      border-right: none;
      text-align: right;
    }

    &_second {
      border-left: none;
      border-radius: 0 4px 4px 0;
      text-align: left;
    }
  }
}
</style>
