<template>
  <nav
    class="relative main-nav flex flex-row justify-center text-white"
    id="nav"
  >
    <router-link
      class="font-bold uppercase text-2xl"
      :to="{ name: 'Home' }"
      exact
      >Youverify NewsFeed</router-link
    >
    <router-link
      class="font-extrabold absolute right-20"
      :to="{ name: 'UserArticles' }"
      exact
    >
      <Badge :count="userArticlesCount" />
      <!-- Saved Feeds
      <span
        style="padding-top: 0.1em; padding-bottom: 0.1rem"
        class="text-xs px-2 bg-gray-200 text-gray-800 rounded-full"
      >
        1
      </span> -->
    </router-link>
  </nav>
</template>

<script>
  import Badge from '@/components/Badge.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'NavBar',
    components: { Badge },
    data() {
      return {
        title: 'My App',
      }
    },
    computed: {
      ...mapGetters([
        'userArticlesCount',
        // ...
      ]),
    },
    methods: {
      logOut() {
        // dispatch logout request to global actions
        this.$store.dispatch('logOut')
      },
    },
    mounted() {
      this.$store.dispatch('loadUserArticles')
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* .main-nav {
    text-align: center;
    margin: 0 auto;
    padding: 40px 0;
  }
  .main-nav a {
    display: inline-block;
    text-decoration: none;
    margin: 0 10px;
    color: #999;
    font-size: 1.4rem;
  }
  .main-nav button {
    display: inline-block;
    margin: 0 10px;
  }
  a.router-link-active {
    border-bottom: 2px solid #00ce89;
    padding-bottom: 4px;
  } */

  #nav {
    padding: 30px;
    background: #000;
  }

  #nav a {
    font-weight: bold;
    /* color: #fff; */
  }

  #nav a.router-link-exact-active {
    /* color: #42b983; */
  }
</style>
