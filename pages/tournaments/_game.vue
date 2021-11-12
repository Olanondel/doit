<template>
  <div class='tournaments'>

    <div class='tournaments__headers'>
      <div class='tournaments__title'>DOTA II: TOURNAMENTS</div>

      <div
        class='tournaments__game'
        :style="{ backgroundImage: 'url(' + require('@/assets/img/common/dota.png') + ')' }"
      ></div>
    </div>

    <div class='tournaments__content'>

      <div class='tournaments__list'>

        <transition-group name='tournaments'>
          <Tournament
            v-for='(item, index) in currentChunk'
            :key='index'
            class='tournaments__item'
          />
        </transition-group>

        <Pagination
          v-if='pagesCount > 1'
          :pages-count='pagesCount'
          :current-page='currentPagination'
          @changePage='changeCurrentPagination'
        />

      </div>

      <div  ref='filters' class='filters'>
        <div class='filters__header'>
          <h2 class='filters__title'>Filters</h2>
          <div class='filters__clear' @click='clearFilters'>Clear</div>
        </div>
        <div class='filters__header-mobile'>
          <h2 class='filters__title-mobile' @click='toggleAccordeon'>Filters</h2>
          <div v-if='filters' class='filters__current-filters-mobile'>

            <div
              v-for='item in modeFilter'
              :key='item'
              class='filters__filter-item-mobile'
            >
              {{item}}
              <div class='filters__filter-item-remove-mobile'></div>
            </div>

            <div
              v-for='item in statusFilter'
              :key='item'
              class='filters__filter-item-mobile'
            >
              {{item}}
              <div class='filters__filter-item-remove-mobile'></div>
            </div>

            <div
              v-for='item in platformFilter'
              :key='item'
              class='filters__filter-item-mobile'
            >
              {{item}}
              <div class='filters__filter-item-remove-mobile'></div>
            </div>

            <div
              v-for='item in serverRegionFilter'
              :key='item'
              class='filters__filter-item-mobile'
            >
              {{item}}
              <div class='filters__filter-item-remove-mobile'></div>
            </div>

            <div class='filters__clear-mobile' @click='clearFilters'>Clear</div>
          </div>
        </div>

        <div ref='accordeon' class='filters__accordeon'>

          <GameModeFilter v-model='modeFilter' />

          <StatusFilter v-model='statusFilter' />

          <PlatformFilter v-model='platformFilter' />

          <ServerRegionFilter v-model='serverRegionFilter' />

        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Tournament from '../../components/tournaments/Tournament'
import StatusFilter from '../../components/tournaments/filters/StatusFilter'
import GameModeFilter from '../../components/tournaments/filters/GameModeFilter'
import ServerRegionFilter from '../../components/tournaments/filters/ServerRegionFilter'
import PlatformFilter from '../../components/tournaments/filters/PlatformFilter'
import Pagination from '../../components/Pagination'

export default {
  name: 'GameTournaments',
  components: { Pagination, PlatformFilter, ServerRegionFilter, GameModeFilter, StatusFilter, Tournament },
  data() {
    return {
      tournaments: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ],
      currentPagination: 0,

      modeFilter: [],
      statusFilter: [],
      platformFilter: [],
      serverRegionFilter: []
    }
  },
  computed: {
    filters() {
      return this.modeFilter.length || this.statusFilter.length || this.platformFilter.length || this.serverRegionFilter.length || null
    },
    pagesCount() {
      return Math.ceil(this.tournaments.length / 10)
    },
    currentChunk() {
      const start = this.currentPagination * 10
      const end = start + 10

      return this.tournaments.slice(start, end)
    }
  },
  methods: {
    clearFilters() {
      this.modeFilter = this.statusFilter = this.platformFilter = this.serverRegionFilter = []
    },
    toggleAccordeon() {
      if (this.$refs.accordeon.style.maxHeight) {
        this.$refs.accordeon.style.maxHeight = null
      } else {
        this.$refs.accordeon.style.maxHeight = this.$refs.accordeon.scrollHeight + 'px'
      }
    },
    changeCurrentPagination(current) {
      this.currentPagination = current
    }
  },
}
</script>

