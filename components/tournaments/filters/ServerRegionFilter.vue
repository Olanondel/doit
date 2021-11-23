<template>
  <div class='status-container'>

    <h2 class='title'>Server region</h2>

    <div class='status'>
      <div class='status__item'>
        <label class='status__item-text' :class="{ 'status__item-text_active': array.includes('EU&NE') }">
          <input
            v-model='array'
            type='checkbox'
            value='EU&NE'
            class='status__item-checkbox'> EU&NE
        </label>
      </div>

      <div class='status__item'>
        <label class='status__item-text'  :class="{ 'status__item-text_active': array.includes('EU&W') }">
          <input
            v-model='array'
            type='checkbox'
            value='EU&W'
            class='status__item-checkbox'> EU&W
        </label>
      </div>

      <div class='status__item'>
        <label class='status__item-text'  :class="{ 'status__item-text_active': array.includes('AU&OC') }">
          <input
            v-model='array'
            type='checkbox'
            value='AU&OC'
            class='status__item-checkbox'> AU&OC
        </label>
      </div>

      <div class='status__item'>
        <label class='status__item-text'  :class="{ 'status__item-text_active': array.includes('CHINA') }">
          <input
            v-model='array'
            type='checkbox'
            value='CHINA'
            class='status__item-checkbox'> CHINA
        </label>
      </div>

      <div class='status__item'>
        <label class='status__item-text'  :class="{ 'status__item-text_active': array.includes('ASIA') }">
          <input
            v-model='array'
            type='checkbox'
            value='ASIA'
            class='status__item-checkbox'> ASIA
        </label>
      </div>

      <div class='status__item'>
        <label class='status__item-text'  :class="{ 'status__item-text_active': array.includes('AMERICA') }">
          <input
            v-model='array'
            type='checkbox'
            value='AMERICA'
            class='status__item-checkbox'> AMERICA
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
