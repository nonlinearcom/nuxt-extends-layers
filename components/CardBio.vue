<template>
  <figure>
    <NuxtLink
      v-if="props.url"
      class="stretched-link"
      :to="localePath(props.url)"
    />
    <div class="ratio__0-7">
      <img
        :src="`${useDirectusURL(props.image.id)}?height=600`"
        :alt="props.title"
        :height="props.image.height"
        :width="props.image.width"
        loading="lazy"
      />
    </div>
    <figcaption class="text-small">
      <strong>{{ props.title }}</strong>
      <span v-if="props.subtitle" class="text-mini uppercase">
        <br />{{ props.subtitle }}
      </span>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

const localePath = useLocalePath()
const props = defineProps({
  image: {
    required: true,
    type: Object as PropType<Image>,
  },
  subtitle: { type: String },
  title: { required: true, type: String },
  url: { type: String },
})
</script>

<style lang="postcss" scoped>
figure {
  position: relative;
  margin: 0;

  figcaption {
    margin: 12px 0;
    line-height: var(--text-height);
  }
}
</style>
