import { useStorage } from '@vueuse/core';

export function useBeerFavorite() {
  const fav = useStorage<Set<number>>('favBeers', new Set([]));

  function toggleFavorite(beerId: number) {
    if (fav.value.has(beerId)) {
      fav.value.delete(beerId);
    } else {
      fav.value.add(beerId);
    }
  }

  return {
    favoriteBeers: fav,
    toggleFavorite
  }
}