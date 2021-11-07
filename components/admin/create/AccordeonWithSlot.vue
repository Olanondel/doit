<template>
  <div ref='accordionSection' class='create-block'>
    <!--    Header    -->
    <div class='create-block__header' @click='toggleAccordion'>
      <h3 class='create-block__title'>{{ title }}</h3>

      <div class='create-block__icon'></div>
    </div>

    <!--    Content    -->
    <div ref='accordionContent' class='create-block__content'>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordeonWithSlot',
  props: {
    title: { type: String, default: '' }
  },
  data() {
    return {

    }
  },
  methods: {
    toggleAccordion() {
      const accordionContent = this.$refs.accordionContent
      const accordionSection = this.$refs.accordionSection

      accordionSection.classList.toggle('create-block__active')

      if ( accordionContent.style.maxHeight ) {
        accordionContent.style.maxHeight = null
      } else {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'

      }
    },
    resize() {
      const accordionContent = this.$refs.accordionContent

      accordionContent.style.maxHeight = accordionContent.scrollHeight + accordionContent.offsetHeight + 'px'
    },
    toggleOverflow() {
      const accordionContent = this.$refs.accordionContent

      accordionContent.classList.toggle('toggleOverflow')
    }
  }
}
</script>

<style lang='scss' scoped>
.create-block {
  border: 1px solid #20252B;
  padding: 0 30px;
  color: #CCCDCD;
  margin-bottom: 22px;

  &__header {
    font-weight: 500;
    font-size: 22px;
    line-height: 22px;
    color: #CCCDCD;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding: 31px 0;
  }

  &__title {

  }

  &__icon {
    width: 24px;
    height: 24px;
    display: inline-block;
    background: transparent url("@/assets/img/icons/admin/create/plus.svg") no-repeat center;
  }

  // Content
  &__content {
    overflow: hidden;
    max-height: 0;
    transition: all 0.4s ease-out;
  }
}

.create-block__active {

  .create-block__content {
    overflow: visible;
    margin-bottom: 44px;
  }

  .create-block__icon {
    background: transparent url("@/assets/img/icons/admin/create/minus.svg") no-repeat center;
  }
}

.toggleOverflow {
  overflow: visible !important;
}
</style>
