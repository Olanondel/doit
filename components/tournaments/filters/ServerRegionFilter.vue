<template>
  <div class='status-container'>

    <h2 class='title'>Server region</h2>

    <div class='status'>
      <div class='status__item'>
        <label class='status__item-text' :class="{ 'status__item-text_active': array.includes('europe') }">
          <input
            v-model='array'
            type='checkbox'
            value='europe'
            class='status__item-checkbox'> Europe
        </label>
      </div>

      <div class='status__item'>
        <label class='status__item-text'  :class="{ 'status__item-text_active': array.includes('singapore') }">
          <input
            v-model='array'
            type='checkbox'
            value='singapore'
            class='status__item-checkbox'> Singapore
        </label>
      </div>

      <div class='status__item'>
        <label class='status__item-text'  :class="{ 'status__item-text_active': array.includes('australia') }">
          <input
            v-model='array'
            type='checkbox'
            value='australia'
            class='status__item-checkbox'> Australia
        </label>
      </div>

      <div class='status__item'>
        <label class='status__item-text'  :class="{ 'status__item-text_active': array.includes('brazil') }">
          <input
            v-model='array'
            type='checkbox'
            value='brazil'
            class='status__item-checkbox'> Brazil
        </label>
      </div>

      <div class='status__item'>
        <label class='status__item-text'  :class="{ 'status__item-text_active': array.includes('peru') }">
          <input
            v-model='array'
            type='checkbox'
            value='peru'
            class='status__item-checkbox'> Peru
        </label>
      </div>

      <div class='status__item'>
        <label class='status__item-text'  :class="{ 'status__item-text_active': array.includes('us east') }">
          <input
            v-model='array'
            type='checkbox'
            value='us east'
            class='status__item-checkbox'> US East
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

  @media screen and (max-width: 960px) {
    margin-bottom: 12px;
  }
}

.status {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

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
