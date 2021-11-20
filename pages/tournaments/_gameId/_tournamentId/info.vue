<template>
  <div class='info'>
    <div class='info__row'>
      <div class='info__date'>Today, 05 oct 2019 at 19:45 CEST</div>

      <div class='info__item'>
        <div class='info__item-title info__item-title_game'>Game</div>
        <div class='info__item-content'>{{tournament.game.game.name}}</div>
      </div>

      <div class='info__item'>
        <div class='info__item-title info__item-title_prize'>Prize pool</div>
        <div class='info__item-content'>{{tournament.prizePool.pool || 0}} USD</div>
      </div>
    </div>

    <div class='info__row'>
      <div class='info__item'>
        <div class='info__item-title info__item-title_checkIn'>Check in time</div>
        <div class='info__item-content'>{{tournament.registration.checkinTime}}</div>
      </div>

      <div class='info__item'>
        <div class='info__item-title info__item-title_mode'>Mode</div>
        <div class='info__item-content'>{{tournament.game.mode}}</div>
      </div>

      <div class='info__item'>
        <div class='info__item-title info__item-title_veto'>VETO</div>
        <div class='info__item-content'>ABABA
          Start player with higher seed
        </div>
      </div>
    </div>

    <div class='info__row'>
      <div class='info__item'>
        <div class='info__item-title info__item-title_addReq'>Additional requirements</div>
        <div class='info__item-content'>
          <div>{{tournament.addRequirements.country}}</div>
          <div>At least {{tournament.addRequirements.minAge}} years old</div>
          <div
            v-for='(item, index) in accounts'
            :key='index'
          >{{item}}</div>
        </div>
      </div>

      <div class='info__item'>
        <div class='info__item-title info__item-title_lobby'>Lobby</div>
        <div class='info__item-content'>{{tournament.extra.lobby}}</div>
      </div>

      <div class='info__button'>MORE RULES</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info',
  props: {
    tournament: { type: Object, default: () => ({  }) }
  },
  computed: {
    accounts() {
      const accounts = []

      for (const key in this.tournament.addRequirements.accounts) {
        if (this.tournament.addRequirements.accounts[key]) {
          accounts.push(key)
        }
      }

      return accounts
    }
  }
}
</script>

<style lang='scss' scoped>

.info {


  &__row {
    display: flex;
    margin-bottom: 30px;
    gap: 40px;
  }

  &__date {
    flex: 0 0 30%;
    font-size: 16px;
    line-height: 24px;
    color: #67707A;
  }

  &__item {
    flex: 0 0 30%;
    max-width: 244px;

    &-title {
      font-weight: 700;
      color: #fff;
      font-size: 16px;
      line-height: 16px;
      margin-bottom: 9px;
      padding-left: 25px;
      position: relative;

      &::before {
        position: absolute;
        top: -1px;
        left: 0;
        content: "";
        display: inline-block;
        width: 17px;
        height: 16px;
      }

      &_game {
        &::before {
          background: transparent url("@/assets/img/icons/tournaments/info/game.svg") no-repeat center;
        }
      }

      &_prize {
        &::before {
          background: transparent url("@/assets/img/icons/tournaments/info/prize.svg") no-repeat center;
        }
      }

      &_checkIn {
        &::before {
          background: transparent url("@/assets/img/icons/tournaments/info/checkIn.svg") no-repeat center;
        }
      }

      &_mode {
        &::before {
          background: transparent url("@/assets/img/icons/tournaments/info/mode.svg") no-repeat center;
        }
      }

      &_veto {
        &::before {
          background: transparent url("@/assets/img/icons/tournaments/info/veto.svg") no-repeat center;
        }
      }

      &_addReq {
        &::before {
          background: transparent url("@/assets/img/icons/tournaments/info/addReq.svg") no-repeat center;
        }
      }

      &_lobby {
        &::before {
          background: transparent url("@/assets/img/icons/tournaments/info/lobby.svg") no-repeat center;
        }
      }
    }

    &-content {
      color: #67707A;
      font-size: 16px;
      line-height: 24px;
    }
  }

  &__button {
    color: #fff;
    font-size: 12px;
    line-height: 12px;
    padding: 12px 22px;
    background: #1A222D;
    cursor: pointer;
    max-width: max-content;
    max-height: 36px;
    flex: 0 0 30%;
  }
}

</style>
