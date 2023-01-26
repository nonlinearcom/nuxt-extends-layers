<template>
  <article>
    <div class="accordion__title" @click="toggleAccordion()">
      <slot name="title">
        <h4 v-if="props.title">{{ props.title }}</h4>
      </slot>
      <UiButton :icon="isOpen ? 'minus' : 'plus'" size="small" />
    </div>
    <Transition
      name="expand"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <div class="accordion__body" v-show="isOpen">
        <slot name="default">
          <div v-if="props.description" v-html="props.description" />
        </slot>
      </div>
    </Transition>
  </article>
</template>

<script setup lang="ts">
const props = defineProps({
  description: { type: String },
  title: { type: String },
})
const isOpen = ref(false),
  toggleAccordion = useToggle(isOpen)
const enter = (element: HTMLElement) => {
    element.style.height = 'auto'
    const height = getComputedStyle(element).height

    element.style.height = '0'
    getComputedStyle(element).height

    requestAnimationFrame(() => {
      element.style.height = height
    })
  },
  afterEnter = (element: HTMLElement) => {
    element.style.height = 'auto'
  },
  leave = (element: HTMLElement) => {
    const height = getComputedStyle(element).height

    element.style.height = height
    getComputedStyle(element).height

    requestAnimationFrame(() => {
      element.style.height = '0'
    })
  }
</script>

<style lang="postcss">
.accordion__title {
  display: flex;
  align-items: baseline;
  border-top: 1px solid var(--color-border);
  cursor: pointer;

  h4 {
    max-width: 64ch;
  }

  button {
    margin-left: auto;
    flex-shrink: 0;
    transform: translateY(11px);
  }
}

.accordion__body > * {
  margin: 12px 0 var(--app-margin);
}

@media screen and (min-width: 768px) {
  .accordion__body {
    max-width: calc(100% - 60px);
  }
}
</style>
