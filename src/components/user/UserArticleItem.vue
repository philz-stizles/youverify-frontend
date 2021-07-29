<template>
  <div class="w-full lg:max-w-full lg:flex">
    <div
      class="
        h-48
        lg:h-auto lg:w-48
        flex-none
        bg-cover
        rounded-t
        lg:rounded-t-none lg:rounded-l
        text-center
        overflow-hidden
      "
      :style="{ backgroundImage: `url(${article.urlToImage})` }"
      title="Mountain"
    ></div>
    <div
      class="
        border-r border-b border-l border-gray-400
        lg:border-l-0 lg:border-t lg:border-gray-400
        bg-white
        rounded-b
        lg:rounded-b-none lg:rounded-r
        p-4
        flex flex-col
        justify-between
        leading-normal
      "
    >
      <div class="mb-8">
        <p class="text-sm text-gray-600 flex items-center"></p>
        <div class="text-gray-900 font-bold text-xl mb-2">
          {{ article.title }}
        </div>
        <p class="text-gray-700 text-base">{{ article.content }}</p>
      </div>
      <div class="flex items-center">
        <div class="text-sm">
          <p class="text-gray-900 leading-none">{{ article.source.name }}</p>
          <p class="text-gray-600">
            {{ formatTimeStamp(article.publishedAt) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    name: 'UserArticleItem',
    props: ['article'],
    methods: {
      formatTimeStamp(timeStamp) {
        return moment(timeStamp).format('YYYY-MM-DD')
      },
    },
  }
</script>

<style></style>
