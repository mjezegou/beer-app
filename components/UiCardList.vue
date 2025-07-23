<script setup lang="ts">
defineProps<{
  items: any[];
}>();
</script>

<template>
  <div class="columns is-multiline">
    <template v-if="items.length">
      <div class="column is-one-third" v-for="item in items">
        <slot :item="item"></slot>
      </div>
    </template>

    <template v-else>
      <div class="column">
        <slot name="empty" :items="items">Empty list</slot>
      </div>
    </template>
  </div>
</template>

<style scoped>
.columns {
  align-items: stretch;
}

.column {
  display: flex;
  flex-direction: column;
}
</style>
