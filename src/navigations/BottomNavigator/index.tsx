import React, { useEffect, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'; // Import the correct type
import * as Animatable from 'react-native-animatable';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList  } from '../AppStackNavigations';
import { BottomNavigation, BottomNavigationTab, BottomNavigationProps, Layout, Text, Icon, IconElement, useTheme  } from '@ui-kitten/components';

// routes
import BottomTabRoutesData from '../../routes/BottomTabRoutes';

import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList , "BottomTabs">

const BottomTab = createBottomTabNavigator();

// Explicitly type the props for BottomTabBar using BottomTabBarProps
// Bottom Tab Bar Component
const BottomTabBar: React.FC<BottomTabBarProps> = ({ navigation, state }) => (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}>
      {state.routes.map((route, idx) => {
        // Find the corresponding route config from BottomTabRoutesData
        const routeConfig = BottomTabRoutesData.find((r) => r.route === route.name);
        return (
          <BottomNavigationTab
            key={idx}
            title={routeConfig?.label || route.name}
            icon={routeConfig?.icon || undefined}
          />
        );
      })}
    </BottomNavigation>
);

const BottomTabNavigator =() => {   
    // Bottom tabs route
    // Define the TabRouteDataOptions function to generate options for screens
    const TabRouteDataOptions = (headerShown: boolean): BottomTabNavigationOptions => ({
        headerStyle: {
            backgroundColor: '#77BBf5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerTitleAlign: 'center', // Correct type literal
        headerShown,
        tabBarShowLabel: false,
    });

    return (
        <BottomTab.Navigator
          tabBar={(props) => <BottomTabBar {...props} />}
          screenOptions={{
            tabBarStyle: styles.tabBar,
          }}>
          {BottomTabRoutesData.map((item, index) => (
            <BottomTab.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                ...TabRouteDataOptions(item.headerShown),
              }}
            />
          ))}
        </BottomTab.Navigator>
    );
}

export default BottomTabNavigator;