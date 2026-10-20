import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../types';

type Route = RouteProp<RootStackParamList, 'Order'>;

export default function OrderScreen() {
  const route = useRoute<Route>();
  const navigation = useNavigation();
  const { car } = route.params;
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    if (!phone.trim()) {
      Alert.alert('Введите телефон');
      return;
    }
    Alert.alert('Готово!', 'Мы перезвоним в течение 15 минут');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.content}>
        <Text style={styles.title}>Заявка на {car.name}</Text>
        <Text style={styles.subtitle}>Оставьте телефон — перезвоним за 15 минут</Text>
        <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="+7 (___) ___-__-__" keyboardType="phone-pad" />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Отправить</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 24 },
  title: { fontSize: 22, fontWeight: '700', color: '#222' },
  subtitle: { fontSize: 14, color: '#666', marginTop: 8, marginBottom: 24 },
  input: { borderWidth: 1, borderColor: '#DDD', borderRadius: 8, padding: 14, fontSize: 16, marginBottom: 16 },
  button: { backgroundColor: '#E63329', paddingVertical: 14, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '700' },
});
