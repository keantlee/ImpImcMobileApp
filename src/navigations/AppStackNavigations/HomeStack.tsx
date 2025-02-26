// import React from "react";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // Screens
// import { ProfileScreen } from "../../screens";
// import { navHeaderTitleOptions } from "../../components/header/navHeaderTitleOptions";

// // Define type for navigation parameters
// export type RootStackParams = {
//     Profile: {}; 
// };

// // Create a typed stack navigator
// const Stack = createNativeStackNavigator<RootStackParams>();

// export default function HomeStack(): React.ReactElement {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName='Profile' screenOptions={{ headerShown: false }}>
//                 <Stack.Screen name="Profile" 
//                               component={ProfileScreen} 
//                               options={{ headerShown: true }} />

//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }