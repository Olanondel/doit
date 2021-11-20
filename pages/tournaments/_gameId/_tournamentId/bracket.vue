<template>
  <div class='bracket'>

    <div class='bracket__column'>

      <div class='bracket__title'>Round 8</div>

      <div class='bracket__round'>

        <div class='bracket__round-content'>

          <div class='bracket__vs vs'>
            <div class='vs__team'>
              <div class='vs__title'>Walkower</div>
              <div class='vs__score'>6</div>
            </div>

            <div class='vs__team vs__team_active'>
              <div class='vs__title'>BF’s Squad</div>
              <div class='vs__score'>8</div>
            </div>
          </div>

          <div class='bracket__vs vs'>
            <div class='vs__team'>
              <div class='vs__title'>Walkower</div>
              <div class='vs__score'>6</div>
            </div>

            <div class='vs__team vs__team_active'>
              <div class='vs__title'>BF’s Squad</div>
              <div class='vs__score'>8</div>
            </div>
          </div>

        </div>

      </div>

      <div class='bracket__round'>

        <div class='bracket__round-content'>

          <div class='bracket__vs vs'>
            <div class='vs__team'>
              <div class='vs__title'>Walkower</div>
              <div class='vs__score'>6</div>
            </div>

            <div class='vs__team vs__team_active'>
              <div class='vs__title'>BF’s Squad</div>
              <div class='vs__score'>8</div>
            </div>
          </div>

          <div class='bracket__vs vs'>
            <div class='vs__team'>
              <div class='vs__title'>Walkower</div>
              <div class='vs__score'>6</div>
            </div>

            <div class='vs__team vs__team_active'>
              <div class='vs__title'>BF’s Squad</div>
              <div class='vs__score'>8</div>
            </div>
          </div>

        </div>

      </div>
    </div>

    <div class='bracket__column'>
      <div class='bracket__title bracket__title_center'>Semi-final</div>

      <div class='bracket__semi-final'>
        <div class='bracket__vs vs'>
          <div class='vs__team'>
            <div class='vs__title'>Walkower</div>
            <div class='vs__score'>6</div>
          </div>

          <div class='vs__team vs__team_active'>
            <div class='vs__title'>BF’s Squad</div>
            <div class='vs__score'>8</div>
          </div>
        </div>

        <div class='bracket__vs vs'>
          <div class='vs__team'>
            <div class='vs__title'>Walkower</div>
            <div class='vs__score'>6</div>
          </div>

          <div class='vs__team vs__team_active'>
            <div class='vs__title'>BF’s Squad</div>
            <div class='vs__score'>8</div>
          </div>
        </div>
      </div>
    </div>

    <div class='bracket__column'>
      <div class='bracket__title'>Final</div>

      <div class='bracket__final'>
        <div class='bracket__vs vs'>
          <div class='vs__team'>
            <div class='vs__title'>Walkower</div>
            <div class='vs__score'>6</div>
          </div>

          <div class='vs__team vs__team_active'>
            <div class='vs__title'>BF’s Squad</div>
            <div class='vs__score'>8</div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'bracket'
}
</script>

<style lang='scss' scoped>

.bracket {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  &__column {

   display: flex;
    flex-direction: column;
  }

  &__final {
    margin: auto 0;
  }

  &__semi-final {
    margin: auto 0;
  }

  &__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 26px;
  }

  &__round{
    position: relative;

    &:after {
      content: "";
      width: 58px;
      top: 38px;
      right: -10px;
      height: 92px;
      display: inline-block;
      position: absolute;
      background: url("@/assets/img/icons/tournaments/teams/arrows.png");
    }

    &:not(:last-child) {
      margin-bottom: 30px;
    }

    &-content {

    }
  }

  &__vs {
    margin-bottom: 14px;
    max-width: 162px;
  }
}

.vs {


  &__team {
    display: flex;
    border: 1px solid #20272E;
    height: 38px;
    align-items: center;

    &_active {
      border: 1px solid #2C95FF;

      .vs__title {
        color: #F5F5F5;
      }

      .vs__score {
        background: #2C95FF;
        color: #0F1215;
        font-weight: 500;
      }
    }
    &:nth-child(1) {
      border-radius: 2px 2px 0 0;
    }
    &:nth-child(2) {
      border-radius: 0 0 2px 2px;
    }
  }

  &__title {
    font-size: 14px;
    padding-left: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-block;
    flex: 1 1 auto;

    &:before {
      left: 0;
      content: "";
      display: inline-block;
      width: 14px;
      margin-right: 6px;
      height: 12px;
      background: url("@/assets/img/icons/tournaments/teams/country.svg") no-repeat center;
    }
  }

  &__score {
    font-size: 14px;
    line-height: 38px;
    text-align: center;
    flex: 0 0 38px;
    height: 100%;
    background: #20272E;
  }
}

</style>
