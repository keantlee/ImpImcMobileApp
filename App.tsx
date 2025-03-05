/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';

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

import { customTheme } from './src/assets/colors';

import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

// NAVIGATION STACK
import AppStack from './src/navigations/AppStackNavigations';

// ASSETS
import { ThemeContext } from './src/assets/theme';

export default (): React.ReactElement => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  const sunIcon   = () => <Icon name="sun-outline" fill="#009246" style={[styles.iconStyle]} />;
  const moonIcon  = () => <Icon name="moon-outline" fill="white" style={[styles.iconStyle]} />;
  const combinedTheme = theme === 'light' ? { ...eva.light, ...customTheme } : eva.dark;
  return (
    <>
        {/* <User userId="UUID1234" email="kentley.ong@mail.da.gov.ph" password="secret" fullName={fullname} gender="MALE" contactNo={9169382460} location={location}/>  */}

        <IconRegistry icons={EvaIconsPack}/>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {/* <ApplicationProvider {...eva} theme={eva[theme]}> */}
          <ApplicationProvider {...eva} theme={combinedTheme}>

          {/* <View style={styles.buttonContainer}>
              <Button
                appearance="ghost"
                status="info"
                accessoryLeft={theme === 'light' ? sunIcon : moonIcon}
                onPress={toggleTheme}
                style={styles.themeToggleButton}
              >
              </Button>
          </View> */}

          <AppStack />

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
    top: 10, 
    right: 10, 
    zIndex: 1,
  },
  iconStyle: {
    width: 20,  // You can adjust the size of the icon as needed
    height: 20,
  },
});
