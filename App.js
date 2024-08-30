import { View, StatusBar, Button } from 'react-native';
import { useState } from 'react';

// using require (commonJS) is preferred when dealing with static assets like images in react-native
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {
  const [showStatusBar, setShowStatusBar] = useState(false);
  const [color, setColor] = useState('dark-content');

  const changeColor = () => {
    if (color === 'dark-content') {
      setColor('light-content');
      return;
    }

    setColor('dark-content');
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <StatusBar barStyle={color} hidden={showStatusBar} />
      <Button title="change color" onPress={changeColor} />
      <Button
        title="show/hide statusbar"
        onPress={() => setShowStatusBar(!showStatusBar)}
      />
    </View>
  );
}
