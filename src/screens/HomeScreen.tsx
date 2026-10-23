import { useTheme } from '../theme';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState, useMemo } from 'react';
import CarCard from '../components/CarCard';
import Advantage from '../components/Advantage';
import { CARS } from '../data/cars';
import type { RootStackParamList } from '../types';

type Nav = NativeStackNavigationProp<RootStackParamList>;

// Варианты фильтров и сортировки
const FILTERS = [
  { id: 'all', label: 'Все' },
  { id: 'cheap', label: 'До 3 млн' },
  { id: 'expensive', label: 'От 3 млн' },
  { id: 'new', label: 'Сначала новые' },
  { id: 'rating', label: 'По цене ⬆️' },
];

export default function HomeScreen() {
  const navigation = useNavigation<Nav>();
  const { colors } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');

  // Логика фильтрации и сортировки
  const filteredCars = useMemo(() => {
    let result = [...CARS];

    if (activeFilter === 'cheap') {
      result = result.filter(car => car.price < 3000000);
    } else if (activeFilter === 'expensive') {
      result = result.filter(car => car.price >= 3000000);
    } else if (activeFilter === 'new') {
      result = result.sort((a, b) => b.year - a.year);
    } else if (activeFilter === 'rating') {
      result = result.sort((a, b) => a.price - b.price);
    }

    return result;
  }, [activeFilter]);

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <ScrollView>
        <View style={[styles.header, { backgroundColor: colors.card }]}>
          <Text style={[styles.logo, { color: colors.text }]}>🚗 АвтоДрайв</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <Text style={styles.phone}>+7 (8453) 00-00-00</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
              <Text style={{ fontSize: 18 }}>📍</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
              <Text style={{ fontSize: 18 }}>❤️</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Text style={{ fontSize: 18 }}>👤</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Купите автомобиль мечты</Text>
          <Text style={styles.heroText}>Toyota, BMW, Kia — в наличии</Text>
        </View>

        {/* ПАНЕЛЬ ФИЛЬТРОВ */}
               {/* ПАНЕЛЬ ФИЛЬТРОВ */}
        <View style={[styles.filtersWrapper, { backgroundColor: colors.card }]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersScroll}>
            {FILTERS.map(filter => (
              <TouchableOpacity
                key={filter.id}
                style={[
                  styles.filterChip, 
                  { backgroundColor: colors.background }, 
                  activeFilter === filter.id && styles.filterChipActive
                ]}
                onPress={() => setActiveFilter(filter.id)}
              >
                <Text style={[
                  styles.filterText,
                  activeFilter === filter.id && styles.filterTextActive
                ]}>
                  {filter.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
              
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Каталог</Text>
          <View style={styles.cars}>
            {filteredCars.length === 0 ? (
              <Text style={{ textAlign: 'center', width: '100%', color: '#888', marginTop: 20 }}>
                Ничего не найдено
              </Text>
            ) : (
              filteredCars.map(car => (
                <CarCard 
                  key={car.id} 
                  car={car} 
                  onPress={() => navigation.navigate('CarDetail', { car })} 
                />
              ))
            )}
          </View>
        </View>

        <View style={styles.advantages}>
          <Advantage icon="🚗" title="100+ авто" text="В наличии" />
          <Advantage icon="💰" title="Кредит 3%" text="15 минут" />
          <Advantage icon="🛠" title="Сервис 24/7" text="Гарантия" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F5F7' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, backgroundColor: '#fff' },
  logo: { fontSize: 18, fontWeight: '700', color: '#222' },
  phone: { fontSize: 13, color: '#E63329', fontWeight: '600' },
  hero: { backgroundColor: '#1A1A2E', padding: 24, alignItems: 'center' },
  heroTitle: { fontSize: 22, fontWeight: '700', color: '#fff', textAlign: 'center', marginBottom: 8 },
  heroText: { fontSize: 14, color: '#B8B8C8', textAlign: 'center' },
  
  // Стили для фильтров
  filtersWrapper: { backgroundColor: '#fff', paddingVertical: 12 },
  filtersScroll: { paddingHorizontal: 16, gap: 8 },
  filterChip: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: '#F0F0F0', borderWidth: 1, borderColor: '#F0F0F0' },
  filterChipActive: { backgroundColor: '#E63329', borderColor: '#E63329' },
  filterText: { fontSize: 13, color: '#666', fontWeight: '500' },
  filterTextActive: { color: '#fff' },

  section: { padding: 16 },
  sectionTitle: { fontSize: 20, fontWeight: '700', color: '#222', marginBottom: 12 },
  cars: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  advantages: { flexDirection: 'row', paddingHorizontal: 16, paddingBottom: 24, marginTop: 10 },
});