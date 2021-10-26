<template>
  <swiper class='swiper' :options='swiperOptions'>

    <swiper-slide
      v-for='(slide, index) in slides'
      :key='index'
    >
      <component :is='component' :data='slide' />
    </swiper-slide>

    <div slot='pagination' class='swiper-pagination'></div>
  </swiper>
</template>

<script>


import TournamentCard from './cards/TournamentCard'
import NewsCard from './cards/NewsCard'
import GameCard from './cards/GameCard'
export default {
  name: 'Slider',
  components: { GameCard, NewsCard, TournamentCard },
  props: {
    slides: { type: Array, default: () => [] },
    component: { type: String, default: 'TournamentCard' }
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        spaceBetween: 30,
        breakpoints: {
          480: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0
          },
          767: {
            spaceBetween: 30,
            slidesPerView: 2,
            slidesPerGroup: 2
          }

        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.swiper {
  padding-bottom: 28px;
}
</style>
