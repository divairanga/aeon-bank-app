import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Transaction } from "../types/Transaction";

type Props = {
    transaction: Transaction;
    onPress: () => void;
}

const TransactionItem = ({ transaction, onPress}: Props) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Text style={styles.details}>{transaction.transferName}</Text>
            <Text style={styles.date} >{new Date(transaction.transferDate).toLocaleDateString()}</Text>
            <Text style={styles.amount}>${transaction.amount.toFixed(2)}</Text>
        </TouchableOpacity>
    )
}

export default TransactionItem;

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#f3f3f3',
      padding: 16,
      marginBottom: 12,
      borderRadius: 8
    },
    details: {
      fontSize: 16,
      fontWeight: '600'
    },
    amount: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    date: {
      fontSize: 12,
      color: '#777'
    }
  });