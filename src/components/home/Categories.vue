<template>
  <div class="categories flex flex-row justify-center py-10">
    <div v-for="category in categories" :key="category">
      <p
        @click="reloadArticles(category)"
        class="px-5 uppercase cursor-pointer"
      >
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
    },
  }
</script>

<style></style>
