import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// COMPONENTS

// SCREENS
import { LogIn, Otp, HomeScreen, ProfileScreen } from "../../screens";

import BottomTabNavigator from "../BottomNavigator";
import { customBottomScreenOptions } from "../BottomNavigator/customBottomScreenOptions";
import { AvaterHeader } from "../../components/header/avatar";

// Define type for navigation parameters
export type RootStackParamList  = {
    LogIn: {
        email: string;
        password: string;
    }; 
    Otp: {
        email: string,
        userID: string
    };
    Profile: undefined;
    BottomTabs: undefined;
};
  
// Create a typed stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppStack(): React.ReactElement {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="BottomTabs" // Set the initial screen name
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="LogIn" 
                              component={LogIn} 
                              options={{ headerShown: false }} 
                              initialParams={{ email: "", password: "" }}/>

                <Stack.Screen name="Otp" 
                              component={Otp} 
                              options={{ headerShown: false }} />

                <Stack.Screen name="Profile" 
                              component={ProfileScreen} 
                              options={{             
                                header: () => (
                                    <AvaterHeader
                                    fullname="Jojo Miguel C. Bardon"
                                    rsbsaNo="01-123-12-A12XH1"
                                    />
                                ), 
                                headerShown: true
                                }} />

                <Stack.Screen name="BottomTabs" 
                              component={BottomTabNavigator} 
                              options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}



