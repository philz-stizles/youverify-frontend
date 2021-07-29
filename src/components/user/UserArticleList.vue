<template>
  <div class="mt-10 px-10">
    <SectionTitle class="mb-5" title="READ LATER" />
    <div v-for="article in articles" :key="article.title">
      <UserArticleItem :article="article" />
    </div>
  </div>
</template>

<script>
  import UserArticleItem from './UserArticleItem.vue'
  import SectionTitle from '@/components/SectionTitle.vue'

  export default {
    name: 'UserArticleList',
    props: ['articles'],
    components: { UserArticleItem, SectionTitle },
  }
</script>

<style></style>
