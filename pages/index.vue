<script setup lang="ts">
useHead({
  title: "List of beers - Beer app",
});

const breadcrumb = ref<BreadcrumbLinks[]>([
  { href: "/", label: "Home", isActive: true },
]);

const searchTerm = ref("");
const query = computed(() => ({
  per_page: 30,
  ...(searchTerm.value && {
    beer_name: searchTerm.value,
  }),
}));

const { data: beers } = await useFetch<Beer[]>(
  "https://api.punkapi.com/v2/beers",
  {
    query,
    watch: [searchTerm],
  }
);
</script>

<template>
  <div class="section">
    <div class="container">
      <AppBreadcrumb :links="breadcrumb"></AppBreadcrumb>

      <h1 class="title">List of beers</h1>
      <h2 class="subtitle">
        Discover new beer to drink the next time you should.
      </h2>

      <DebounceInput
        label="Find your next beer"
        placeholder="IPA, Wheat..."
        @change="searchTerm = $event"
      />

      <div v-if="searchTerm && beers">
        <p v-if="beers.length > 0">Showing {{ beers.length }} firsts results</p>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="container">
      <UiCardList :items="beers" v-if="beers">
        <template v-slot="{ item: beer }">
          <UiCardBeer :beer="beer" />
        </template>

        <template #empty>
          <p>No beers found.</p>
        </template>
      </UiCardList>
    </div>
  </div>
</template>
