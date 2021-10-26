<template>
  <div class='radio'>
    <div class='radio__title'> {{ title }} </div>

    <div class='radio__content'>
      <label
        v-for='radio in options'
        :key='radio.value'
        class='radio__item'
        :class="{ radio__item_active: radio.value === checked }"
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
  margin-bottom: 22px;

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
      color: #CCCDCD;
      cursor: pointer;
    }
  }

  &__item {
    color: #CCCDCD;
    position: relative;
    margin-bottom: 12px;
    padding-left: 28px;
    white-space: nowrap;

    &_active {
      &:before {
        background: #0F1215 url("@/assets/img/icons/admin/base/radio-active.svg") no-repeat center;
      }
    }

    &:before {
      display: inline-block;
      content: "";
      width: 20px;
      height: 20px;
      border: 2px solid #20252B;
      border-radius: 50%;
      position: absolute;
      left: 0;
      top: -2px;
    }


  }

  &__item input {
    padding: 0;
    margin: 0;
    display: none;
  }
}
</style>
