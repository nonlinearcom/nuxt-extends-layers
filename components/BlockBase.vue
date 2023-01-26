<template>
  <section
    :class="['content-width', { center: props.center, divider: props.divider }]"
  >
    <header>
      <slot name="title">
        <h2 v-if="props.title">{{ props.title }}</h2>
      </slot>
      <slot name="description">
        <p v-if="props.description">{{ props.description }}</p>
      </slot>
      <UiLink v-if="props.url" cta :url="props.url">
        {{ props.cta ? props.cta : $t("cta") }}
      </UiLink>
    </header>
    <main>
      <slot name="default" />
    </main>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  center: { default: false, type: Boolean },
  cta: { type: String },
  description: { type: String },
  divider: { default: false, type: Boolean },
  title: { type: String },
  url: { type: String },
});
</script>

<style lang="postcss" scoped>
section {
  position: relative;
  padding: 40px 0;
  &.divider:before {
    content: "";
    position: absolute;
    display: block;
    top: -1px;
    left: 50%;
    width: 100vw;
    margin-left: -50vw;
    border-top: 1px solid var(--color-border);
  }

  header {
    max-width: 92%;
    margin-bottom: 40px;

    h2 {
      font-size: var(--title-h2);
    }

    p {
      margin-bottom: var(--app-margin);
    }
  }

  main {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}

@media screen and (min-width: 768px) {
  section header {
    max-width: max(64ch, 52%);
  }
  section.center header,
  section.center main {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
