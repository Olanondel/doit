<template>
  <div class='tools__games games'>

    <div
      class='games__item'
      :class="{ 'games__item_active': currentFilter === 'All' }"
      @click='$emit("changeCurrentFilter", "All")'
    >All</div>

    <div
      class='games__item games__item_starcraft2'
      :class="{ 'games__item_active': currentFilter === '2qY3sFllNEDSWPX4EfJD' }"
      @click='$emit("changeCurrentFilter", "2qY3sFllNEDSWPX4EfJD")'
    ></div>

    <div
      class='games__item games__item_csgo'
      :class="{ 'games__item_active': currentFilter === '1kTwjy6hhBBciqOhPJMP' }"
      @click='$emit("changeCurrentFilter", "1kTwjy6hhBBciqOhPJMP")'
    ></div>

    <div
      class='games__item games__item_lol'
      :class="{ 'games__item_active': currentFilter === 'eZ79fJosNM7yjZsDPbvt' }"
      @click='$emit("changeCurrentFilter", "eZ79fJosNM7yjZsDPbvt")'
    ></div>

    <div
      class='games__item games__item_fortnite'
      :class="{ 'games__item_active': currentFilter === 'jncC7JU6geXRFSXHeQom' }"
      @click='$emit("changeCurrentFilter", "jncC7JU6geXRFSXHeQom")'
    ></div>

    <div
      class='games__item games__item_dota2'
      :class="{ 'games__item_active': currentFilter === 'whngAthyzDDKdCTYQHpP' }"
      @click='$emit("changeCurrentFilter", "whngAthyzDDKdCTYQHpP")'
    ></div>

  </div>
</template>

<script>
export default {
  name: 'GameFilter',
  props: {
    currentFilter: { type: String, default: 'All' }
  },

}
</script>

<style lang='scss' scoped>

.games {
  display: flex;
  gap: 0 8px;

  &__item {
    font-weight: 700;
    color: #f5f5f5;
    width: 44px;
    cursor: pointer;
    height: 44px;
    border: 2px solid #20252B;
    background-size: cover;
    opacity: .6;
    display: flex;
    justify-content: center;
    align-items: center;

    &_active {
      opacity: 1;
      border-color: #f5f5f5;
    }

    &_starcraft2 {
      background: transparent url("@/assets/img/icons/games/st2.png") no-repeat center;
    }

    &_dota2 {
      background: transparent url("@/assets/img/icons/games/dota2.svg") no-repeat center;
    }

    &_csgo {
      background: transparent url("@/assets/img/icons/games/csgo.png") no-repeat center;
    }

    &_lol {
      background: transparent url("@/assets/img/icons/games/lol.png") no-repeat center;
    }

    &_fortnite {
      background: transparent url("@/assets/img/icons/games/fortnite.png") no-repeat center;
    }
  }
}

</style>
