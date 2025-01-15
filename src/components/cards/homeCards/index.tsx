import React, { useState, useEffect } from "react";

import { 
    StyleSheet, 
    View, 
    Image, 
    RefreshControl, 
    useColorScheme, 
    TouchableOpacity, 
    ScrollView, 
    Pressable,
    FlatList
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

import FastImage  from 'react-native-fast-image';

import images from "../../../assets/images";

// STYLES
import { transactionStyles } from "../styles/transactionCards";
import { amountBalanceCardStyles } from "../styles/amountBalanceCard";
import { moduleCardsStyles } from "../styles/moduleCards";

interface RenderBalanceProps {
    availableAmount: string;
    balanceVisible: boolean;
    eyeCloseIcon: React.ReactNode;
    eyeOnIcon: React.ReactNode;
    toggleBalanceVisibility: () => void;
};

export const RenderBalanceCard: React.FC<RenderBalanceProps> = ({
    availableAmount,
    balanceVisible,
    eyeCloseIcon,
    eyeOnIcon,
    toggleBalanceVisibility,
}) => {   return(
        <View style={amountBalanceCardStyles.amountBalanceContent}>
            <View style={amountBalanceCardStyles.balanceContainer}>
                <Text category='s2' style={amountBalanceCardStyles.balanceText}>
                    Available Balance
                </Text>
                <TouchableOpacity onPress={toggleBalanceVisibility} style={amountBalanceCardStyles.eyeButton}>
                    {balanceVisible ? eyeCloseIcon : eyeOnIcon}
                </TouchableOpacity>
            </View>
            <Text style={amountBalanceCardStyles.amountContainer}>
                <Text style={amountBalanceCardStyles.currencyText}>PHP </Text>
                <Text style={amountBalanceCardStyles.amountText}>{balanceVisible ? availableAmount : '********'}</Text>
            </Text>
        </View>
    );
}

interface RenderModuleProps {
    handleViewAllTransactionHistory: () => void;
    handleViewRegisteredPrograms: () => void;
};

export const RenderModules: React.FC<RenderModuleProps> = ({
    handleViewAllTransactionHistory, 
    handleViewRegisteredPrograms
}) => {
    return(
        <View style={moduleCardsStyles.modulesContainerPerItemRow}>
            <Pressable style={moduleCardsStyles.moduleItem} onPress={ handleViewAllTransactionHistory }>
                <View style={moduleCardsStyles.moduleCards}>
                    <FastImage
                        style={moduleCardsStyles.moduleImage}
                        source = { images.transactionImg } 
                        resizeMode={FastImage.resizeMode.cover}
                    >
                    <View style={moduleCardsStyles.moduleCardOverlay}>
                        <Text style={moduleCardsStyles.moduleTitle}>Transactions</Text>
                    </View>
                    </FastImage>
                </View>
            </Pressable>

            <Pressable style={moduleCardsStyles.moduleItem} onPress={ handleViewRegisteredPrograms }>
                <View style={moduleCardsStyles.moduleCards}>
                    <View style={moduleCardsStyles.moduleCardOverlay}>
                        <Text style={moduleCardsStyles.moduleTitle}>Programs</Text>
                    </View>
                </View>
            </Pressable>

            <Pressable style={moduleCardsStyles.moduleItem}>
                <View style={moduleCardsStyles.moduleCards}>
                    <View style={moduleCardsStyles.moduleCardOverlay}>
                        <Text style={moduleCardsStyles.moduleTitle}>Module Box</Text>
                    </View>
                </View>
            </Pressable>

            <Pressable style={moduleCardsStyles.moduleItem}>
                <View style={moduleCardsStyles.moduleCards}>
                    <View style={moduleCardsStyles.moduleCardOverlay}>
                        <Text style={moduleCardsStyles.moduleTitle}>Module Box</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

interface RenderLatestTransactionProps {
    refNo: string;
    rsbsaNo: string;
    transactionID: string;
    transac_date: string;
    onViewTransaction: () => void;
};

export const RenderLatestTransaction: React.FC<RenderLatestTransactionProps> = ({
    refNo, 
    rsbsaNo,
    transactionID,
    transac_date,
    onViewTransaction
}) => {
    return( 
        <Layout style={{marginHorizontal:5, marginBottom:20}}>
            <Pressable onPress={ onViewTransaction }>
                <View style={{ flexDirection:'column', top: 2, marginBottom:30}}>
                    <View style={{ flexDirection:'row',  }}>
                        <FastImage style = { [transactionStyles.transImg] } source = { images.transactionImg } resizeMode = { FastImage.resizeMode.cover } />

                        <View style={[]}>
                            <View style={[]}>
                                <Text style={[]}> </Text>
                                <Text style={[]}> </Text>
                            </View>
                            <View style={{position: 'absolute', left: 210}}>
                                <Text style={[]}> </Text>
                                {/* { 
                                    !moment(transac_date, 'YYYY-MM-DD HH:mm:ss').isValid() ? 
                                    <Text style={[styles.transactNameText, { color: Colors.dark_tint }]}>{ moment(transac_date, 'YYYY-MM-DD HH:mm:ss').format('MMMM DD, YYYY, h:mm a') } </Text> 
                                    : 
                                    ( <Moment element={Text} style={[{ color: Colors.dark_tint,fontSize:11 }]} fromNow>{transac_date}</Moment> )
                                } 
                                {   (ishold == 1 && isremove == 0) ?
                                        <Text style={[styles.transactDateText, { color: Colors.dark_tint }]}>Status: RETURNED</Text> :
                                    (ishold == 0 && isremove == 1) ? 
                                        <Text style={[styles.transactDateText, { color: Colors.dark_tint }]}>Status: HOLD</Text> :
                                        <Text style={[styles.transactDateText, { color: Colors.dark_tint }]}>Status: NONE</Text> 
                                } */}
                            </View>
                        </View>
                    </View>
                </View>
            </Pressable>
         </Layout>
     );
}