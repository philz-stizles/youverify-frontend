<template>
  <div class="relative my-2">
    <input
      type="text"
      v-model="search"
      class="bg-purple-white shadow rounded border-0 p-3 pr-10"
      placeholder="Search news articles..."
    />
    <div class="absolute pin-r top-4 right-4 mr-4 text-purple-lighter">
      <SearchIcon
        @click="reloadArticles"
        class="w-5 h-5 text-dark cursor-pointer"
      />
    </div>
  </div>
</template>

<script>
  import { SearchIcon } from '@heroicons/vue/solid'

  export default {
    name: 'SearchInput',
    components: { SearchIcon },
    data() {
      return { search: '' }
    },
    methods: {
      reloadArticles() {
        console.log(this.search)
        this.$store.commit('setCategory', this.search)
        this.$store.dispatch('fetchNews')
      },
    },
  }
</script>

<style></style>
