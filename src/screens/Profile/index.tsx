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
    Menu, 
    MenuItem, 
    MenuProps
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

const ForwardIcon = (props): IconElement => (
    <Icon
      {...props}
      name='arrow-ios-forward'
    />
  );

  const useMenuState = (initialState = null): MenuProps => {
    const [selectedIndex, setSelectedIndex] = React.useState(initialState);
    return { selectedIndex, onSelect: setSelectedIndex };
  };

// VIEW
const ProfileScreen: React.FC<Props> = ({ route, navigation }) => {
    const leftMenuState = useMenuState();
    const rightMenuState = useMenuState();
    
    return(
        <Layout style={styles.container}>
            {/* <View style={{backgroundColor: '#ffffff'}}> */}
                {/* <AvaterHeader 
                    fullname="Jojo Miguel C. Bardon" 
                    rsbsaNo="01-123-12-A12XH1"
                /> */}
            {/* </View> */}

            <Layout style={styles.menuContainer}>
                <Menu
                    style={styles.menu}
                    {...rightMenuState}
                >
                    <MenuItem
                        style={{backgroundColor: '#ffffff'}}
                        title='My Profile'
                        accessoryRight={ForwardIcon}
                    />
                    <MenuItem
                        style={{backgroundColor: '#ffffff'}}
                        title='Account Security'
                        accessoryRight={ForwardIcon}
                    />
                    <MenuItem
                        style={{backgroundColor: '#ffffff'}}
                        title='Data Privacy'
                        accessoryRight={ForwardIcon}
                    />
                    <MenuItem
                        style={{backgroundColor: '#ffffff'}}
                        title='Documents'
                        accessoryRight={ForwardIcon}
                    />
                </Menu>
            </Layout>
        </Layout>
    );
}

export default ProfileScreen;