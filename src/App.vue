<template>
  <div>
    <NavBar />
    <div class="md:container md:mx-auto px-10">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: { NavBar, Footer },
}
</script>

<style>
.cont {
  width: 1120px;
}
</style>
