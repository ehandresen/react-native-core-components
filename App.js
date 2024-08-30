import { View, Button, Image, Text, Modal } from 'react-native';
import { useState } from 'react';

// using require (commonJS) is preferred when dealing with static assets like images in react-native
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title="press"
        onPress={() => setIsModalVisible(true)}
        color="midnightblue"
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)} // android back button, ios gesture
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
          <Text>Modal content</Text>
          <Button title="close" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}
