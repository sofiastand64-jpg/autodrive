import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'favorites';

export async function getFavorites(): Promise<string[]> {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

export async function toggleFavorite(id: string): Promise<boolean> {
  const favorites = await getFavorites();
  const isFav = favorites.includes(id);
  const updated = isFav ? favorites.filter(f => f !== id) : [...favorites, id];
  await AsyncStorage.setItem(KEY, JSON.stringify(updated));
  return !isFav;
}

export async function isFavorite(id: string): Promise<boolean> {
  const favorites = await getFavorites();
  return favorites.includes(id);
}
