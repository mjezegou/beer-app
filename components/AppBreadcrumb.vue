<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li v-for="item in links" :class="{ 'is-active': item.isActive }">
        <NuxtLink :to="item.href">{{ item.label }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  links: BreadcrumbLinks[];
}>();
</script>
