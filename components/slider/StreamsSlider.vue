<template>
  <swiper class='swiper' :options='swiperOptions'>

    <swiper-slide
      v-for='(slide, index) in streamGroup'
      :key='index'
      class='stream__slide'
    >
      <div
        v-for='item in slide'
        :key='item.id'
        class='stream__item'
        :style="{ backgroundImage: 'url(' + item.image + ')' }"
      ></div>
    </swiper-slide>

    <div slot='pagination' class='swiper-pagination'></div>
  </swiper>
</template>

<script>

export default {
  name: 'StreamsSlider',
  props: {
    slides: { type: Array, default: () => [] },
    component: { type: String, default: 'TournamentCard' }
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
      },
    }
  },
  computed: {
    streamGroup() {
      const grouped = []

      for (let i = 0; i < this.slides.length; i += 6) {
        grouped.push(this.slides.slice(i, i + 6))
      }

      return grouped
    }
  }
}
</script>

<style lang='scss' scoped>
.swiper {
  padding-bottom: 28px;
}

.stream__slide {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: minmax(320px, 2fr) minmax(152px, 1fr);
  grid-gap: 4px;

  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, minmax(320px, 1fr));
  }
}

.stream__item {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 3;

    @media screen and (max-width: 680px) {
      grid-column-start: initial;
      grid-column-end: initial;
    }
  }

  &:nth-child(2) {
    grid-column-start: 3;
    grid-column-end: 5;

    @media screen and (max-width: 680px) {
      grid-column-start: initial;
      grid-column-end: initial;
    }
  }
}
</style>
