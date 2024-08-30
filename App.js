import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>stylesheet api</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    padding: 60,
  },
  title: {
    fontSize: 30,
    borderWidth: 4,
    borderRadius: 8,
    textAlign: 'center',
    padding: 10,
    fontWeight: '700',
    backgroundColor: '#61dafb',
  },
});