<style lang='scss' scoped>

.tournaments-enter-active, .tournaments-leave-active {
  transition: all .6s;
}
.tournaments-enter, .tournaments-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.tournaments {
  &__headers {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    @media screen and (max-width: 960px) {
      justify-content: flex-start;
      flex-direction: column;
    }
  }

  &__title {
    font-weight: 700;
    color: #F5F5F5;
    font-size: 34px;
    line-height: 56px;

    @media screen and (max-width: 960px) {
      order: 2;
      margin-bottom: 18px;
    }
  }

  &__game {
    max-width: 250px;
    width: 100%;
    max-height: 50px;
    height: 50px;
    background-position: center;
    background-size: contain;

    @media screen and (max-width: 960px) {
      order: 1;
      margin-bottom: 22px;
    }
  }

  &__content {
    display: flex;
    gap: 30px;

    @media screen and (max-width: 960px) {
      gap: 0;
      flex-direction: column;
    }
  }

  &__list {

    @media screen and (max-width: 960px) {
      order: 2
    }

  }
  &__filters {

    @media screen and (max-width: 960px) {
      order: 1;
      margin-bottom: 30px;
    }
  }

  &__item {
      margin-bottom: 16px;
  }

  &__image {

  }

  &__list {
    flex: 1 1 auto;
  }

  &__filters {
    flex: 0 0 261px;
  }
}

.filters {
  padding: 24px 30px;
  border: 2px solid #20252B;

  @media screen and (max-width: 960px) {
    margin-bottom: 30px;
    border: none;
    padding-bottom: 0;
    padding-top: 0;
  }

  &_active {


  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 15px;
    margin-bottom: 46px;

    @media screen and (max-width: 960px) {
      display: none;
    }
  }
  &__title {
    font-weight: 500;
    font-size: 32px;
    line-height: 32px;
    color: #F5F5F5;
  }
  &__clear {
    font-size: 16px;
    line-height: 24px;
    color: #B83333;
    cursor: pointer;
  }

  &__header-mobile {
    margin-bottom: 20px;
    display: none;

    @media screen and (max-width: 960px) {
      display: block;
    }
  }
  &__title-mobile {
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    color: #F5F5F5;
    position: relative;
    cursor: pointer;
    margin-bottom: 12px;

    &::after {
      content: "";
      display: inline-block;
      width: 12px;
      height: 7px;
      top: 8px;
      left: 72px;
      position: absolute;
      background: transparent url("@/assets/img/icons/tournaments/arrow-to-bottom.svg") no-repeat center;
    }

    &_active {
      background: transparent url("@/assets/img/icons/tournaments/arrow-to-top.svg") no-repeat center;
    }
  }
  &__current-filters-mobile {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  &__filter-item-mobile {
    padding: 17px 38px 17px 18px;
    background: #141A24;
    color: #0A68F5;
    font-size: 12px;
    line-height: 12px;
    position: relative;
    text-transform: uppercase;
  }
  &__filter-item-remove-mobile {
    position: absolute;
    width: 8px;
    height: 14px;
    top: 16px;
    cursor: pointer;
    right: 16px;
    background: transparent url("@/assets/img/icons/tournaments/x.svg") no-repeat center;
  }
  &__clear-mobile {
    color: #B83333;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 12px;
    padding: 17px 18px;
    cursor: pointer;
  }

  &__accordeon {
    overflow: hidden;
    max-height: max-content;
    transition: max-height .4s ease-out;

    @media screen and (max-width: 960px) {
      max-height: 0;
    }
  }

  &__category {
    margin-bottom: 28px;
  }

  &__category-title {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    color: #F5F5F5;
  }
}

</style>
