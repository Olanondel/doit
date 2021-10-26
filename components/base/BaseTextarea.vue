<template>
  <div :class='{ onAdmin: onAdmin }' :style="{ marginBottom: mb + 'px' }">
    <label>
      <div class='base-text' v-if='title'>{{title}}</div>

      <textarea
        v-bind='$attrs'
        class='base-input'
        :value='value'
        :placeholder='placeholder'
        @input='$emit("input", $event.target.value)'
      ></textarea>

    </label>

    <div v-if='false' class='error-message'>invalid type of data</div>

  </div>
</template>

<script>
export default {
  name: 'BaseTextarea',
  inheritAttrs: false,
  props: {
    value: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    title: { type: String, default: '' },
    onAdmin: { type: Boolean, default: false },
    mb: { type: String, default: '' }
  },

}
</script>

<style lang='scss' scoped>
.base-input {
  min-height: 184px;
  width: 100%;
  resize: none;
}

.base-text {
  color: #fff;
  font-size: 14px;
  margin-bottom: 6px;
}

.base-input {
  width: 100%;
  height: 40px;
  padding: 12px 16px;
  outline: none;
  background: transparent;
  color: #627CA3;
  border: 1px solid #1C2F4D;

  &:focus {
    background-color: #121F33;
    color: #627CA3;
    border: 1px solid #627CA3;
  }

  &:active {
    background-color: #16263D;
    color: #E6E6E6;
    border: 1px solid #185EC7;
  }

  &:disabled {
    background-color: #121F33;
    border: none;
    color: #98A4B5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #627CA3;
  }
}

.base-content {
  display: flex;
  align-items: center;
}

.error {
  border: 1px solid #B83333 !important;
  color: #E6E6E6;
  background: url('../../assets/img/icons/error.svg') no-repeat 96% center;
}

.success {
  border: 1px solid #4CB725;
  color: #E6E6E6;
  background: transparent url('../../assets/img/icons/success.svg') no-repeat 96% center;
}

.error-message {
  color: #B83333;
  margin-top: 5px;
}

.on-admin {
  &.base-input-wrapper {
    display: flex;
    align-items: center;
  }

  label {
    flex: 1 1 100%;
  }

  .base-url {
    padding: 12px 12px 12px 16px;
    color: #78828F;
    background: #20252B;
  }

  .base-input {
    border: 1px solid #20252B;
    background: #0F1215;
    color: #CCCDCD;
  }



  &.success {
    .base-input-wrapper {
      border: 1px solid #20252B;
    }

    .base-input {
      border: none;
    }

    .base-url {
      background: #4CB725;
      color: #CCCDCD;
    }
  }

  &.error {
    .base-input {
      border: none;
    }

    .base-url {
      background: #B83333;
      color: #CCCDCD;
    }
  }
}
</style>
