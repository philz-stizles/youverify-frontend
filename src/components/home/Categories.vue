<template>
  <div class="categories flex flex-row justify-center py-10">
    <div v-for="category in categories" :key="category">
      <p
        @click="reloadArticles(category)"
        :class="
          selectedCategory === category
            ? 'uppercase cursor-pointer mx-5 rounded-full px-3 py-1 bg-gray-200'
            : 'uppercase cursor-pointer mx-5 px-3 py-1'
        "
      >
        <!-- class="bg-gray-200 px-3 py-1 uppercase cursor-pointer" -->

        {{ category }}
      </p>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'categories',
    data() {
      return {
        categories: [
          'general',
          'business',
          'entertainment',
          'health',
          'science',
          'sports',
          'technology',
        ],
      }
    },
    methods: {
      reloadArticles(category) {
        this.$store.commit('setCategory', category)
        this.$store.dispatch('fetchNews')
      },
    },
    computed: {
      ...mapGetters(['selectedCategory']),
      selectedCategory() {
        return this.$store.state.selectedCategory
      },
    },
  }
</script>

<style></style>
