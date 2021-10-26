<template>
  <div class='prize-types'>
    <InputWithText v-model='cFirst' text='1st   place:' />
    <InputWithText v-model='cSecond' text='2nd place:' />
    <InputWithText v-model='cThird' text='3rd place:' />
    <InputWithText v-model='cFourth' text='4th place:' />
  </div>
</template>

<script>
import InputWithText from './InputWithText'
export default {
  name: 'PrizeTypes',
  components: { InputWithText },
  props: {
    first: { type: String, default: '' },
    second: { type: String, default: '' },
    third: { type: String, default: '' },
    fourth: { type: String, default: '' },
  },
  computed: {
    cFirst: {
      get() {
        return this.first
      },
      set(v) {
        this.$emit('update:first', v)
      }
    },

    cSecond: {
      get() {
        return this.second
      },
      set(v) {
        this.$emit('update:second', v)
      }
    },

    cThird: {
      get() {
        return this.third
      },
      set(v) {
        this.$emit('update:third', v)
      }
    },

    cFourth: {
      get() {
        return this.fourth
      },
      set(v) {
        this.$emit('update:fourth', v)
      }
    }
  }
}
</script>

<style scoped>

</style>
