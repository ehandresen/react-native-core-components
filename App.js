import { View, Button, Image, Text, Pressable } from 'react-native';

// using require (commonJS) is preferred when dealing with static assets like images in react-native
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {
  console.log('--------');
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title="press"
        onPress={() => console.log('btn pressed')}
        color="midnightblue"
      />
      <Pressable
        onPressIn={() => console.log('onpress in')}
        onPress={() => console.log('image pressed')}
        onPressOut={() => console.log('onpress out')}
        onLongPress={() => console.log('image long pressed')}
      >
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </Pressable>
      <Pressable
        onPress={() => console.log('text pressed')}
        onLongPress={() => console.log('long pressed activated')}
      >
        <Text>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </Text>
      </Pressable>
    </View>
  );
}
