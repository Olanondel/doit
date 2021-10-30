<template>
  <div class='container' :class="{ 'on-admin': onAdmin }">
    <div v-if='title' class='base-text'>{{ title }}</div>

    <div
      class='base-input-wrapper'
      :class="{
        'on-admin': onAdmin,
        'error': v && v.$dirty && v.$invalid,
      }"
    >
      <div v-if='url' class='base-url'>
        {{ url }}
      </div>

      <label>
        <input
          v-model='current'
          v-bind='$attrs'
          class='base-input'
          :placeholder='placeholder'
        >
      </label>
    </div>

    <div v-if='v && v.$dirty && !v.minLength' class='error-message'>Минимальная длина поля: {{v.$params.minLength.min}}</div>
    <div v-else-if='v && v.$dirty && !v.maxLength' class='error-message'>Максимальная длина поля: {{v.$params.maxLength.max}}</div>
    <div v-else-if='v && v.$dirty && v.$params.email && !v.email' class='error-message'>Введите валидный email!</div>
    <div v-else-if='v && v.$dirty && !v.required' class='error-message'>Заполните это поле!</div>

  </div>
</template>

<script>

export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    value: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    title: { type: String, default: '' },
    url: { type: String, default: '' },
    onAdmin: { type: Boolean, default: false },
    withTouch: { type: Boolean, default: false },
    v: { type: Object }

  },
  computed: {
    current: {
      get() {
        return this.value
      },

      set(v) {
        this.$emit('input', v)
        if (this.v && this.withTouch) { this.v.$touch() }
      }
    },
  }
}
</script>

<style lang='scss' scoped>

.base-text {
  color: #fff;
  font-size: 14px;
  margin-bottom: 6px;
}

.base-input-wrapper {
  height: 40px;
}

.base-input {
  width: 100%;
  height: 40px;
  padding: 12px 16px;
  outline: none;
  background: transparent;
  color: #627CA3;
  border: 1px solid #1C2F4D;
  border-radius: 2px;

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
  border-radius: 2px;
  color: #E6E6E6;
  background: url('../../assets/img/icons/error.svg') no-repeat 94% center;

  .base-input {
    border: none;

    &:focus {
      background-color: transparent;
      color: #627CA3;
      border: none;
    }

    &:active {
      background-color: transparent;
      color: #627CA3;
      border: none;
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
}

.success {
  border: 1px solid #4CB725;
  color: #E6E6E6;
  background: transparent url('../../assets/img/icons/success.svg') no-repeat 94% center;

  .base-input {
    border: none;

    &:focus {
      background-color: transparent;
      color: #627CA3;
      border: none;
    }

    &:active {
      background-color: transparent;
      color: #627CA3;
      border: none;
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
}

.error-message {
  position: absolute;
  color: #B83333;
  margin-top: 5px;
}

.on-admin {
  &.container {
    margin-bottom: 22px;
  }

  .base-text {
    margin-bottom: 12px;
    font-weight: 700;
    color: #CCCDCD;
  }

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
