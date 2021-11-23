<template>
  <div class='user-panel'>
    <h2 class='user-panel__title'>Premium</h2>

    <div class='categories'>
      <div class='categories__category-wrapper'>
        <div class='categories__category categories__category_free'>
          <h3 class='categories__title'>Free</h3>

          <div class='categories__price'>$ 0 per mounth</div>

          <p class='categories__content'>
            A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the
            bucketlad. Thanks for your company.
            A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the
            bucketlad. Thanks for your company.
          </p>
        </div>
      </div>

      <div class='categories__category-wrapper'>
        <div class='categories__category categories__category_pro'>
          <h3 class='categories__title'>Pro</h3>

          <div class='categories__price'>$4.99 per mounth</div>

          <p class='categories__content'>
            A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the
            bucketlad. Thanks for your company.
            A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the
            bucketlad. Thanks for your company.
          </p>

          <div v-if='profile.status !== "pro"' to class='categories__link' @click='getPremium("pro")'>Get</div>
        </div>
      </div>

      <div class='categories__category-wrapper'>
        <div class='categories__category categories__category_organizer'>
          <h3 class='categories__title'>Organizer</h3>

          <div class='categories__price'>$15 per mounth</div>

          <p class='categories__content'>
            A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.
            A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.
          </p>

          <div v-if='profile.status !== "organizer"' to class='categories__link'  @click='getPremium("organizer")'>Get</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'premium',
  components: {

  },
  props: {
  },
  async asyncData({ $api, $auth }) {
    return { profile: await $api.auth.getProfile($auth.user.localId)}
  },
  data() {
    return {
      profile: null
    }
  },
  methods: {
    async getPremium(premium) {
      const balance = this.profile.balance || 0

      if (premium === 'pro') {
        const price = 5 * 27

        if (balance > price) {
          this.$nuxt.$loading.start()
          await this.$api.auth.updateProfile(this.$auth.user.localId, {
            balance: balance - price,
            status: 'pro'
          })
          this.profile.balance = balance - price
          this.profile.status = 'pro'
          this.$nuxt.$loading.finish()
        } else {
          alert('Не достаточно средств на балансе!')
        }

      }

      if (premium === 'organizer') {
        const price = 15 * 27

        if (balance > price) {
          this.$nuxt.$loading.start()
          await this.$api.auth.updateProfile(this.$auth.user.localId, {
            balance: balance - price,
            status: 'organizer'
          })
          this.profile.balance = balance - price
          this.profile.status = 'organizer'
          this.$nuxt.$loading.finish()
        } else {
          alert('Не достаточно средств на балансе!')
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.categories {
  display: flex;
  margin: 0 -15px;
  margin-bottom: 138px;
  flex-wrap: wrap;

  &__category-wrapper {
    flex: 0 0 50%;
    padding: 0 15px;
    margin-bottom: 35px;

    @media screen and (max-width: 960px){
      flex: 0 0 100%;
    }
  }

  &__category {
    display: flex;
    height: 100%;
    align-items: flex-start;
    flex-direction: column;
    padding: 100px 22px 84px;

    @media screen and (max-width: 960px){
      padding: 60px 22px 44px;
    }

    &_free {
      background: radial-gradient(250.9% 252.09% at -142.43% -152.09%, rgba(20, 114, 255, 0.35) 0%, rgba(20, 114, 255, 0) 95.84%),
      linear-gradient(0deg, #181B1F, #181B1F);



      .categories__title {
        background-image: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    &_pro {
      background: radial-gradient(250.9% 252.09% at -142.43% -152.09%, rgba(245, 200, 31, 0.25) 0%, rgba(245, 200, 31, 0) 95.84%),
      linear-gradient(0deg, #181B1F, #181B1F);


      .categories__title {
        background: linear-gradient(180deg, #FFD321 0%, #9C6C0D 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: orangered;
      }

      .categories__link {
        background: linear-gradient(180deg, #FFD321 0%, #9C6C0D 100%);
      }
    }

    &_organizer {
      background: radial-gradient(242.43% 252.09% at -142.43% -152.09%, rgba(66, 232, 128, 0.3) 0%, rgba(66, 232, 128, 0) 84.9%),
      linear-gradient(0deg, #181B1F, #181B1F);

      .categories__title {
        background: linear-gradient(180deg, #46F48C 0%, #2B9D37 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: green;
      }

      .categories__link {
        background: linear-gradient(180deg, #46F48C 0%, #2B9D37 100%);
      }
    }
  }

  &__title {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 42px;
    line-height: 42px;
    margin-bottom: 42px;
  }

  &__price {
    font-size: 22px;
    line-height: 22px;
    color: #F5F5F5;
    opacity: 0.88;
    font-weight: 500;
    margin-bottom: 16px;
  }

  &__content {
    font-size: 14px;
    flex: 1 1 auto;
    line-height: 21px;
    color: #67707A;
    margin-bottom: 60px;
  }

  &__link {
    padding: 14px 38px;
    color: #F5F5F5;
    font-weight: 700;
    cursor: pointer;
    background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%), #095FE0;
  }
}
</style>
