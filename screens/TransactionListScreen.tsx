import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { useTransactionStore } from "../store/useTransactionStore";
import { Transaction } from "../types/Transaction";
import TransactionItem from "../components/TransactionItem";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
    List: undefined,
    Details: {transaction : Transaction}
}

const TransactionListScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const transactions = useTransactionStore((state) => state.transactions);
    
    return (
        <View style={style.container}>
            <FlatList
            data={transactions}
            keyExtractor={(item)=>item.id}
            renderItem={({ item }) => (
                <TransactionItem 
                transaction={item} 
                onPress={() => navigation.navigate('Details', { transaction: item })} 
                />
            )}
            />
        </View>
    )

}

export default TransactionListScreen;

const  style = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})