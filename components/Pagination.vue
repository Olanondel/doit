<template>
  <div class='pagination'>
    <div class='pagination__arrow pagination__arrow_double pagination__arrow_double-left'></div>
    <div class='pagination__arrow pagination__arrow-left'></div>

    <div class='pagination__content'>
      <div
        v-for='(item, index) in pagesCount'
        :key='index'
        class='pagination__item'
        :class="{ 'pagination__item_active': index === currentPage }"
        @click='changePage(index)'
      >{{item}}</div>
    </div>

    <div class='pagination__arrow pagination__arrow-right'></div>
    <div class='pagination__arrow pagination__arrow_double pagination__arrow_double-right'></div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pagesCount: { type: Number, default: 0 },
    currentPage: { type: Number, default: 1 },
  },
  data() {
    return {

    }
  },
  methods: {
    changePage(item) {
      this.$emit('changePage', item)
    }
  }
}
</script>

<style lang='scss' scoped>

.pagination {
  max-width: 380px;
  height: 60px;
  margin: 0 auto;
  background: #151A1F;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 23px;

  &__arrow {
    height: 7px;
    flex: 0 0 12px;
    cursor: pointer;

    &-left {
      background: transparent url("@/assets/img/icons/pagination/arrow-left.svg") no-repeat center;
    }

    &-right {
      background: transparent url("@/assets/img/icons/pagination/arrow-right.svg") no-repeat center;
    }

    &_double {
      flex: 0 0 24px;

      &-left {
        background: transparent url("@/assets/img/icons/pagination/double-arrow-left.svg") no-repeat center;
        margin-right: 35px;
      }

      &-right {
        background: transparent url("@/assets/img/icons/pagination/double-arrow-right.svg") no-repeat center;
        margin-left: 35px;
      }
    }
  }

  &__content {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
  }

  &__item {
    cursor: pointer;
    font-size: 16px;
    line-height: 16px;
    color: #fff;

    &_active {
      color: #2787F6;
      font-size: 22px;
      line-height: 22px;
    }
  }
}

</style>
