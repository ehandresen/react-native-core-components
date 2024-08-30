import { View, ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <ActivityIndicator size={'large'} color={'red'} animating={true} />
    </View>
  );
}
