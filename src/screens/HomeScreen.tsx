import { View, Text, ScrollView, StyleSheet,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CarCard from '../components/CarCard';
import Advantage from '../components/Advantage';
import { CARS } from '../data/cars';
import type { RootStackParamList } from '../types';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<Nav>();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.header}>
  <Text style={styles.logo}>🚗 АвтоДрайв</Text>
  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
    <Text style={styles.phone}>+7 (9873) 79-59-26</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
    <Text style={{ fontSize: 18, color: '#E63329', fontWeight: 'bold' }}>📍</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Text style={{ fontSize: 18, color: '#E63329', fontWeight: 'bold' }}>👤</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
  <Text style={{ fontSize: 18, color: '#E63329', fontWeight: 'bold' }}>❤️</Text>
</TouchableOpacity>
  </View>
</View>

        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Купите автомобиль мечты</Text>
          <Text style={styles.heroText}>Toyota, BMW, Kia — в наличии</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Каталог</Text>
          <View style={styles.cars}>
            {CARS.map(car => (
              <CarCard key={car.id} car={car} onPress={() => navigation.navigate('CarDetail', { car })} />
            ))}
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
  section: { padding: 16 },
  sectionTitle: { fontSize: 20, fontWeight: '700', color: '#222', marginBottom: 12 },
  cars: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  advantages: { flexDirection: 'row', paddingHorizontal: 16, paddingBottom: 24 },
});
