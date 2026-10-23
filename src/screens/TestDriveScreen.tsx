import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../types';

type Route = RouteProp<RootStackParamList, 'TestDrive'>;

export default function TestDriveScreen() {
  const route = useRoute<Route>();
  const navigation = useNavigation();
  const { car } = route.params;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    if (!name.trim() || !phone.trim() || !date.trim()) {
      Alert.alert('Ошибка', 'Заполните все поля');
      return;
    }
    Alert.alert('Успешно!', `Вы записаны на тест-драйв ${car.name} на ${date}`);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.back}>← Назад</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Тест-драйв</Text>
          <View style={{ width: 60 }} />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Запись на {car.name}</Text>
          <Text style={styles.subtitle}>Заполните форму, и мы свяжемся с вами для подтверждения времени</Text>

          <Text style={styles.label}>Ваше имя</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Иван Иванов"
          />

          <Text style={styles.label}>Телефон</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="+7 (___) ___-__-__"
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Желаемая дата и время</Text>
          <TextInput
            style={styles.input}
            value={date}
            onChangeText={setDate}
            placeholder="Например: 25 октября, 15:00"
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Записаться</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 },
  back: { fontSize: 14, color: '#E63329', width: 60 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#222' },
  content: { padding: 24 },
  title: { fontSize: 22, fontWeight: '700', color: '#222' },
  subtitle: { fontSize: 14, color: '#666', marginTop: 8, marginBottom: 24 },
  label: { fontSize: 14, fontWeight: '600', color: '#222', marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: '#F9F9F9',
  },
  button: { backgroundColor: '#E63329', paddingVertical: 14, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '700' },
});