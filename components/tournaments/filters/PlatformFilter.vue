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
        <label class='status__item-text'  :class="{ 'status__item-text_active': array.includes('xboxOne') }">
          <input
            v-model='array'
            type='checkbox'
            value='xboxOne'
            class='status__item-checkbox'> Xbox One
        </label>
      </div>

      <div class='status__item'>
        <label class='status__item-text'  :class="{ 'status__item-text_active': array.includes('ps4') }">
          <input
            v-model='array'
            type='checkbox'
            value='ps4'
            class='status__item-checkbox'> Ps4
        </label>
      </div>

      <div class='status__item'>
        <label class='status__item-text'  :class="{ 'status__item-text_active': array.includes('nintendoSwitch') }">
          <input
            v-model='array'
            type='checkbox'
            value='nintendoSwitch'
            class='status__item-checkbox'> Nintendo Switch
        </label>
      </div>

      <div class='status__item'>
        <label class='status__item-text'  :class="{ 'status__item-text_active': array.includes('ps5') }">
          <input
            v-model='array'
            type='checkbox'
            value='ps5'
            class='status__item-checkbox'> Ps5
        </label>
      </div>

      <div class='status__item'>
        <label class='status__item-text'  :class="{ 'status__item-text_active': array.includes('xboxSeriesX') }">
          <input
            v-model='array'
            type='checkbox'
            value='xboxSeriesX'
            class='status__item-checkbox'> Xbox Series X
        </label>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ServerRegionFilter',
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
}

.status {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  &__item {
    margin-bottom: 28px;

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
