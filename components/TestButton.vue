<template>
  <button @click="toggleDark()">Toggle Dark: {{ isDark }}</button>
</template>
<script setup lang="ts">
import { useDark, useToggle } from '../node_modules/@vueuse/core';
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>