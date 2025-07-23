<script setup lang="ts">
const route = useRoute();
const { data } = await useFetch<[Beer]>(
  `https://api.punkapi.com/v2/beers/${route.params.id}`,
  {}
);
const beer = computed(() => data.value?.[0]);

useHead({
  title: beer.value?.name + " - Beer app",
});

const breadcrumb = computed<BreadcrumbLinks[]>(() => {
  if (!beer.value) {
    return [];
  }

  return [
    { href: "/", label: "Home", isActive: false },
    { href: "/beers/" + beer.value.id, label: beer.value.name, isActive: true },
  ];
});
</script>
<template>
  <div class="section">
    <div class="container">
      <AppBreadcrumb :links="breadcrumb"></AppBreadcrumb>
    </div>
  </div>

  <div class="section">
    <div class="container" v-if="beer">
      <div class="media">
        <div class="media-left">
          <img :src="beer.image_url" width="120" :alt="beer.name" />
        </div>
        <div class="media-content">
          <h1 class="title">
            {{ beer.name }}
            <UiFavoriteBeers :beer-id="beer.id" />
          </h1>
          <h2 class="subtitle">{{ beer.tagline }}</h2>
          <time datetime="2016-1-1"
            >First brewed : {{ beer.first_brewed }}</time
          >
          <br />
          <br />
          <div class="content">
            <p>
              {{ beer.description }}
            </p>

            <h3>Food pairing:</h3>
            <ul>
              <li v-for="foodPairing in beer.food_pairing">
                {{ foodPairing }}
              </li>
            </ul>

            <h3>Brewer tips:</h3>
            <p>
              {{ beer.brewers_tips }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
