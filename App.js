import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Source/ScreenHome';
import TrangChu from './Source/TrangChu';
import ViewBank from './Source/ViewBank';
import Bank from './Source/Bank';
import BankSucces from './Source/BankSucces';
import Login from './Source/Login';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown :false }}>
     <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="ScreenHome" component={Screen1}/>
      <Stack.Screen name="TrangChu" component={TrangChu}/> 
      <Stack.Screen name="ViewBank" component={ViewBank}/>
      <Stack.Screen name="Bank" component={Bank}/>
      <Stack.Screen name="BankSucces" component={BankSucces}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
