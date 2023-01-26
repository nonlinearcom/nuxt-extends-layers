<script setup lang="ts">
const isOpen = ref(false),
  toggleOpen = useToggle(isOpen)
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div :class="['app-dropdown', { open: isOpen }]" @focusout="isOpen = false">
    <!-- @focusin="isOpen = true" -->
    <UiButton
      :aria-expanded="isOpen"
      aria-haspopup="true"
      icon="chevron-down"
      size="mini"
      v-bind="$attrs"
      @click="toggleOpen()"
    >
      <slot name="trigger" />
    </UiButton>
    <Transition name="dropdown">
      <ul class="uppercase" v-show="isOpen" @click="isOpen = false">
        <slot name="default" />
      </ul>
    </Transition>
  </div>
</template>

<style lang="postcss">
.app-dropdown {
  position: relative;
  &.open svg {
    transform: rotate(180deg);
  }

  button {
    font-weight: var(--regular);
  }

  ul {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 8px 0 0 0;
    padding: 0;
    list-style: none;
    justify-content: center;
    align-items: center;
    color: var(--color-text);
    background-color: var(--light-gray);
    border-radius: var(--border-width);

    li {
      position: relative;
      width: 100%;
      padding: 8px 0;
      text-align: center;
      transition: background-color 300ms ease-out;
    }
  }
}

@media (hover) {
  .app-dropdown ul li:hover {
    background-color: var(--light-accent);
  }
}
</style>
