<template>
  <div class='container'>
    <WrapperWithFilter class='news__filter' title='News' :current-category='filter' @changeCategory='changeFilter' />


    <transition-group name='slide-fade' class='news'>
        <div
          v-for='item in filteredNews'
          :key='item.id'
          class='news__news-wrapper'
        >
          <div class='news__news'>
            <div class='news__image-container'>
              <img src='../assets/img/news/default.jpg' alt='' class='news__image'>
            </div>

            <div class='news__content'>
              <h3 class='news__title'>{{ item.title }}</h3>

              <div class='news__description'>{{ item.description }}</div>
            </div>
          </div>
        </div>
    </transition-group>


    <LazyObserver @alert='fetchNews' :options="{ rootMargin: '200px' }" />
  </div>
</template>

<script>
import WrapperWithFilter from '../components/slider/WrapperWithFilter'
import LazyObserver from '../components/LazyObserver'

export default {
  name: 'News',
  components: { LazyObserver, WrapperWithFilter },
  async asyncData({ $api }) {
    const [data] = await $api.news.getNewses(6)

    return { news: data }
  },
  data() {
    return {
      news: [],
      categories: [],
      category: '',
      lastId: '',
      filter: 'All'
    }
  },
  computed: {
    filteredNews() {
      return this.filter === 'All' ? this.news : this.news.filter(item => item.game.gameId === this.filter)
    }
  },
  mounted() {
  },
  methods: {
    async fetchNews() {
      const [next] = await this.$api.news.getNewses(6, this.news[this.news.length - 1].id)

      if (next?.length) {
        this.news.push(...next)
      }
    },
    changeFilter(filter) {
      this.filter = filter
    }
  }
}
</script>

<style lang='scss' scoped>

.slide-fade-enter-active {
  transition: all .6s ease;
}
.slide-fade-leave-active {
  transition: all .6s ease;
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.news {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;

  &__filter {
    margin-bottom: 0;
  }

  &__news-wrapper {
    flex: 0 0 25%;
    padding: 0 12px;
    margin-bottom: 24px;

    @media screen and (max-width: 1200px) {
      flex: 0 0 50%;
    }

    @media screen and (max-width: 580px) {
      flex: 0 0 100%;
    }

    &:nth-child(1), &:nth-child(2), &:nth-child(6n+1), &:nth-child(6n+2) {
      flex: 0 0 50%;

      @media screen and (max-width: 1200px) {
        flex: 0 0 100%;
      }

      .news__news {
        display: flex;
        flex-direction: row;
        height: 100%;

        @media screen and (max-width: 580px) {
          flex-direction: column;
        }
      }

      .news__image-container {
        flex: 0 0 208px;
      }

      .news__image {

      }

      .news__content {
        padding: 24px 60px 34px 34px;
      }

      .news__title {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 14px;

        @media screen and (max-width: 580px) {
          margin-bottom: 16px;
          font-size: 18px;
          line-height: 23px;
        }
      }

      .news__description {
        display: block;

        @media screen and (max-width: 580px) {
          display: block;
          font-size: 14px;
          line-height: 21px;
        }
      }
    }
  }

  &__news {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &__image-container {

  }

  &__image {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__content {
    flex: 1 1 auto;
    padding: 24px;
    display: flex;
    flex-direction: column;
    background: #10171F;
  }

  &__title {
    font-size: 17px;
    line-height: 27px;
    font-weight: 500;
    color: #F5F5F5;
    opacity: 0.88;
    flex: 1 1 auto;
    max-width: 100%;

    @media screen and (max-width: 580px) {
      margin-bottom: 16px;
      font-size: 18px;
      line-height: 23px;
    }
  }

  &__description {
    display: none;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #67707A;
    flex: 1 1 auto;

    @media screen and (max-width: 580px) {
      display: block;
      font-size: 14px;
      line-height: 21px;
    }
  }
}

.news {

  &__news-wrapper {

  }
}

</style>
