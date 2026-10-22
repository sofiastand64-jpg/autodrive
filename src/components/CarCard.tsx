import { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import type { Car } from '../types';
import { getFavorites, toggleFavorite } from '../data/favorites';

export default function CarCard({ car, onPress }: { car: Car; onPress: () => void }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    getFavorites().then(favs => setIsFav(favs.includes(car.id)));
  }, [car.id]);

  const handleFav = async (e: any) => {
    e.stopPropagation(); 
    const newState = await toggleFavorite(car.id);
    setIsFav(newState);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image source={car.image} style={styles.image} />
      
      {/* Кнопка сердечка */}
      <TouchableOpacity style={styles.favButton} onPress={handleFav}>
        <Text style={{ fontSize: 20 }}>{isFav ? '❤️' : '🤍'}</Text>
      </TouchableOpacity>

      <View style={styles.tag}><Text style={styles.tagText}>{car.tag}</Text></View>
      
      <View style={styles.info}>
        <Text style={styles.name}>{car.name}</Text>
        <Text style={styles.year}>{car.year}</Text>
        <View style={styles.bottom}>
          <Text style={styles.price}>{car.price.toLocaleString('ru-RU')} ₽</Text>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Заказать</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { width: '48%', backgroundColor: '#fff', borderRadius: 12, overflow: 'hidden', marginBottom: 16, elevation: 3 },
  image: { width: '100%', height: 120, backgroundColor: '#eee' },
  tag: { position: 'absolute', top: 8, left: 8, backgroundColor: '#E63329', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  tagText: { color: '#fff', fontSize: 11, fontWeight: '600' },
  favButton: { position: 'absolute', top: 8, right: 8, backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 20, padding: 4 },
  info: { padding: 10 },
  name: { fontSize: 15, fontWeight: '700', color: '#222' },
  year: { fontSize: 12, color: '#888', marginTop: 2, marginBottom: 8 },
  bottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  price: { fontSize: 14, fontWeight: '700', color: '#E63329' },
  button: { backgroundColor: '#E63329', paddingHorizontal: 8, paddingVertical: 6, borderRadius: 6 },
  buttonText: { color: '#fff', fontSize: 11, fontWeight: '600' },
});