<template>
  <div class='tournaments'>
    <ul class='games tournaments__games'>
      <nuxt-link to='/tournaments/2qY3sFllNEDSWPX4EfJD' tag='li' class='games__item starcraft'>Starcraft ||</nuxt-link>
      <nuxt-link to='/tournaments/whngAthyzDDKdCTYQHpP' tag='li' class='games__item dota'>Dota ||</nuxt-link>
      <nuxt-link to='/tournaments/1kTwjy6hhBBciqOhPJMP' tag='li' class='games__item csgo'>CS:GO</nuxt-link>
      <nuxt-link to='/tournaments/eZ79fJosNM7yjZsDPbvt' tag='li' class='games__item lol'>League of Legends</nuxt-link>
      <nuxt-link to='/tournaments/jncC7JU6geXRFSXHeQom' tag='li' class='games__item fortnite'>Fortnite</nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang='scss' scoped>

.tournaments {
  display: flex;
  justify-content: center;
  align-items: center;
}

.games {
  margin-top: 40px;

  &__item {
    font-weight: 500;
    cursor: pointer;
    font-size: 24px;
    line-height: 32px;
    color: #F5F5F5;
    position: relative;
    padding-left: 60px;
    margin-bottom: 36px;

    &::before {
      content: "";
      position: absolute;
      display: inline-block;
      width: 48px;
      height: 48px;
      left: 0;
      top: -8px;

      background-position: center;
      background-repeat: no-repeat;
      background-color: transparent;
    }

    &:hover {
      color: #67707A;
      transition: .6s;
      transform: scale(1.1);
    }
  }

  .starcraft::before {
    background-image: url("../../assets/img/icons/games/st2.png");
  }

  .dota::before {
    background-image: url("../../assets/img/icons/games/dota2.png");
  }

  .csgo::before {
    background-image: url("../../assets/img/icons/games/csgo.png");
  }

  .lol::before {
    background-image: url("../../assets/img/icons/games/lol.png");
  }

  .fortnite::before {
    background-image: url("../../assets/img/icons/games/fortnite.png");
  }
}
</style>
