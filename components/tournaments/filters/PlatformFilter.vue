<template>
  <div class='status-container'>

    <h2 class='title'>Platform</h2>

    <div class='status'>
      <div class='status__item'>
        <label class='status__item-text' :class="{ 'status__item-text_active': array.includes('pc') }">
          <input
            v-model='array'
            type='checkbox'
            value='pc'
            class='status__item-checkbox'> PC
        </label>
      </div>

      <div class='status__item'>
        <label class='status__item-text'  :class="{ 'status__item-text_active': array.includes('Xbox One') }">
          <input
            v-model='array'
            type='checkbox'
            value='Xbox One'
            class='status__item-checkbox'> Xbox One
        </label>
      </div>

      <div class='status__item'>
        <label class='status__item-text'  :class="{ 'status__item-text_active': array.includes('ps 4') }">
          <input
            v-model='array'
            type='checkbox'
            value='ps 4'
            class='status__item-checkbox'> Ps4
        </label>
      </div>

      <div class='status__item'>
        <label class='status__item-text'  :class="{ 'status__item-text_active': array.includes('nintendo switch') }">
          <input
            v-model='array'
            type='checkbox'
            value='nintendo switch'
            class='status__item-checkbox'> Nintendo Switch
        </label>
      </div>

      <div class='status__item'>
        <label class='status__item-text'  :class="{ 'status__item-text_active': array.includes('ps 5') }">
          <input
            v-model='array'
            type='checkbox'
            value='ps 5'
            class='status__item-checkbox'> Ps 5
        </label>
      </div>

      <div class='status__item'>
        <label class='status__item-text'  :class="{ 'status__item-text_active': array.includes('Xbox series x') }">
          <input
            v-model='array'
            type='checkbox'
            value='Xbox series x'
            class='status__item-checkbox'> Xbox Series X
        </label>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PlatformFilter',
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
    array: {
      get() {
        return this.values
      },

      set(e) {
        this.$emit('change', e)
      }
    },
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
  flex-direction: column;
  flex-wrap: wrap;

  &__item {
    margin-bottom: 16px;

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
