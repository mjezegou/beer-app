<template>
  <ClientOnly>
    <button
      v-if="beerId"
      class="has-text-warning"
      @click="toggleFavorite(beerId)"
    >
      {{ favoriteBeers.has(beerId) ? "★" : "☆" }}
    </button>
  </ClientOnly>
</template>

<script setup lang="ts">
defineProps<{
  beerId: number;
}>();

const { toggleFavorite, favoriteBeers } = useBeerFavorite();
</script>

<style scoped>
button {
  appearance: none;
  font: inherit;
  background: transparent;
  cursor: pointer;
  border: none;
}
</style>
