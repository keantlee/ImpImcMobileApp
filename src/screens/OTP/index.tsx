import React, { useState, useEffect } from 'react';
import { View, Image, Pressable, TouchableOpacity } from 'react-native';
import {
    ApplicationProvider,
    Button,
    Icon,
    IconRegistry,
    Layout,
    Input,
    Text,
    IconElement
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { styles } from './styles';
import { Images } from '../../assets'
import MaskedEmail from '../../components/maskedEmail';

interface OtpProps {
    otp: number,
};

const Otp = (props: OtpProps) => {
    const [state, setState] = useState({
        otp:{
            focus:false,
            error:false,
            errorMessage:'',
            value:''
        },
        email:'',        
        isLoading:false,  
        isLoadingResendButton:false
    });
  
    const onSubmitOtpPressed = () => {
        console.warn('Submit OTP!');
    };

    const onResendOtpPressed = () => {
        console.warn('Resend OTP!');
    };

    const onBackToLogInPressed = () => {
        console.warn('Back to LogIn Screen!');
    };

    const handleChangeOTP = (value) => {
        console.warn('handle change otp!');
        setState(prevState => ({ ...prevState, otp: { ...prevState.otp, value: value, error: false } }));
    };

    return(
         <Layout style={styles.container}>
            <Layout style={styles.subContainer}>
                <Image
                    style={styles.logo}                        
                    source={Images.logos.otpLogo}
                    resizeMode={"contain"}                      
                />

                <Layout style={styles.otpVerificationTitleContainer}>
                    <Text style={ styles.textTitle }> OTP Verification </Text>
                    <Text style={ styles.text }>Enter the 6-digit code send to  {'\n'} <MaskedEmail email="kentley.ong@mail.da.gov.ph" /> </Text>
                </Layout>

                <CodeField                                        
                    cellCount={6}
                    value={state.otp.value}
                    onChangeText={handleChangeOTP}
                    rootStyle={styles.codeFieldRoot}                    
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    onSubmitEditing= {onSubmitOtpPressed}                        
                    multiline={false}
                    renderCell={({index, symbol, isFocused}) => (
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell, symbol && styles.cellHasValue , state.otp.error && styles.errorCell ]}                                                         
                        >                                                 
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />

                <Button style={styles.verifyBtn}> VERIFY </Button>
                <View style={styles.row}>
                    <View style={styles.row}>
                        <Text style={styles.link} onPress={onResendOtpPressed} > Resend OTP </Text> 
                        <Text style={styles.link} onPress={onBackToLogInPressed}> Back to Log In </Text> 
                    </View>
                </View>
            </Layout>
         </Layout>
    );
}

export default Otp;