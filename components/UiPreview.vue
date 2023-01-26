<template>
  <Transition name="fade">
    <img
      v-if="previewImage"
      :src="`${useDirectusURL(previewImage.id)}?height=280`"
      :alt="previewImage?.title"
      :height="previewImage.height"
      :width="previewImage.width"
      loading="lazy"
    />
  </Transition>
</template>

<script setup lang="ts">
const { x, y } = useMouse({ touch: false })
const previewImage = useState<Image | undefined>(
  'preview-image',
  () => undefined
)
const leftPos = computed(() => `${x.value + 12}px`),
  topPos = computed(() => `${y.value - 130}px`)
// )
</script>

<style lang="postcss" scoped>
img {
  position: absolute;
  top: v-bind(topPos);
  left: v-bind(leftPos);
	width: auto;
	max-height: 260px;
	z-index: 1000;
	pointer-events: none;
}
</style>
