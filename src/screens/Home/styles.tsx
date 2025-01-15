import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,  // Optional for better spacing
      paddingVertical: 20,  // Optional for better spacing
      // backgroundColor: '#f0f0f0',  // Optional background color for better contrast
    },

    subContainer: {
      flex: 0.85, 
      justifyContent: 'flex-start', 
      alignItems: 'center'
    },

    avatarContainer: {
      flexDirection: 'row',  // Align Avatar and Text horizontally
      alignItems: 'center',  // Vertically center the Avatar and Text
      // marginBottom: 20,
    },

    avatar: {
      borderColor: '#009246',
      borderWidth: 2,
      width: 35,  // Fixed width and height for avatar
      height: 35,
    },

    card1: {
      flex: 0.13,
      marginBottom: 20,
      borderRadius: 10,
      backgroundColor: '#009246',
    },

    card2: {
      flex: 0.2,
      marginBottom: 20,
      borderRadius: 10,
      // backgroundColor: '#ffffff',
    },

    card3: {
      flex: 0.5,
      marginBottom: 20,
      borderRadius: 10,
      // backgroundColor: '#ffffff',
    },

    amountBalanceContent:{
      justifyContent: 'flex-end',
    },

    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },

    footerControl: {
      marginHorizontal: 2,
    },

    balanceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      // marginBottom: 10,
    },

    balanceText:{
      color: '#ffffff',
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

    eyeButton: {
      padding: 5,
    },

    iconStyle: {
      color: '#ffffff',  // Change this to any color you prefer,
      width: 20,  // You can adjust the size of the icon as needed
      height: 20,
    },

    textContainer: {
      padding:5,
    },

    fullNameText: {
      fontWeight: 'bold',  // Make the full name text bold
      fontSize:15,
      textTransform: 'uppercase',
    },

    rsbsaNumberText: {
      // fontWeight: 'bold',  // Make the full name text bold
      fontSize:12,
    },

    modulesContainerPerItemRow: {
      flexDirection: 'row',
      justifyContent: 'center',
    },

    moduleItem: {
      flexDirection: 'column',
      marginHorizontal: 5
    },

    moduleCards: {
      marginVertical: 10,
      height: 80,
      width: 80, 
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      borderBottomLeftRadius: 5,
      elevation:10,
      backgroundColor: '#7c7c7c',
    },

    overlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
      padding: 5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
    },

    moduleTitle: {
      fontSize: 11,
      fontWeight: 'bold',
      color: '#ffffff',
    },

    lastestTransactionStyle:{
      maxHeight: 100,
      marginTop:30,
      // marginHorizontal:5, 
      // marginBottom:20,
    },

    backgroundImage: {
      width: '100%',
      height: '100%', // or whatever height you want
    },
});