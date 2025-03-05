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

    card: {
        flex: 0.8,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#ffffff',
    },

    menuContainer:{
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    menu: {
        flex: 1,
        // margin: 10,
        borderRadius: 5,
        backgroundColor: '#ffffff',
    },
});