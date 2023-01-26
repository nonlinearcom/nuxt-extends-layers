<script setup lang="ts">
const localePath = useLocalePath()
const props = defineProps({
  deadline: { required: true, type: String },
  free: { default: false, type: Boolean },
  inverted: { default: false, type: Boolean },
  prize: { required: true, type: String },
  url: { required: true, type: String },
})
</script>

<template>
  <section :class="{ inverted: props.inverted }">
    <div class="competition-join">
      <span v-if="props.free" class="text-mini uppercase">
        {{ $t('free-admission') }}
      </span>
      <UiLink circled cta :url="props.url">
        <template v-if="props.free">{{ $t('apply-now') }}</template>
        <template v-else>{{ $t('join') }}</template>
      </UiLink>
    </div>
    <div class="competition-specs">
      <div>
        <span class="text-mini uppercase">Prizes</span>
        <strong>{{ props.prize }}</strong>
      </div>
      <div>
        <span class="text-mini uppercase">Deadline</span>
        <strong>{{ useDate(props.deadline) }}</strong>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
section {
  display: flex;
  flex-direction: column;
  width: 100%;
  &.inverted > * {
    color: var(--white);
    background-color: var(--dark-gray);
  }

  & > * {
    padding: 20px !important;
    color: var(--color-text);
    background-color: var(--white);
  }

  .competition-join {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin: 28px var(--app-margin) var(--app-margin);
    border-radius: 0 !important;

    .app-link {
      opacity: 1;
    }
  }

  .competition-specs {
    display: inline-flex;

    div {
      flex: 1 0 50%;

      span,
      strong {
        display: block;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  section {
    flex-direction: row;

    & > * {
      flex-grow: 1;
    }

    .competition-join {
      align-self: stretch;
      justify-content: flex-end;
      height: auto !important;
      margin: 0;
      order: 1;
    }
  }
}
</style>
