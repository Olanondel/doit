<template>
  <div class='content home'>

    <Greetings />

    <WrapperWithFilter title='Tournaments' :categories='categories' :current-category='tournamentFilter' @changeCategory='changeTournamentFilter'>
      <Slider :slides='tournaments' :game-id='tournamentFilter' />
    </WrapperWithFilter>

    <WrapperWithFilter title='News' :categories='categories' :current-category='newsFilter' @changeCategory='changeNewsFilter'>
      <Slider :slides='news' news component='NewsCard' :game-id='newsFilter' />
    </WrapperWithFilter>

    <WrapperWithFilter streams title='Streams' :filter='false' :categories='categories'>
      <StreamsSlider :slides='streams' />
    </WrapperWithFilter>

    <Partners />

    <WrapperWithFilter title='Games' :filter='false' :categories='categories'>
      <Slider :slides='games' component='GameCard' />
    </WrapperWithFilter>

  </div>
</template>
<script>
import Greetings from '../components/sections/Greetings'
import WrapperWithFilter from '../components/slider/WrapperWithFilter'
import Slider from '../components/slider/Slider'
import Partners from '../components/sections/Partners'
import StreamsSlider from '../components/slider/StreamsSlider'

export default {
  components: { StreamsSlider, Partners, Slider, WrapperWithFilter, Greetings },
  layout: 'home',
  async asyncData({ $api }) {
    const tournaments = await $api.general.get('tournaments')

    return { tournaments }
  },
  data() {
    return {
      categories: ['All', 'StarCraft II', 'Dota II', 'CS:GO', 'LOL', 'Fortnite'],
      tournaments: [],
      news: [],
      streams: [
        { image: require('@/assets/img/home/streams/bg1.jpg') },
        { image: require('@/assets/img/home/streams/bg2.jpg') },
        { image: require('@/assets/img/home/streams/bg3.jpg') },
        { image: require('@/assets/img/home/streams/bg4.jpg') },
        { image: require('@/assets/img/home/streams/bg5.jpg') },
        { image: require('@/assets/img/home/streams/bg6.jpg') },
        { image: require('@/assets/img/home/streams/bg1.jpg') },
        { image: require('@/assets/img/home/streams/bg2.jpg') },
        { image: require('@/assets/img/home/streams/bg3.jpg') },
        { image: require('@/assets/img/home/streams/bg4.jpg') },
        { image: require('@/assets/img/home/streams/bg5.jpg') },
        { image: require('@/assets/img/home/streams/bg6.jpg') },
        { image: require('@/assets/img/home/streams/bg1.jpg') },
        { image: require('@/assets/img/home/streams/bg2.jpg') },
        { image: require('@/assets/img/home/streams/bg3.jpg') },
      ],
      games: [],

      tournamentFilter: 'All',
      newsFilter: 'All',
    }
  },
  async mounted() {
    this.news = await this.$api.general.get('news')
    this.games = await this.$api.general.get('games')
  },
  methods: {
    changeTournamentFilter(filter) {
      this.tournamentFilter = filter
    },
    changeNewsFilter(filter) {
      this.newsFilter = filter
    },
  }
}
</script>
<style lang='scss' scoped>
.home {
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  &__slider {
    margin-bottom: 160px;
  }
}


</style>
