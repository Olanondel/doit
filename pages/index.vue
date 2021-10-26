<template>
  <div class='content home'>

    <Greetings />

    <WrapperWithFilter title='Tournaments' :categories='categories'>
      <Slider :slides='tournaments' />
    </WrapperWithFilter>

    <WrapperWithFilter title='News' :categories='categories'>
      <Slider :slides='news' component='NewsCard' />
    </WrapperWithFilter>

    <WrapperWithFilter title='Games' :filter='false' :categories='categories'>
      <Slider :slides='games' component='GameCard' />
    </WrapperWithFilter>

  </div>
</template>
<script>
import Greetings from '../components/sections/Greetings'
import WrapperWithFilter from '../components/slider/WrapperWithFilter'
import Slider from '../components/slider/Slider'

export default {
  components: { Slider, WrapperWithFilter, Greetings },
  data() {
    return {
      categories: ['All', 'StarCraft II', 'Dota II', 'CS:GO', 'LOL', 'Fortnite'],
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
      games: [
        { image: require('@/assets/img/home/games/dota1.jpg'), text: 'Dota ||' },
        { image: require('@/assets/img/home/games/csgo.jpg'), text: 'CS:GO' },
        { image: require('@/assets/img/home/games/starcraft.jpg'), text: 'StarCraft ||' },
      ]
    }
  },
  methods: {}
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
