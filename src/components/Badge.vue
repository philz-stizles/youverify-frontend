<template>
  <span class="relative inline-block">
    <NewspaperIcon class="w-10 h-10 text-gray-200" />
    <span
      class="
        absolute
        top-0
        right-0
        px-2
        py-1
        text-xs
        font-bold
        leading-none
        text-red-100
        transform
        bg-gray-600
        rounded-full
      "
      >{{ count }}</span
    >
  </span>
</template>

<script>
  import { NewspaperIcon } from '@heroicons/vue/solid'
  export default {
    name: 'Badge',
    props: ['count'],
    components: { NewspaperIcon },
  }
</script>

<style></style>
