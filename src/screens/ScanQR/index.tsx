import React, { useState, useEffect } from 'react';

import { 
    StyleSheet, 
    View, 
    Image, 
    RefreshControl, 
    useColorScheme, 
    TouchableOpacity, 
    ScrollView, 
    Pressable,
    FlatList,
    ViewProps,
} from "react-native";

import {
    ApplicationProvider,
    Button,
    Icon,
    IconRegistry,
    IconElement,
    Layout,
    Text,
    Input,
    Avatar,
    Card,
    ListItem,
    List,
} from '@ui-kitten/components';

import { 
    Camera, 
    Code, 
    CodeScanner, 
    useCameraDevice, 
    useCameraPermission, 
    useCodeScanner 
} from 'react-native-vision-camera';

// COMPONENTS

// ASSETS

// STYLES
import { styles } from './styles';

// DATA DECLARATION


// VIEW
const QRScreen = () => {
    const device = useCameraDevice('back');
    const { hasPermission, requestPermission } = useCameraPermission();

    useEffect(() => {
        requestPermission();
    }, []);

    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes: Code[]) => {
          console.log(`${codes[0].value}`)
        }
    });

    if (!hasPermission){
        return(
            <View>
                <Text>Does not have to permission to open camera!</Text>
            </View>
        )
    }
    if (device == null){
        return(
            <View>
                <Text>Device not found!</Text>
            </View>
        )
    }
    return (
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        codeScanner={codeScanner}
      />
    )
}

export default QRScreen;