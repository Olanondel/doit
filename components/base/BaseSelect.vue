<template>
  <div class='base-select-wrapper'>
    <div class='base-text'>Country</div>
    <vSelect
      :options='options1'
      placeholder='Choose the value'

    />
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'BaseSelect',
  components: { vSelect },
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      options1: ['foo', 'bar', 'hi', 'byebye']
    }
  }
}
</script>

<style lang='scss'>
.base-select-wrapper {
  max-width: 240px;
  width: 240px;
}

.vs__dropdown-toggle,
.vs__dropdown-menu {
  font: 16px 'Rubik', sans-serif;
  line-height: 16px;
  color: #627CA3;
  opacity: 1;
  text-transform: lowercase;
  font-variant: small-caps;
}

.vs__dropdown-toggle {
  background: transparent;
  border-radius: 2px;
  border: 1px solid #1C2F4D;
}

.vs__dropdown-menu {
  background: #0B1729;
  color: #627CA3;
  padding: 0;
}

.vs__dropdown-menu li {
  color: #627CA3;
}

.vs__dropdown-menu li:hover {
  color: #fff;
  background: #1472FF;
}

.vs__selected {
  color: #627CA3;
  opacity: 1;
}

.vs__search {
  color: #627CA3;
  opacity: 1;
}

.vs__clear {
  display: none;
}

.vs__open-indicator {
  fill: #627CA3;
}

.vs--open {

  & .vs__selected {
    opacity: 1 !important;
    color: #E6E6E6;
  }

  & .vs__dropdown-toggle {
    background: #16263D;
    border: 1px solid #1472FF;
  }

  & .vs__dropdown-menu {
    border: 1px solid #1472FF;
    border-radius: 2px;
    margin-top: 4px;
  }

  & .vs__selected {
    color: #E6E6E6;
    opacity: 1;
  }
}
</style>
