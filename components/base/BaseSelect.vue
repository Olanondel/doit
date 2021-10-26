<template>
  <div class='base-select-wrapper' :class='{ onAdmin: onAdmin }' :style='{ marginBottom: mb + "px" }'>
    <div class='base-text'>{{ title }}</div>
    <vSelect
      v-model='selected'
      :options='options'
      v-bind='$attrs'
      placeholder='Choose the value'
    />
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'BaseSelect',
  components: { vSelect },
  model: {
    prop: 'current',
    event: 'changeValue'
  },
  props: {
    options: {
      type: Array,
      default: () => []
    },
    title: { type: String, default: '' },
    current: { type: String, default: '' },
    onAdmin: { type: Boolean, default: false },
    mb: { type: String, default: '0' }
  },
  data() {
    return {}
  },
  computed: {
    selected: {
      get() {
        return this.current
      },

      set(value) {
        this.$emit('changeValue', value)
      }
    }
  }
}
</script>

<style lang='scss'>
.base-select-wrapper {
  width: 100%;
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

.onAdmin {
  .base-text {
    font-size: 16px;
    line-height: 16px;
    color: #CCCDCD;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .vs__dropdown-toggle,
  .vs__dropdown-menu {
    font: 16px 'Rubik', sans-serif;
    line-height: 16px;
    color: green !important;
    opacity: 1;
    text-transform: lowercase;
    font-variant: small-caps;
  }

  .vs__dropdown-toggle {
    background: transparent;
    border-radius: 2px;
    border: 2px solid #20252B;
  }

  .vs__dropdown-menu {
    background: #0F1215;
    color: #CCCDCD;
    font-size: 16px;
    line-height: 16px;
    padding: 0;
  }

  .vs__dropdown-menu li {
    color: #CCCDCD;
  }

  .vs__dropdown-menu li:hover {
    color: #CCCDCD;
    background: #20252B;
  }

  .vs__selected {
    color: #CCCDCD;
    opacity: 1;
  }

  .vs__search {
    color: #CCCDCD;
    opacity: 1;
  }

  .vs__clear {
    display: none;
  }

  .vs__open-indicator {
    fill: #CCCDCD;
  }

  .vs--open {

    & .vs__selected {
      opacity: 1 !important;
      color: #CCCDCD;
    }

    & .vs__dropdown-toggle {
      background: #0F1215;
      border: 2px solid #20252B;
    }

    & .vs__dropdown-menu {
      border: 2px solid #20252B;
      border-radius: 2px;
      margin-top: 4px;
    }

    & .vs__dropdown-option--highlight {
      background: #20252B;
    }


  }
}
</style>
