<template>
  <div class='status-container'>

    <h2 class='title'>Game mode</h2>

    <div class='status'>
      <div class='status__item'>
        <label class='status__item-text' :class="{ 'status__item-text_active': one.includes('1v1') }">
          <input
            v-model='one'
            type='checkbox'
            value='1v1'
            class='status__item-checkbox'> 1v1
        </label>
      </div>

      <div class='status__item'>
        <label class='status__item-text'  :class="{ 'status__item-text_active': two.includes('2v2') }">
          <input
            v-model='two'
            type='checkbox'
            value='2v2'
            class='status__item-checkbox'> 2v2
        </label>
      </div>

      <div class='status__item'>
        <label class='status__item-text'  :class="{ 'status__item-text_active': five.includes('5v5') }">
          <input
            v-model='five'
            type='checkbox'
            value='5v5'
            class='status__item-checkbox'> 5v5
        </label>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'GameModeFilter',
  model: {
    prop: 'values',
    event: 'change'
  },
  props: {
    values: { type: Array, default: () => [] }
  },
  data() {
    return {
    }
  },
  computed: {
    one: {
      get() {
        return this.values
      },

      set(e) {
        this.$emit('change', e)
      }
    },

    two: {
      get() {
        return this.values
      },

      set(e) {
        this.$emit('change', e)
      }
    },

    five: {
      get() {
        return this.values
      },

      set(e) {
        this.$emit('change', e)
      }
    }
  }
}
</script>

<style lang='scss' scoped>

.title {
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #F5F5F5;
  margin-bottom: 16px;

  @media screen and (max-width: 960px) {
    margin-bottom: 12px;
  }
}

.status {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 28px;

  &__item {

    &-text {
      font-size: 16px;
      line-height: 24px;
      color: #67707A;
      text-transform: uppercase;
      position: relative;
      white-space: nowrap;
      padding-left: 24px;
      cursor: pointer;

      &::before {
        content: "";
        display: inline-block;
        width: 16px;
        height: 16px;
        position: absolute;
        border: 1px solid #67707A;
        left: 0;
        top: 1px;
      }

      &_active {
        color: #0A68F5;

        &::before {
          background: url("@/assets/img/icons/tournaments/checkbox-active.svg") no-repeat center;
          border: 1px solid #0A68F5;
        }
      }
    }

    &-checkbox {
      display: none;
    }
  }
}

</style>
