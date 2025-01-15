import { StyleSheet } from "react-native";

export const amountBalanceCardStyles = StyleSheet.create({ 
    amountBalanceContent:{
        justifyContent: 'flex-end',
    },

    balanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: 10,
    },

    balanceText:{
        color: '#ffffff',
    },

    eyeButton: {
        padding: 5,
    },

    amountContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },

    currencyText: {
        fontSize: 16, // smaller font size for 'PHP'
        color: '#ffffff',
    },

    amountText: {
        fontSize: 24, // larger font size for the amount
        fontWeight: 'bold',
        color: '#ffffff',
    },
});