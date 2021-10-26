<template>
  <div class='flex-slider'>

    <div class='flex-slider__filter-line filter-line'>
      <h2 :class='{ mod: streams }' class='section-title filter-line__title'>{{title}}</h2>

      <div v-if='filter' class='filter-line__categories'>
        <div
          v-for='category in categories'
          :key='category'
          class='filter-line__categories-item'
          :class="{'filter-line__categories-item_active': category === currentCategory}"
          @click='currentCategory = category'
        >
          {{ category }}
        </div>

      </div>
    </div>

    <slot />

  </div>
</template>

<script>
export default {
  name: 'WrapperWithFilter',
  props: {
    categories: { type: Array, default: () => ([]) },
    filter: { type: Boolean, default: true },
    title: { type: String, default: '' },
    streams: { type: Boolean, default: false }
  },
  data() {
    return {
      currentCategory: 'All'
    }
  }
}
</script>

<style lang='scss' scoped>
.flex-slider {
  margin-bottom: 160px;
}

.filter-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;

  &__title {
    margin-right: 15px;
    position: relative;
  }

  &__categories {
    display: flex;
    max-width: 538px;
    width: 100%;
    overflow: hidden;

    @media screen and (max-width: 680px) {
      display: none;
    }

    &-item {
      max-height: 56px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #14191F;
      font-size: 18px;
      line-height: 24px;
      font-weight: 500;
      cursor: pointer;
      text-align: center;
      white-space: nowrap;
      flex: 1 0 auto;
      border: 1px solid transparent;

      &_active {
        color: #0F1215;
        border: 1px solid #20252B;
        background: #D8DFEB;
      }

      &:not(:last-child) {
        margin-right: 2px;
      }

      @media screen and (max-width: 767px) {
      }
    }
  }
}

.mod {
  &:after {
    content: '';
    display: inline-block;
    width: 32px;
    height: 32px;
    background: transparent url("@/assets/img/icons/headers/streams.svg") no-repeat center;
    position: absolute;
    margin-left: 16px;
    top: 14px;
  }
}
</style>
