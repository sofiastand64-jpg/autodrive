import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CarCard from '../components/CarCard';
import { CARS } from '../data/cars';
import { getFavorites } from '../data/favorites';
import type { RootStackParamList } from '../types';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function FavoritesScreen() {
  const navigation = useNavigation<Nav>();
  const [favIds, setFavIds] = useState<string[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      getFavorites().then(setFavIds);
    }, [])
  );

  const favCars = CARS.filter(car => favIds.includes(car.id));

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>← Назад</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Избранное</Text>
        <View style={{ width: 60 }} />
      </View>

      {favCars.length === 0 ? (
        <Text style={styles.empty}>Вы пока не добавили ни одной машины</Text>
      ) : (
        <FlatList
          data={favCars}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.column}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <CarCard
              car={item}
              onPress={() => navigation.navigate('CarDetail', { car: item })}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F5F7' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, backgroundColor: '#fff' },
  back: { fontSize: 14, color: '#E63329', width: 60 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#222' },
  empty: { textAlign: 'center', marginTop: 40, color: '#888' },
  list: { padding: 16 },
  column: { justifyContent: 'space-between' },
});