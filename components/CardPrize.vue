<template>
  <article>
    <span class="text-small uppercase">{{ props.title }}</span>
    <h2>{{ props.value }}</h2>
  </article>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { required: true, type: String },
  value: { required: true, type: [Number, String] },
});
</script>

<style lang="postcss" scoped>
article {
  position: relative;
  display: flex;
  min-height: 280px;
  align-items: center;
  justify-content: center;
  padding: calc(var(--app-margin) + 12px) var(--app-margin) var(--app-margin);
  background-color: var(--white);
  outline: 1px solid var(--color-border);

  span {
    position: absolute;
    top: 20px;
    left: 20px;
    padding-right: 20px;
  }

  h2 {
    font-size: var(--title-h2);
  }
}
</style>
