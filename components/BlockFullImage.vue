<template>
  <section class="full-width overlay">
    <slot name="default" />
    <img
      :src="`${useDirectusURL(props.image.id)}?width=1920`"
      :alt="props.image?.title"
      :height="props.image.height"
      :width="props.image.width"
      loading="lazy"
    />
  </section>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
  image: {
    required: true,
    type: Object as PropType<Image>,
  },
})
</script>

<style lang="postcss" scoped>
section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 600px;
  color: var(--white);

  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
  }
}
</style>
