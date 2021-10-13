<template>
  <div class='flex-slider'>

    <div class='flex-slider__filter-line filter-line'>
      <h2 class='section-title filter-line__title'>News</h2>

      <div class='filter-line__categories'>
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

    <swiper v-if='filteredNews.length' class='flex-slider__content swiper' :options='swiperOptions'>

      <swiper-slide
        v-for='news in filteredNews'
        :key='news.image'
        class='flex-slider__card'
      >
        <div class='flex-slider__card-image-wrapper'>
          <img class='flex-slider__card-image' :src='news.image' alt='tournaments-image'>
        </div>

        <div class='flex-slider__card-title'>
          {{ news.title }}
        </div>

        <div class='flex-slider__card-text'>
          {{news.text}}
        </div>
      </swiper-slide>

      <div slot="pagination" class='swiper-pagination'></div>

    </swiper>
  </div>
</template>

<script>
export default {
  name: 'NewsSlider',
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
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
            slidesPerGroup: 2,
          },

        }
      },
      news: [
        {
          game: 'Dota II',
          image: require('@/assets/img/home/news/news1.jpg'),
          title: 'Tournament’s name will be here, maybe, in two lines',
          text: 'Team Evolve, a collective of players who create and share impressive maps using Fortnite\'s in-game Creative mode...'
        },
        {
          game: 'Dota II',
          image: require('@/assets/img/home/news/news2.jpg'),
          title: 'Fortnitity evolution X',
          text: 'Team Evolve, a collective of players who create and share impressive maps using Fortnite\'s in-game Creative mode...'
        },
        {
          game: 'CS:GO',
          image: require('@/assets/img/home/news/news3.jpg'),
          title: 'CS:GO Mirageby tournament',
          text: 'Team Evolve, a collective of players who create and share impressive maps using Fortnite\'s in-game Creative mode...'
        },
        {
          game: 'Dota II',
          image: require('@/assets/img/home/news/news1.jpg'),
          title: 'Tournament’s name will be here, maybe, in two lines',
          text: 'Team Evolve, a collective of players who create and share impressive maps using Fortnite\'s in-game Creative mode...'
        },
        {
          game: 'Dota II',
          image: require('@/assets/img/home/news/news2.jpg'),
          title: 'Fortnitity evolution X',
          text: 'Team Evolve, a collective of players who create and share impressive maps using Fortnite\'s in-game Creative mode...'
        },
        {
          game: 'CS:GO',
          image: require('@/assets/img/home/news/news3.jpg'),
          title: 'CS:GO Mirageby tournament',
          text: 'Team Evolve, a collective of players who create and share impressive maps using Fortnite\'s in-game Creative mode...'
        },
        {
          game: 'Dota II',
          image: require('@/assets/img/home/news/news1.jpg'),
          title: 'Tournament’s name will be here, maybe, in two lines',
          text: 'Team Evolve, a collective of players who create and share impressive maps using Fortnite\'s in-game Creative mode...'
        },
        {
          game: 'Dota II',
          image: require('@/assets/img/home/news/news2.jpg'),
          title: 'Fortnitity evolution X',
          text: 'Team Evolve, a collective of players who create and share impressive maps using Fortnite\'s in-game Creative mode...'
        },
        {
          game: 'CS:GO',
          image: require('@/assets/img/home/news/news3.jpg'),
          title: 'CS:GO Mirageby tournament',
          text: 'Team Evolve, a collective of players who create and share impressive maps using Fortnite\'s in-game Creative mode...'
        }
      ],
      categories: ['All', 'StarCraft II', 'Dota II', 'CS:GO', 'LOL', 'Fortnite'],
      currentCategory: 'All',
    }
  },
  computed: {
    filteredNews() {
      return this.currentCategory === 'All' ? this.news : this.news.filter(news => news.game === this.currentCategory)
    }
  }
}
</script>

<style lang='scss' scoped>
.flex-slider {
  &__content {

  }

  &__card {
    background: #E1E6EB;
  }

  &__card-image-wrapper {
    border: 2px solid #E1E6EB;
    border-bottom: none;
  }

  &__card-title {
    color: #0F1215;
    margin-bottom: 22px;
  }

  &__card-text {
    color: #5E656B;
    padding: 0 22px;
    margin-bottom: 42px;
  }
}
</style>
