<script setup lang="ts">
const router = useRouter();

async function randomizeBeer() {
  const data = await $fetch<[Beer]>("https://api.punkapi.com/v2/beers/random");
  router.push(`/beers/${data[0].id}`);
}
</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <!-- https://punkapi.com/documentation/v2 -->

      <div class="navbar-brand">
        <NuxtLink to="/" class="navbar-item">
          <img src="~/assets/img/logo.svg" width="40" alt="" />
        </NuxtLink>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <NuxtLink to="/" class="navbar-item"> Home </NuxtLink>
          <NuxtLink to="/favorites" class="navbar-item"> Favorites </NuxtLink>

          <div class="navbar-item">
            <div class="buttons">
              <button class="button is-primary" @click="randomizeBeer">
                Show me a random beer!
              </button>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light"> Log in </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
