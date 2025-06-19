import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionListScreen from "./screens/TransactionListScreen";
import TransactionDetailsScreen from "./screens/TransactionDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="List" component={TransactionListScreen} options={{title:'Transactions'}} />
      <Stack.Screen name="Details" component={TransactionDetailsScreen} options={{title:'Transaction Details'}}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}
