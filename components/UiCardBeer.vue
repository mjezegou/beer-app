<script setup lang="ts">
defineProps<{
  beer: Beer;
}>();
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <NuxtLink :to="'/beers/' + beer.id">
            <img
              :src="beer.image_url"
              width="60"
              height="240"
              :alt="beer.name"
              loading="lazy"
            />
          </NuxtLink>
        </div>
        <div class="media-content">
          <p class="title is-4">
            <NuxtLink :to="'/beers/' + beer.id">{{ beer.name }}</NuxtLink>
            <UiFavoriteBeers :beer-id="beer.id" />
          </p>
          <p class="subtitle is-6">
            {{ beer.tagline }}
          </p>
          <div class="content">
            {{ beer.description }}

            <p>ABV: {{ beer.abv }} - IBU: {{ beer.ibu }}</p>
            <br />
            <time datetime="2016-1-1"
              >First brewed : {{ beer.first_brewed }}</time
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  flex-grow: 1;
}

img {
  object-fit: contain;
  width: 80px;
  height: 240px;
  object-position: center top;
}
</style>
