
import { Stack } from 'expo-router';
import 'react-native-reanimated';


export default function HomeLayout() {

  return (
      <Stack >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {/* <Stack.Screen name="rides" options={{ headerShown: false }} />
        <Stack.Screen name="courier" options={{ headerShown: false }} />
        <Stack.Screen name="store-pickup" options={{ headerShown: false }} /> */}

      </Stack>
  );
}
