import { View, Alert, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button title="alert" onPress={() => Alert.alert('invalid data')} />
      <Button
        title="alert2"
        onPress={() => Alert.alert('invalid data', 'DOB incorrect')}
      />
      <Button
        title="alert3"
        onPress={() =>
          Alert.alert('invalid data', 'DOB incorrect', [
            {
              text: 'cancel',
              onPress: () => console.log('cancel pressed'),
            },
            {
              text: 'ok',
              onPress: () => console.log('ok pressed'),
            },
          ])
        }
      />
    </View>
  );
}
