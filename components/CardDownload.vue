<template>
  <article>
    <a :href="useDirectusURL(props.url)" class="stretched-link" />
    <h3>{{ $t(props.title) }}</h3>
    <p v-if="props.description" class="text-mini">
      {{ props.description }}
    </p>
    <UiIcon name="download" />
  </article>
</template>

<script setup lang="ts">
const props = defineProps({
  description: { type: String },
  title: { required: true, type: String },
  url: { required: true, type: String },
})
</script>

<style lang="postcss" scoped>
article {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 320px;
  padding: 20px;
  outline: 1px solid var(--color-border);
  transition: all 300ms ease-out;

  h3 {
    margin-top: 12px;
    font-size: var(--text-large);
  }

  .app-icon {
    margin-top: auto;
    color: var(--light-gray);
  }
}

@media (hover) {
  article:hover {
    background: var(--offwhite);
    box-shadow: 0 0 20px rgba(17, 17, 17, 0.25);
  }
}

@media screen and (min-width: 768px) {
  article {
    min-height: 360px;

    h3 {
      font-size: var(--title-h3);
    }
  }
}

@media screen and (min-width: 1024px) {
  article {
    min-height: 400px;
  }
}
</style>
