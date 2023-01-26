<template>
  <component
    :is="icons.find((i) => i.file === props.name)?.name"
    :class="[props.size, 'app-icon', { circled: props.circled }]"
    :style="{ 'stroke-width': strokeWidth() }"
  />
</template>

<script setup lang="ts">
import Account from '@/assets/icons/account.svg?component'
import ArrowUp from '@/assets/icons/arrow-up.svg?component'
import ChevronDown from '@/assets/icons/chevron-down.svg?component'
import ChevronRight from '@/assets/icons/chevron-right.svg?component'
import Cross from '@/assets/icons/cross.svg?component'
import Download from '@/assets/icons/download.svg?component'
import External from '@/assets/icons/external.svg?component'
import Facebook from '@/assets/icons/facebook.svg?component'
import Instagram from '@/assets/icons/instagram.svg?component'
import LinkedIn from '@/assets/icons/linkedin.svg?component'
import Menu from '@/assets/icons/menu.svg?component'
import Minus from '@/assets/icons/minus.svg?component'
import Plus from '@/assets/icons/plus.svg?component'
import YouTube from '@/assets/icons/youtube.svg?component'

const props = defineProps({
  circled: { default: false, type: Boolean },
  name: { required: true, type: String },
  size: {
    default: 'normal',
    type: String,
    validator: (s: string) => ['normal', 'small', 'mini'].includes(s),
  },
})
const icons = [
  { name: Account, file: 'account' },
  { name: ArrowUp, file: 'arrow-up' },
  { name: ChevronDown, file: 'chevron-down' },
  { name: ChevronRight, file: 'chevron-right' },
  { name: Cross, file: 'cross' },
  { name: Download, file: 'download' },
  { name: External, file: 'external' },
  { name: Facebook, file: 'facebook' },
  { name: Instagram, file: 'instagram' },
  { name: LinkedIn, file: 'linkedin' },
  { name: Menu, file: 'menu' },
  { name: Minus, file: 'minus' },
  { name: Plus, file: 'plus' },
  { name: YouTube, file: 'youtube' },
]
const strokeWidth = () => {
  if (props.size === 'mini') return '6px'
  else if (props.size === 'small') return '2.4px'
  else return '2px'
}
</script>

<style lang="postcss" scoped>
svg {
  padding: 4px;
  &.normal {
    max-width: var(--ui-normal);
    max-height: var(--ui-normal);
  }
  &.small {
    max-width: var(--ui-small);
    max-height: var(--ui-small);
  }
  &.mini {
    max-width: var(--ui-mini);
    max-height: var(--ui-mini);
  }
}

svg.circled {
  margin-left: 8px;
  background-color: var(--light-gray);
  border-radius: var(--ui-normal);
}
</style>
