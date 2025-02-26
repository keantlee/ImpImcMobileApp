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

import { useNavigation } from '@react-navigation/native';

// COMPONENTS
import { homeCards } from '../../components/cards';
import { AvaterHeader } from '../../components/header/avatar';

// ASSETS
import icons from '../../assets/icons';
import images from '../../assets/images';

// STYLES
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigations/AppStackNavigations';

type HomeProps = NativeStackScreenProps<RootStackParams, "HomeScreen">

interface IListItem {
    refNo: string;
    transactDate: string;
}

const data = new Array(8).fill({
    refNo: 'Reference No.',
    transactDate: 'Transaction Date',
});

const HomeScreen: React.FC<HomeProps> = ({ route })  => {
    const { RenderBalanceCard, RenderModules, RenderLatestTransaction } = homeCards;

    const navigation = useNavigation();

    const arrowIcon = () => <Icon name="chevron-right-outline" style={[styles.iconStyle]}/>
    
    const Header = (props: ViewProps): React.ReactElement => (
        <View {...props}>
          <Text category='s2'>
            Available Balance 
          </Text>
          <Text category='h5'>
            PHP 5,000.00
          </Text>
        </View>
    );
    
    const Footer = (props: ViewProps): React.ReactElement => (
        <View
          {...props}
          // eslint-disable-next-line react/prop-types
          style={[props.style, styles.footerContainer]}
        >
          <Button
            style={styles.footerControl}
            size='small'
            status='basic'
          >
            CANCEL
          </Button>
    
          <Button
            style={styles.footerControl}
            size='small'
          >
            ACCEPT
          </Button>
        </View>
    );
    
    const renderTransactionItemAccessory = (): React.ReactElement => (
      <TouchableOpacity onPress={viewSelectedTransaction} style={styles.eyeButton}>
        {arrowIcon()}
      </TouchableOpacity>
    );
    
    const handleProfile = () => {
      console.warn('Go to Profile');  
      navigation.navigate('Profile'); // Use 'Profile' instead of 'ProfileScreen'
    };
    
    const handleViewAllTransactionHistory = () => {
      console.warn('View All Transaction History');
    };
    
    const handleViewRegisteredPrograms = () => {
      console.warn('View Registered Programs');
    };
    
    const renderTransactionItemIcon = (): IconElement => (
      <Icon name='person' style={[styles.iconStyle]}/>
    );
    
    const renderLatestTransactionItem = ({ item, index }: { item: IListItem; index: number }): React.ReactElement => (
        <ListItem
          title={`${item.refNo} ${index + 1}`}
          description={`${item.transactDate} ${index + 1}`}
          accessoryLeft={renderTransactionItemIcon}
          accessoryRight={renderTransactionItemAccessory}
        />
    );  
    
    const viewSelectedTransaction = () => {
        console.warn('View selected transaction');
    }

    const eyeIcon    = () => <Icon name="eye-outline" style={[styles.iconStyle]} />;
    const eyeOffIcon = () => <Icon name="eye-off-outline" style={[styles.iconStyle]} />;
    
    const [balanceVisible, setBalanceVisible] = useState(false);

    const toggleBalanceVisibility = () => {
        setBalanceVisible(!balanceVisible);
    };

    return(
        <Layout style={styles.container}>
            <TouchableOpacity onPress={handleProfile}>
              <AvaterHeader 
                fullname="Jojo Miguel C. Bardon" 
                rsbsaNo="01-123-12-A12XH1"
              />
            </TouchableOpacity>

            {/* First Card */}
            <Card style={styles.card1}>
              <RenderBalanceCard 
                 availableAmount="5000.00"
                 balanceVisible={balanceVisible}
                 eyeCloseIcon={eyeIcon()}
                 eyeOnIcon={eyeOffIcon()}
                 toggleBalanceVisibility={toggleBalanceVisibility}
              />
            </Card>

            {/* Second Card */}
            <Card style={styles.card2}>
              <RenderModules 
                handleViewAllTransactionHistory = {handleViewAllTransactionHistory}
                handleViewRegisteredPrograms = {handleViewRegisteredPrograms}
              />
            </Card>

            {/* Third Card */}
            <Card style={styles.card3}>
              <Text>
                  Transaction History
              </Text>
              <List
                style={styles.lastestTransactionStyle}
                data={data}
                renderItem={renderLatestTransactionItem}
              />
          </Card>
        </Layout>
    );
}

export default HomeScreen;