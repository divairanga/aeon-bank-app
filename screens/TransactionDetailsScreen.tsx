import { RouteProp, useRoute } from "@react-navigation/native";
import { Button, Share, StyleSheet, Text, View } from "react-native";
import { Transaction } from "../types/Transaction";

type RouteParams = {
    Details: {
      transaction: Transaction;
    };
};

export default function TransactionDetailsScreen() {
    const route = useRoute<RouteProp<RouteParams, 'Details'>>(); // ✅ CALL the hook
    const { transaction } = route.params;

    const onShare = async () => {
        try {
          await Share.share({//use react native share
            message: `Transaction ${transaction.refId}\nRecipient: ${transaction.recipientName}\nAmount: $${transaction.amount}\nDate: ${transaction.transferDate}`
          });
        } catch (error) {
          console.error('Error sharing:', error);
        }
    };

    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Transaction Details</Text>
            <Text>Reference ID: {transaction.refId}</Text>
            <Text>Date: {new Date(transaction.transferDate).toLocaleString()}</Text>
            <Text>Recipient: {transaction.recipientName}</Text>
            <Text>Amount: ${transaction.amount.toFixed(2)}</Text>
            <Button title="Share" onPress={onShare} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 16
    },
    heading: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 12
    }
});