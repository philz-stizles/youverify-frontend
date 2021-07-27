<template>
  <nav class="main-nav">
    <router-link :to="{ name: 'Home' }" exact>Home</router-link>
    <router-link :to="{ name: 'About' }" exact>About</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar',
    data() {
      return {
        title: 'My App',
      }
    },
    methods: {
      logOut() {
        // dispatch logout request to global actions
        this.$store.dispatch('logOut')
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-nav {
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
  }
</style>
