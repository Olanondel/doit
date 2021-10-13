<template>
  <div class='flex-slider'>

    <div class='flex-slider__filter-line filter-line'>
      <h2 class='section-title filter-line__title'>Tournaments</h2>

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

    <swiper v-if='filteredTournaments.length' class='flex-slider__content swiper' :options='swiperOptions'>

        <swiper-slide
          v-for='tournament in filteredTournaments'
          :key='tournament.image'
          class='flex-slider__card'
        >
          <div class='flex-slider__card-image-wrapper'>
            <img class='flex-slider__card-image' :src='tournament.image' alt='tournaments-image'>
          </div>

          <div class='flex-slider__card-title'>
            {{ tournament.title }}
          </div>

          <div class='flex-slider__card-info'>
            <div class='flex-slider__card-info-item'>
              <div class='flex-slider__card-info-item-title'>Start</div>
              <div class='flex-slider__card-info-item-content'>{{ tournament.info.start }}</div>
            </div>
            <div class='flex-slider__card-info-item'>
              <div class='flex-slider__card-info-item-title'>Mode</div>
              <div class='flex-slider__card-info-item-content'>{{ tournament.info.mode }}</div>
            </div>
            <div class='flex-slider__card-info-item'>
              <div class='flex-slider__card-info-item-title'>Slots</div>
              <div class='flex-slider__card-info-item-content'>{{ tournament.info.slots }}</div>
            </div>
            <div class='flex-slider__card-info-item'>
              <div class='flex-slider__card-info-item-title'>Pool</div>
              <div class='flex-slider__card-info-item-content'>{{ tournament.info.pool }}</div>
            </div>
          </div>
        </swiper-slide>

      <div slot="pagination" class='swiper-pagination'></div>

    </swiper>
  </div>
</template>

<script>

export default {
  name: 'TournamentsSlider',
  components: {},
  props: {},
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
      tournaments: [
        {
          game: 'Dota II',
          image: require('@/assets/img/home/tournaments/dota1.jpg'),
          title: 'Tournament’s name will be here, maybe, in two lines',
          info: { start: '07/06', mode: '5v5', slots: '16/30', pool: '$ 1500' }
        },
        {
          game: 'Dota II',
          image: require('@/assets/img/home/tournaments/dota2.jpg'),
          title: 'Fortnitity evolution X',
          info: { start: '07/06', mode: '5v5', slots: '16/30', pool: '$ 1500' }
        },
        {
          game: 'CS:GO',
          image: require('@/assets/img/home/tournaments/csgo.jpg'),
          title: 'CS:GO Mirageby tournament',
          info: { start: '07/06', mode: '5v5', slots: '16/30', pool: '$ 1500' }
        },
        {
          game: 'Dota II',
          image: require('@/assets/img/home/tournaments/dota1.jpg'),
          title: 'Tournament’s name will be here, maybe, in two lines',
          info: { start: '07/06', mode: '5v5', slots: '16/30', pool: '$ 1500' }
        },
        {
          game: 'Dota II',
          image: require('@/assets/img/home/tournaments/dota2.jpg'),
          title: 'Fortnitity evolution X',
          info: { start: '07/06', mode: '5v5', slots: '16/30', pool: '$ 1500' }
        },
        {
          game: 'CS:GO',
          image: require('@/assets/img/home/tournaments/csgo.jpg'),
          title: 'CS:GO Mirageby tournament',
          info: { start: '07/06', mode: '5v5', slots: '16/30', pool: '$ 1500' }
        },
        {
          game: 'Dota II',
          image: require('@/assets/img/home/tournaments/dota1.jpg'),
          title: 'Tournament’s name will be here, maybe, in two lines',
          info: { start: '07/06', mode: '5v5', slots: '16/30', pool: '$ 1500' }
        },
        {
          game: 'Dota II',
          image: require('@/assets/img/home/tournaments/dota2.jpg'),
          title: 'Fortnitity evolution X',
          info: { start: '07/06', mode: '5v5', slots: '16/30', pool: '$ 1500' }
        },
        {
          game: 'CS:GO',
          image: require('@/assets/img/home/tournaments/csgo.jpg'),
          title: 'CS:GO Mirageby tournament',
          info: { start: '07/06', mode: '5v5', slots: '16/30', pool: '$ 1500' }
        }
      ],
      categories: ['All', 'StarCraft II', 'Dota II', 'CS:GO', 'LOL', 'Fortnite'],
      currentCategory: 'All',
    }
  },
  computed: {
    filteredTournaments() {
      return this.currentCategory === 'All' ? this.tournaments : this.tournaments.filter(category => category.game === this.currentCategory)
    }
  }
}
</script>

<style lang='scss'>
.filter-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;

  &__title {
    margin-right: 15px;
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

.flex-slider {
  min-width: 0;

  &__content {
    padding-bottom: 28px;
  }

  &__card {
    border-radius: 2px;
    background: #151A1F;
    display: flex;
    flex-direction: column;
    height: auto;

    &-image-wrapper {
      margin-bottom: 30px;
    }

    &-image {
      max-width: 100%;
      width: 100%;
      height: auto;
    }

    &-title {
      font-size: 22px;
      line-height: 28px;
      color: #E6E8EB;
      font-weight: 500;
      margin-bottom: 30px;
      padding: 0 22px;
      flex: 1 0 auto;
    }

    &-info {
      display: flex;
      padding: 0 22px;
      justify-content: space-between;
      margin-bottom: 30px;
      flex-wrap: wrap;

      &-item {

        &:nth-child(3), &:nth-child(4) {
          .flex-slider__card-info-item-title {
            text-align: right;
          }
        }

        &-title {
          margin-bottom: 8px;
          font-size: 16px;
          line-height: 16px;
          color: #8996A3;
        }

        &-content {
          color: #DCE1E6;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
