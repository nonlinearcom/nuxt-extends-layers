<template>
  <NuxtLink
    v-if="isInternal(props.url)"
    :class="['app-link', { cta: props.cta }]"
    :to="localePath(props.url)"
  >
    <slot name="default" />
    <UiIcon
      v-if="props.cta"
      :circled="props.circled"
      name="chevron-right"
      :size="props.circled ? 'mini' : 'small'"
    />
  </NuxtLink>
  <a
    v-else
    :class="['external app-link', { cta: props.cta }]"
    :href="props.url"
    target="_blank"
  >
    <slot name="default" />
    <UiIcon
      v-if="props.cta"
      :circled="props.circled"
      name="chevron-right"
      size="small"
    />
  </a>
</template>

<script lang="ts" setup>
const localePath = useLocalePath();
const props = defineProps({
  circled: { default: false, type: Boolean },
  cta: { default: false, type: Boolean },
  url: { required: true, type: String },
});
</script>

<style lang="postcss">
.app-link {
  display: inline-flex;
  align-items: center;
  color: currentColor;
  font-weight: var(--bold);
  opacity: 0.6;
  transition: opacity 200ms ease-out;

  .app-icon {
    margin-left: 6px;
    transition: transform 200ms ease-in-out;
  }
}

@media (hover) {
  .app-link:hover {
    opacity: 1;

    &.cta .app-icon {
      transform: translateX(12px);
    }
  }
  .app-link.external:hover {
    color: var(--accent);
  }
}
</style>
