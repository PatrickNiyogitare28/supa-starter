import { NavigationContainer } from '@react-navigation/native'
import AppStack from './src/navigation';


export default function App() {
  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
}
