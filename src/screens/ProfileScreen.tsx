import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.back}>← Назад</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Профиль</Text>
          <View style={{ width: 60 }} />
        </View>

        <View style={styles.profileInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>И</Text>
          </View>
          <Text style={styles.name}>Елизавета Громова</Text>
          <Text style={styles.phone}>+7 (8453) 00-00-00</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Мои заявки</Text>
          <View style={styles.orderCard}>
            <Text style={styles.orderTitle}>Toyota Camry</Text>
            <Text style={styles.orderStatus}>Ожидает звонка менеджера</Text>
          </View>
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
  profileInfo: { alignItems: 'center', padding: 24, backgroundColor: '#fff', marginBottom: 16 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#E63329', alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  avatarText: { fontSize: 32, color: '#fff', fontWeight: 'bold' },
  name: { fontSize: 22, fontWeight: '700', color: '#222' },
  phone: { fontSize: 14, color: '#888', marginTop: 4 },
  section: { padding: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#222', marginBottom: 12 },
  orderCard: { backgroundColor: '#fff', padding: 16, borderRadius: 8, borderWidth: 1, borderColor: '#eee' },
  orderTitle: { fontSize: 16, fontWeight: '600', color: '#222' },
  orderStatus: { fontSize: 13, color: '#E63329', marginTop: 4 },
});
