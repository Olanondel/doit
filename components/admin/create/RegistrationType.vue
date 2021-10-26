<template>
  <div class='reg-type'>
    <div class='reg-type__title'>Registration* </div>

    <div class='reg-type__content'>

      <div
        v-for='type in types'
        :key='type'
        class='reg-type__item'
        :class="{ 'reg-type__item_active': type === value }"
        @click="changeType"
      >{{ type }}</div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationType',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: { type: String, default: 'Free' },
  },
  data() {
    return {
      types: ['Free', 'Paid', 'PREMIUM', 'PRIVATE'],
    }
  },
  methods: {
    changeType(e) {
      const value = e.target.innerText

      if (this.types.includes(value)) {
        this.$emit('change', value)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .reg-type {
    &__title {
      color: #CCCDCD;
      font-weight: 700;
      margin-bottom: 16px;
    }

    &__content {
      display: flex;
      color: #0A61E1;
    }

    &__item {
      padding: 12px 22px;
      background: #1A222D;
      font-weight: 700;
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 12px;
      }

      &_active {
        background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
        color: #F5F5F5;
      }
    }
  }
</style>
