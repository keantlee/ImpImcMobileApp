/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';

import type {PropsWithChildren} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  ApplicationProvider,
  Button,
  Icon,
  IconElement,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';

import { EvaIconsPack } from '@ui-kitten/eva-icons';

import * as eva from '@eva-design/eva';

// ASSETS
import { ThemeContext } from './src/assets/theme';

import LogIn from './src/screens/Login';
import Otp from './src/screens/OTP';
import HomeScreen from './src/screens/Home';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

export default (): React.ReactElement => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  const sunIcon   = () => <Icon name="sun-outline" />;
  const moonIcon  = () => <Icon name="moon-outline" />;

  return (
    <>
        {/* <User userId="UUID1234" email="kentley.ong@mail.da.gov.ph" password="secret" fullName={fullname} gender="MALE" contactNo={9169382460} location={location}/>  */}

        <IconRegistry icons={EvaIconsPack}/>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <ApplicationProvider {...eva} theme={eva[theme]}>

          <View style={styles.buttonContainer}>
              <Button
                appearance="ghost"
                status="info"
                accessoryLeft={theme === 'light' ? sunIcon : moonIcon}
                onPress={toggleTheme}
                style={styles.themeToggleButton}
              >
                {/* {theme === 'light' ? 'Dark Mode' : 'Light Mode'} */}
              </Button>
          </View>

          {/* <LogIn 
              email="kentley.ong@mail.da.gov.ph" 
              id={2024} 
              password="secret" 
          /> */}

          {/* <Otp 
              otp={123456}
           /> */}

          <HomeScreen 
            user_id="1234"
            email="kentley.ong@mail.da.gov.ph" 
            regCode="13" 
          />

          </ApplicationProvider>
        </ThemeContext.Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
  themeToggleButton: {
    // marginBottom: 20,
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    position: 'absolute',
    top: 10, // Adjust if needed
    right: 10, // Adjust if needed
    zIndex: 1,
  },
});
