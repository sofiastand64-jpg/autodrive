import { View, Text, StyleSheet } from 'react-native';

export default function Advantage({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 16 },
  icon: { fontSize: 36, marginBottom: 8 },
  title: { fontSize: 14, fontWeight: '700', color: '#222', textAlign: 'center' },
  text: { fontSize: 12, color: '#666', textAlign: 'center', marginTop: 4 },
});