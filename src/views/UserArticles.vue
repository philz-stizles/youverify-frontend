<template>
  <UserArticleList :articles="userArticles" />
</template>

<script>
  import { mapGetters } from 'vuex'
  import UserArticleList from '@/components/user/UserArticleList.vue'

  export default {
    name: 'UserArticles',
    components: { UserArticleList },
    data() {
      return {
        articles: [],
      }
    },
    computed: {
      ...mapGetters([
        'userArticles',
        // ...
      ]),
    },
    mounted() {
      this.$store.dispatch('loadUserArticles')
    },
  }
</script>

<style></style>
