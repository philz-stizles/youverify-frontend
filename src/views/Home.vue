<template>
  <div class="home">
    <Categories />
    <div class="px-10 flex flex-row justify-between items-center">
      <SectionTitle title="TOP HEADLINES" />
      <SearchInput />
    </div>
    <ArticleList :articles="articles" />
  </div>
</template>

<script>
  // @ is an alias to /src
  // import axios from 'axios'
  import SectionTitle from '@/components/SectionTitle.vue'
  import ArticleList from '@/components/home/ArticleList.vue'
  import SearchInput from '@/components/SearchInput.vue'
  import Categories from '@/components/home/Categories.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Home',
    components: { SectionTitle, ArticleList, Categories, SearchInput },
    computed: {
      ...mapGetters([
        'articles',
        // ...
      ]),
    },
    mounted() {
      // Dispatch an action to fetch news
      this.$store.dispatch('fetchNews')
    },
  }
</script>
