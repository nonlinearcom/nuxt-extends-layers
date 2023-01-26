<template>
  <button
    :class="[
      {
        accent: props.accent,
        block: props.block,
        outline: props.outline,
        round: props.round,
      },
      props.size,
    ]"
    :disabled="props.disabled"
    :type="props.type"
  >
    <slot name="default" />
    <UiIcon
      v-if="props.icon"
      :class="{ circled: props.circled }"
      :name="props.icon"
      :size="props.size"
    />
  </button>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

type ButtonType = 'button' | 'reset' | 'submit' | undefined

const props = defineProps({
  accent: {
    default: false,
    type: Boolean,
  },
  block: {
    default: false,
    type: Boolean,
  },
  circled: {
    default: false,
    type: Boolean,
  },
  disabled: {
    default: false,
    type: Boolean,
  },
  icon: {
    type: String,
  },
  outline: {
    default: false,
    type: Boolean,
  },
  round: {
    default: false,
    type: Boolean,
  },
  size: {
    default: 'normal',
    type: String,
    validator: (s: string) => ['normal', 'small', 'mini'].includes(s),
  },
  type: {
    default: 'button',
    type: String as PropType<ButtonType>,
    validator: (s: string) => ['button', 'reset', 'submit'].includes(s),
  },
})
</script>

<style lang="postcss" scoped>
button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-family: var(--font);
  font-weight: var(--bold);
  color: currentColor;
  background-color: transparent;
  border: var(--border-width) solid transparent;
  border-radius: var(--border-width);
  cursor: pointer;
  transition: all 200ms ease-out;

  svg {
    transition: all 200ms ease-out;
  }
}

@media (hover) {
  button:hover {
    opacity: 0.5;
  }
}

button:disabled,
button[disabled] {
  opacity: 0.5 !important;
  cursor: not-allowed !important;
  pointer-events: none !important;
}

/* BLOCK */
button.block {
  display: flex;
  width: 100%;
}

/* ROUND */
button.round {
  border-radius: var(--ui-normal);
}

/* ACCENT */
button.accent {
  color: var(--white);
  background-color: var(--light-accent);
}
@media (hover) {
  button.accent:hover {
    background-color: var(--dark-gray);
    opacity: 1;
  }
}

/* OUTLINE */
button.outline {
  color: currentColor;
  background-color: transparent;
  border-color: currentColor;
}

/* SIZES */
button.normal {
  height: calc(var(--ui-normal) + calc(var(--border-width) * 2));
  padding: 0 12px;
  font-size: var(--text);
  &.round {
    padding: 0 18px;
  }
}
button.small {
  height: calc(var(--ui-small) + calc(var(--border-width) * 2));
  padding: 0 10px;
  font-size: var(--text);
  &.round {
    padding: 0 13px;
  }
}
button.mini {
  height: calc(var(--ui-mini) + calc(var(--border-width) * 2));
  padding: 0 8px;
  font-size: var(--text-small);
  &.round {
    padding: 0 9px;
  }
}
</style>
