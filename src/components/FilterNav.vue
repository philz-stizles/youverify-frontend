<template>
  <nav class="filter-nav">
    <button
      :class="{ active: currentTab === 'all' }"
      @click="updateFilter('all')"
    >
      All
    </button>
    <button
      :class="{ active: currentTab === 'completed' }"
      @click="updateFilter('completed')"
    >
      Completed
    </button>
    <button
      :class="{ active: currentTab === 'ongoing' }"
      @click="updateFilter('ongoing')"
    >
      Ongoing
    </button>
  </nav>
</template>

<script>
  export default {
    name: 'FilterNav',
    props: ['currentTab'],
    methods: {
      updateFilter(filter) {
        this.$emit('filterChange', filter)
      },
    },
  }
</script>

<style>
  .filter-nav button {
    background: none;
    border: none;
    color: #bbb;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
  }
  .filter-nav button.active {
    color: #555;
  }
</style>
