import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Source/ScreenHome';
import TrangChu from './Source/TrangChu';
import ViewBank from './Source/ViewBank';
import Bank from './Source/Bank';
import BankSucces from './Source/BankSucces';
import Login from './Source/Login';
import Order from './Source/Order';
import Item from './Source/Item';
import Phone from './Source/Phone';
import ThanhToan from './Source/ThanhToan';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown : false }}>
     <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="TrangChu" component={TrangChu}/> 
      <Stack.Screen name="Order" component={Order}/>
      <Stack.Screen name="Item" component={Item} />
      <Stack.Screen name="Phone" component={Phone} />
      <Stack.Screen name="ThanhToan" component={ThanhToan} />
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
