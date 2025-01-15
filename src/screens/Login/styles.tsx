import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  subContainer: {
    flex: 0.85, 
    justifyContent: 'flex-start', 
    alignItems: 'center'
  },

  input: {
    margin: 25,
    width: '70%',
    height: 2,
    borderRadius: 10
  },

  fpText:{
    flexDirection:'row',
    marginTop: 25,
    marginBottom: 35,
    fontStyle: 'italic',
    alignSelf: 'flex-end', 
    // marginRight: 10 
  },

  logInBtn: {
    alignItems: 'center',
    width: '70%',
    borderRadius: 10,
    backgroundColor: '#009246',
    borderColor: '#009246',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  logo: {
    height:150,
    width: 150,
  },

  logoContainer: {
    margin: 25,
    // position:'absolute',     
    // height: constants.Dimensions.vh(30),
    // width: constants.Dimensions.vw(30),
    alignSelf:'center',
    // top:constants.Dimensions.vh(25),
    // zIndex: 1,  
    resizeMode: 'contain',
    borderRadius: 100, // Border radius
    // borderColor: 'black', // Border color
    // borderWidth: 1, // Border width
    overflow: 'hidden', // Clip any overflow to show the border radius
    backgroundColor: 'white',
    shadowColor: 'black', 
    elevation: 20,
    shadowOpacity: 10,                 
  },
});