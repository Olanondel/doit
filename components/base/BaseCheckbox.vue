<template>
  <div
    class='base-checkbox'
    :class="{ 'on-admin': onAdmin, error: (v && v.$dirty && !checked)}"
  >
    <label class='custom-checkbox'>
      <input :disabled='disabled' :checked='checked' type='checkbox' @change="changeState">
      <span class='base-checkbox__text' :class="{ 'base-checkbox__admin': onAdmin }">{{ text }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    text: { type: String, default: '' },
    checked: { type: Boolean, default: false },
    onAdmin: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    v: { type: Object },
  },
  data() {
    return {
      check: true
    }
  },
  methods: {
    changeState(e) {
      this.$emit('change', e.target.checked)
    }
  }
}
</script>

<style lang='scss' scoped>
.on-admin {
  margin-bottom: 22px;
}

.error {
 .base-checkbox__text {
   color: red;
 }

  .custom-checkbox > span::before {
    border-color: red;
  }

  .custom-checkbox > input:not(:disabled):not(:checked) + span:hover::before {
    border-color: red;
  }
}

.base-checkbox, .base-checkbox > label {
  cursor: pointer;
}

.base-checkbox .base-checkbox__admin {
  color: #CCCDCD;
  font-size: 14px;
  font-weight: 400;
}

/* для элемента input c type="checkbox" */
.custom-checkbox > input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

/* для элемента label, связанного с .custom-checkbox */
.custom-checkbox > span {
  display: inline-flex;
  align-items: center;
  user-select: none;
  font-size: 12px;
  line-height: 16px;
  color: #627CA3;
}

/* создание в label псевдоэлемента before со следующими стилями */
.custom-checkbox > span::before {
  content: '';
  cursor: pointer;
  display: inline-block;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #1C2F4D;
  border-radius: 2px;
  background-repeat: no-repeat;
  background-position: center;
  width: 24px;
  height: 24px;
  margin-right: 11px;
}

/* стили при наведении курсора на checkbox */
.custom-checkbox > input:not(:disabled):not(:checked) + span:hover::before {
  background: #0F1929;
  border: 1px solid #294470;
}

/* стили для активного чекбокса (при нажатии на него) */
//.custom-checkbox>input:not(:disabled):active+span::before {
//  background-color: #b3d7ff;
//  border-color: #b3d7ff;
//}

/* стили для чекбокса, находящегося в фокусе */
//.custom-checkbox>input:focus+span::before {
//  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
//}

/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
//.custom-checkbox>input:focus:not(:checked)+span::before {
//  border-color: #80bdff;
//}

/* стили для чекбокса, находящегося в состоянии checked */
.custom-checkbox > input:checked + span::before {
  background: transparent url('../../assets/img/icons/checkbox/normal.svg') center;
  background-size: contain;
  border: 0;
}

.custom-checkbox > input:checked:hover + span::before {
  background: transparent url('../../assets/img/icons/checkbox/hover.svg') center;
  background-size: contain;
  border: 0;
}

/* стили для чекбокса, находящегося в состоянии disabled */
.custom-checkbox > input:disabled + span::before {
  background-color: #121519;
  border: 1px solid #1D2129;
}

.custom-checkbox > input:checked:disabled + span::before {
  background: transparent url('../../assets/img/icons/checkbox/disable.svg') center;
  background-size: contain;
  border: 0;
}

.on-admin {
  .custom-checkbox > span::before {
    content: '';
    cursor: pointer;
    display: inline-block;
    flex-shrink: 0;
    flex-grow: 0;
    border: 2px solid #20252B;
    background-color: #0F1215;
    background-repeat: no-repeat;
    border-radius: 4px;
    background-position: center;
    width: 24px;
    height: 24px;
    margin-right: 11px;
  }

  .custom-checkbox > input:not(:disabled):not(:checked) + span:hover::before {
    background: #0F1215;
    border: 2px solid #20252B;
  }

  .custom-checkbox > input:checked + span::before {
    background: transparent url('../../assets/img/icons/admin/base/checkbox-active.png') no-repeat center;
    border: 2px solid #20252B;
  }
}

</style>
