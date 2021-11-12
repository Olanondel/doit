<template>
  <div class='status-container'>

    <h2 class='title'>Status</h2>

    <div class='status'>
      <div class='status__item'>
        <label class='status__item-text' :class="{ 'status__item-text_active': upcoming.includes('upcoming') }">
          <input
            v-model='upcoming'
            type='checkbox'
            value='upcoming'
            class='status__item-checkbox'> Upcoming
        </label>
      </div>

      <div class='status__item'>
        <label class='status__item-text'  :class="{ 'status__item-text_active': past.includes('past') }">
          <input
            v-model='past'
            type='checkbox'
            value='past'
            class='status__item-checkbox'> Past
        </label>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'StatusFilter',
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
    upcoming: {
      get() {
        return this.values
      },

      set(e) {
        this.$emit('change', e)
      }
    },

    past: {
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
