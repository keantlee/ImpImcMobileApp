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

// IMPORT UI-KITTEN COMPONENTS
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

import icons from "../../assets/icons";

import { styles } from './styles';

interface avatarProps {
    fullname: string;
    rsbsaNo: string;
};

export const AvaterHeader: React.FC<avatarProps> = ({
    fullname,
    rsbsaNo,
}) => {   return(
    <View style={styles.avatarContainer}>
        <Avatar
            style={styles.avatar}
            size='small'
            source={icons.userIcon}
        />
        <View style={styles.textContainer}>
            <Text style={styles.fullNameText}>
                {fullname}
            </Text>
            <Text category='c1' style={styles.rsbsaNumberText}>
                {rsbsaNo}
            </Text>
        </View>
    </View>
    );
}