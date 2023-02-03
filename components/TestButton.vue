<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button @click="toggleDark()">Toggle Dark: {{ isDark }}</button>
</template>

<style lang="postcss" scoped></style>
