<template>
  <swiper ref='swiper' class='swiper' :options='swiperOptions'>

      <swiper-slide
        v-for='(slide, index) in filtered'
        :key='index'
      >
          <component :is='component' :data='slide' />
      </swiper-slide>

    <div v-if='filtered.length' slot='pagination' class='swiper-pagination'></div>
  </swiper>
</template>

<script>
import TournamentCard from './cards/TournamentCard'
import NewsCard from './cards/NewsCard'
import GameCard from './cards/GameCard'
import StreamCard from './cards/StreamCard'
export default {
  name: 'Slider',
  components: { StreamCard, GameCard, NewsCard, TournamentCard },
  props: {
    slides: { type: Array, default: () => [] },
    component: { type: String, default: 'TournamentCard' },
    gameId: { type: String, default: 'All' },
    news: { type: Boolean, default: false }
  },
  data() {
    return {
      swiper: null,
      swiperOptions: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        updateOnImagesReady: true,
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
  },
  computed: {
    filtered() {
      if (this.news) {
        return this.gameId === 'All' ? this.slides : this.slides.filter(el => {
          return el.game && el.game.id && el.game.id === this.gameId
        })
      }

      return this.gameId === 'All' ? this.slides : this.slides.filter(el => el.game.game.id === this.gameId)
    }
  },
  watch: {

  }
}
</script>

<style lang='scss' scoped>
.swiper {
  padding-bottom: 28px;
}


.swiper-enter-active, .swiper-leave-active {
  transition: all 1s;
}
.swiper-enter, .swiper-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
