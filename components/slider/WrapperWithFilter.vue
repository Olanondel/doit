<template>
  <div class='flex-slider'>

    <div class='flex-slider__filter-line filter-line'>
      <h2 :class='{ mod: streams, "filter-line__title_streams": streams }' class='section-title filter-line__title'>{{ title }}</h2>

      <div v-if='filter' class='filter-line__categories'>
        <div
          v-for='category in categories'
          :key='category.value'
          class='filter-line__categories-item'
          :class="{'filter-line__categories-item_active': category.value === currentCategory}"
          @click='$emit("changeCategory", category.value)'
        >
          {{ category.game }}
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
    filter: { type: Boolean, default: true },
    title: { type: String, default: '' },
    streams: { type: Boolean, default: false },
    currentCategory: { type: String, default: 'All' }
  },
  data() {
    return {
      current: this.currentCategory,
      categories: [
        { game: 'All', value: 'All' },
        { game: 'StarCraft II', value: '2qY3sFllNEDSWPX4EfJD' },
        { game: 'Dota II', value: 'whngAthyzDDKdCTYQHpP' },
        { game: 'CS:GO', value: '1kTwjy6hhBBciqOhPJMP' },
        { game: 'LOL', value: 'eZ79fJosNM7yjZsDPbvt' },
        { game: 'Fortnite', value: 'jncC7JU6geXRFSXHeQom' }
      ]
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

    &_streams:after {
      content: "";
      display: inline-block;
      position: absolute;
      right: -50px;
      top: 14px;
      width: 32px;
      height: 32px;
      background: url("@/assets/img/icons/headers/streams.svg") no-repeat center;
    }
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
      max-width: 130px;
      text-overflow: ellipsis;
      overflow: hidden;
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
      color: #A0A5AD;

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
