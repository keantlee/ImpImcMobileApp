import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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

    fullNameText: {
        fontWeight: 'bold',  // Make the full name text bold
        fontSize:15,
        textTransform: 'uppercase',
    },

    textContainer: {
        padding:5,
    },

    rsbsaNumberText: {
        // fontWeight: 'bold',  // Make the full name text bold
        fontSize:12,
    },
});