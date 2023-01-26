<template>
  <Transition name="fadelay" appear>
    <div class="app-modal modal-backdrop" @click.self="closeModal">
      <UiButton class="close--modal" icon="cross" @click="closeModal" />
      <Transition :name="props.type" appear>
        <slot />
      </Transition>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const emit = defineEmits(['close'])
const props = defineProps({
  type: {
    default: 'slide-left',
    type: String,
    validator: (s: string) => ['center', 'slide-left'].includes(s),
  },
})
const isOpen = useState('is-modal-open')

function closeModal() {
  isOpen.value = false
  emit('close')
}
</script>

<style lang="postcss">
.modal-backdrop {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(17 17 17 / 0.5);
  cursor: pointer;

  .close--modal {
    position: absolute;
    top: var(--app-margin);
    right: var(--app-margin);
    cursor: pointer;
  }
}

.fadelay-enter-active,
.fadelay-leave-active {
  transition: background-color 200ms ease-out 200ms;
}
.fadelay-enter-from,
.fadelay-leave-to {
  background-color: rgba(17 17 17 / 0);
}
</style>
