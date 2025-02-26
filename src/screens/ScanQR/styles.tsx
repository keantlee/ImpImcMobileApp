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
});