<template>
  <div class='prize-types'>
    <InputWithText v-model='type1' text='Ro8' />
    <InputWithText v-model='type2' text='Ro16' />
    <InputWithText v-model='type3' text='Ro32' />
    <InputWithText v-model='type4' text='Ro64' />
    <InputWithText v-model='type5' text='Ro126' />
    <InputWithText v-model='type6' text='Ro256' />
    <InputWithText v-model='type7' text='Ro512' />
  </div>
</template>

<script>
import InputWithText from './InputWithText'

export default {
  name: 'PrizeRounds',
  components: { InputWithText },
  props: {
    Ro8: { type: String, default: '' },
    Ro16: { type: String, default: '' },
    Ro32: { type: String, default: '' },
    Ro64: { type: String, default: '' },
    Ro128: { type: String, default: '' },
    Ro256: { type: String, default: '' },
    Ro512: { type: String, default: '' },
  },
  methods: {},
  computed: {
    type1: {
      get() {
        return this.Ro8
      },
      set(v) {
        this.$emit('update:Ro8', v)
      }
    },
    type2: {
      get() {
        return this.Ro16
      },
      set(v) {
        this.$emit('update:Ro16', v)
      }
    },
    type3: {
      get() {
        return this.Ro32
      },
      set(v) {
        this.$emit('update:Ro32', v)
      }
    },
    type4: {
      get() {
        return this.Ro64
      },
      set(v) {
        this.$emit('update:Ro64', v)
      }
    },
    type5: {
      get() {
        return this.Ro128
      },
      set(v) {
        this.$emit('update:Ro128', v)
      }
    },
    type6: {
      get() {
        return this.Ro256
      },
      set(v) {
        this.$emit('update:Ro256', v)
      }
    },
    type7: {
      get() {
        return this.Ro512
      },
      set(v) {
        this.$emit('update:Ro512', v)
      }
    }
  }
}
</script>

<style scoped>

</style>
