<template>
  <!--Start FeedItem Card-->
  <div class="rounded overflow-hidden shadow-lg relative">
    <img
      v-if="article.urlToImage"
      class="w-full"
      :src="article.urlToImage"
      alt="Mountain"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-lg mb-2">
        {{ shortenText(article.title, 100) }}
      </div>
      <p class="text-gray-700 text-sm">{{ article.content }}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        class="
          inline-block
          bg-gray-200
          rounded-full
          px-3
          py-1
          text-xs
          font-semibold
          text-gray-700
          mr-2
          mb-2
        "
        >{{ formatTimeStamp(article.publishedAt) }}</span
      >
      <span
        class="
          inline-block
          bg-gray-200
          rounded-full
          px-3
          py-1
          text-xs
          font-semibold
          text-gray-700
          mr-2
          mb-2
        "
        >{{ article.source.name }}</span
      >
      <span
        v-if="article.author"
        class="
          inline-block
          bg-gray-200
          rounded-full
          px-3
          py-1
          text-xs
          font-semibold
          text-gray-700
          mr-2
          mb-2
        "
        >{{ article.author }}</span
      >
    </div>
    <IconButton
      class="absolute right-5 top-5"
      @buttonClick="saveArticle(article)"
    />
  </div>
  <!--End FeedItem Card-->
</template>

<script>
  import IconButton from './../IconButton.vue'
  import moment from 'moment'
  import { mapMutations } from 'vuex'
  import { shortenText } from './../../utils/typography.utils'

  export default {
    name: 'ArticleItem',
    props: ['article'],
    components: { IconButton },
    methods: {
      shortenText,
      formatTimeStamp(timeStamp) {
        return moment(timeStamp).format('YYYY-MM-DD')
      },
      ...mapMutations(['saveArticle']),
    },
  }
</script>

<style></style>
