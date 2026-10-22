import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';

export default function ContactsScreen() {
  const navigation = useNavigation();

  // Координаты автосалона (Москва, для примера)
  const location = {
    latitude: 55.7558,
    longitude: 37.6173,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  const openPhone = () => Linking.openURL('tel:+78453000000');
  const openMap = () => Linking.openURL('https://yandex.ru/maps/?text=Москва');

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        
        <View style={styles.header}>
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Text style={styles.back}>← Назад</Text>
  </TouchableOpacity>
  <Text style={styles.headerTitle}>Контакты</Text>
  <View style={{ width: 60 }} />
</View>

        {/* Карта */}
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            provider={PROVIDER_DEFAULT}
            initialRegion={location}
          >
            <Marker
              coordinate={{ latitude: location.latitude, longitude: location.longitude }}
              title="АвтоДрайв"
              description="г. Маркс, ул. пр Ленина"
            />
          </MapView>
        </View>

        {/* Информация */}
        <View style={styles.infoBlock}>
          <Text style={styles.title}>🚗 АвтоДрайв</Text>
          <Text style={styles.subtitle}>Автосалон в Маркс</Text>

          <View style={styles.row}>
            <Text style={styles.label}>📍 Адрес</Text>
            <Text style={styles.value}>г. Маркс, ул. пр Ленина </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>🕒 Режим работы</Text>
            <Text style={styles.value}>Пн–Пт: 9:00–20:00{'\n'}Сб–Вс: 10:00–18:00</Text>
          </View>

          {/* Кнопки */}
          <TouchableOpacity style={styles.button} onPress={openPhone}>
            <Text style={styles.buttonText}>📞 Позвонить</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={openMap}>
            <Text style={styles.buttonTextSecondary}>🗺️ Открыть в Яндекс.Картах</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F5F7' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, backgroundColor: '#fff' },
  back: { fontSize: 14, color: '#E63329', width: 60 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#222' },
  mapContainer: { height: 300, backgroundColor: '#ddd' },
  map: { flex: 1 },
  infoBlock: { padding: 24, backgroundColor: '#fff', margin: 16, borderRadius: 12 },
  title: { fontSize: 24, fontWeight: '700', color: '#222', marginBottom: 4 },
  subtitle: { fontSize: 14, color: '#888', marginBottom: 20 },
  row: { marginBottom: 16 },
  label: { fontSize: 14, fontWeight: '700', color: '#E63329', marginBottom: 4 },
  value: { fontSize: 16, color: '#222', lineHeight: 22 },
  button: { backgroundColor: '#E63329', paddingVertical: 14, borderRadius: 8, alignItems: 'center', marginTop: 12 },
  buttonSecondary: { backgroundColor: '#F5F5F7', borderWidth: 1, borderColor: '#E63329' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  buttonTextSecondary: { color: '#E63329', fontSize: 16, fontWeight: '700' },
});
