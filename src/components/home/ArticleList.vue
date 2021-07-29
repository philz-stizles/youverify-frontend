<template>
  <div
    class="
      p-10
      grid grid-cols-1
      sm:grid-cols-1
      md:grid-cols-3
      lg:grid-cols-3
      xl:grid-cols-3
      gap-5
    "
  >
    <div v-for="article in articles" :key="article.id">
      <ArticleItem :article="article" />
    </div>
  </div>
</template>

<script>
  import ArticleItem from './ArticleItem.vue'
  export default {
    name: 'ArticleList',
    props: ['articles'],
    components: { ArticleItem },
  }
</script>

<style></style>
