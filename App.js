import { View, Button } from 'react-native';

// using require (commonJS) is preferred when dealing with static assets like images in react-native
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title="press"
        onPress={() => console.log('btn pressed')}
        color="midnightblue"
      />
    </View>
  );
}
