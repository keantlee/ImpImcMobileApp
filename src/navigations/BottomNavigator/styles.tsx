import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    tabButtons: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabBar: {
        height: 70,
        position: 'absolute',
        bottom: 16,
        right: 16,
        left: 16,
        borderRadius: 16,
    },
    btn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 4,
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
      },
    circle: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#2759ff',
        borderRadius: 25,
      },
    text: {
        fontSize: 9,
        textAlign: 'center',
        color:'#2759ff',
        fontFamily: 'sans-serif-medium',
    },
    tabBarLabelStyle:{
        // fontFamily:constants.Fonts.PoppinsRegular,
        fontSize:10
    },
    iconStyle:{
        color: '#ffffff',  // Change this to any color you prefer,
        width: 20,  // You can adjust the size of the icon as needed
        height: 20,
    }
});