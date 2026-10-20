import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types';

type Route = RouteProp<RootStackParamList, 'CarDetail'>;
type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function CarDetailScreen() {
  const route = useRoute<Route>();
  const navigation = useNavigation<Nav>();
  const { car } = route.params;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.back}>← Назад</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{car.name}</Text>
          <View style={{ width: 60 }} />
        </View>
        <Image source={car.image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.name}>{car.name}</Text>
          <Text style={styles.subtitle}>{car.year} · {car.engine} · {car.power} л.с.</Text>
          <Text style={styles.price}>{car.price.toLocaleString('ru-RU')} ₽</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Order', { car })}>
            <Text style={styles.buttonText}>Заказать</Text>
          </TouchableOpacity>
          <Text style={styles.sectionTitle}>Характеристики</Text>
          <View style={styles.specRow}><Text style={styles.specLabel}>Мощность</Text><Text style={styles.specValue}>{car.power} л.с.</Text></View>
          <View style={styles.specRow}><Text style={styles.specLabel}>КПП</Text><Text style={styles.specValue}>{car.transmission}</Text></View>
          <View style={styles.specRow}><Text style={styles.specLabel}>Кузов</Text><Text style={styles.specValue}>{car.capacity}</Text></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 },
  back: { fontSize: 14, color: '#E63329', width: 60 },
  headerTitle: { fontSize: 16, fontWeight: '700', flex: 1, textAlign: 'center' },
  image: { width: '100%', height: 240, backgroundColor: '#eee' },
  content: { padding: 16 },
  name: { fontSize: 22, fontWeight: '700', color: '#222' },
  subtitle: { fontSize: 14, color: '#888', marginTop: 4 },
  price: { fontSize: 26, fontWeight: '700', color: '#E63329', marginVertical: 16 },
  button: { backgroundColor: '#E63329', paddingVertical: 14, borderRadius: 8, alignItems: 'center', marginBottom: 24 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#222', marginBottom: 12 },
  specRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
  specLabel: { fontSize: 14, color: '#666' },
  specValue: { fontSize: 14, color: '#222', fontWeight: '600' },
});
