<template>
  <label class="custom-checkbox">
    <input type="checkbox" value="value-1">
    <span>{{text}}</span>
  </label>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  props: {
    text: String
  },
  data() {
    return {
      check: true
    }
  }
}
</script>

<style lang='scss' scoped>
/* для элемента input c type="checkbox" */
.custom-checkbox>input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

/* для элемента label, связанного с .custom-checkbox */
.custom-checkbox>span {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

/* создание в label псевдоэлемента before со следующими стилями */
.custom-checkbox>span::before {
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
}

/* стили при наведении курсора на checkbox */
.custom-checkbox>input:not(:disabled):not(:checked)+span:hover::before {
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
.custom-checkbox>input:checked+span::before {
  background: transparent url('../../assets/img/icons/checkbox/normal.svg') center;
  background-size: contain;
  border: 0;
}

.custom-checkbox>input:checked:hover+span::before {
  background: transparent url('../../assets/img/icons/checkbox/hover.svg') center;
  background-size: contain;
  border: 0;
}

/* стили для чекбокса, находящегося в состоянии disabled */
.custom-checkbox>input:disabled+span::before {
  background-color: #121519;
  border: 1px solid #1D2129;
}

.custom-checkbox>input:checked:disabled+span::before {
  background: transparent url('../../assets/img/icons/checkbox/disable.svg') center;
  background-size: contain;
  border: 0;
}


</style>
