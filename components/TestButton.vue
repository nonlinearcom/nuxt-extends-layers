<template>
  <button @click="toggleDark()">Toggle Dark: {{ isDark }}</button>
</template>
<script setup lang="ts">
// broken: automatic import
// broken: import { useDark, useToggle } from '@vueuse/core';
// broken:
import { useDark, useToggle } from '../node_modules/@vueuse/core';
// works: import { useDark, useToggle } from '@/node_modules/@vueuse/core';
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>