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

// COMPONENTS
import { AvaterHeader } from '../../components/header/avatar';

// ASSETS

// STYLES
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/AppStackNavigations';

type Props = NativeStackScreenProps<RootStackParamList, "Profile">

// DATA DECLARATION


// VIEW
const ProfileScreen: React.FC<Props> = ({ route, navigation }) => {
    return(
        <Layout style={styles.container}>
            <AvaterHeader 
                fullname="Jojo Miguel C. Bardon" 
                rsbsaNo="01-123-12-A12XH1"
            />
        </Layout>
    );
}

export default ProfileScreen;