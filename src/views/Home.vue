<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
  // @ is an alias to /src
  import axios from 'axios'

  export default {
    name: 'Home',
    components: {},
    data() {
      console.log(process.env.VUE_APP_NEWS_API)
      console.log(process.env.VUE_APP_NEWS_API_key)
      return {
        url: `${process.env.VUE_APP_NEWS_API}/top-headlines/sources?apiKey=${process.env.VUE_APP_NEWS_API_key}`,
      }
    },
    mounted() {
      axios
        .get(this.url)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
          this.errored = true
        })
        .finally(() => (this.loading = false))
    },
  }
</script>
