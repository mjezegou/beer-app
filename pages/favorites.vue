<script setup lang="ts">
useHead({
  title: "Favorites beers - Beer app",
});

const breadcrumb = ref<BreadcrumbLinks[]>([
  { href: "/", label: "Home", isActive: false },
  { href: "/favorites", label: "Favorites", isActive: true },
]);

const { favoriteBeers } = useBeerFavorite();

const { data: beers } = await useFetch<Beer[]>(
  "https://api.punkapi.com/v2/beers",
  {
    query: {
      ids: [...favoriteBeers.value].join("|"),
    },
  }
);
</script>

<template>
  <div class="section">
    <div class="container">
      <AppBreadcrumb :links="breadcrumb"></AppBreadcrumb>

      <h1 class="title">Favorites beers</h1>
    </div>
  </div>

  <div class="section">
    <div class="container">
      <UiCardList :items="beers" v-if="beers">
        <template v-slot="{ item: beer }">
          <UiCardBeer :beer="beer" />
        </template>

        <template #empty>
          <p>No favorites yet.</p>
        </template>
      </UiCardList>
    </div>
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
