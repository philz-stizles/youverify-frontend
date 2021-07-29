<template>
  <button
    class="rounded-full px-2 py-2 bg-gray-600 bg-opacity-40 shadow-xl"
    @click="click"
  >
    <BookmarkIcon class="h-5 w-5 text-gray-50" />
  </button>
</template>

<script>
  import { BookmarkIcon } from '@heroicons/vue/solid'

  export default {
    name: 'IconButton',
    components: { BookmarkIcon },
    methods: {
      click() {
        this.$emit('buttonClick')
      },
    },
  }
</script>

<style></style>
