<template>
  <div class='radio' :style="{ marginBottom: mb + 'px' }">
    <div class='radio__title'> {{ title }} </div>

    <div class='radio__content'>
      <label
        v-for='radio in options'
        :key='radio.value'
        class='radio__item'
      >
        <input :value='radio.value' :name='name' type='radio' :checked='radio.value === checked' @change="$emit('change', $event.target.value)" />
        {{ radio.text }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminRadio',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: { type: String, default: 'No Active' },
    title: { type: String, default: '' },
    data: { type: Object, default: () => ({  })},
    options: { type: Array, default: () => [] },
    name: { type: String, default: '' },
    mb: { type: String, default: '0' }
  }
}
</script>

<style lang='scss' scoped>
.radio {
  &__title {
    margin-bottom: 12px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    color: #CCCDCD;
  }

  &__content {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 8px;
      color: #CCCDCD;
      cursor: pointer;
    }
  }

  &__item {
    color: #CCCDCD;
  }

  &__item input {
    padding: 0;
    margin: 0;
  }
}
</style>
