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

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/AppStackNavigations';
import { useNavigation } from '@react-navigation/native';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { styles } from './styles';
import { Images } from '../../assets'
import MaskedEmail from '../../components/maskedEmail';

import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import AuthValidation from '../../actions/validations/authValidation';

import { InputComponent } from '../../components/inputs';

// Form Validation
import { useForm, Controller, SubmitHandler  } from 'react-hook-form'; // Custom hook of react hook form

import axios from 'axios';

type Props = NativeStackScreenProps<RootStackParamList , "Otp">

const {otpAuth} = AuthValidation;



// extract the inferred type
type OtpProps = z.infer<typeof otpAuth>;

const Otp: React.FC<Props> = ({ route }) => {
    const {userID, email} = route.params;

    // hook navigation
    const navigation = useNavigation();

    const [state, setState] = useState({      
        isLoading:false,  
        isLoadingResendButton:false
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<OtpProps>({
        // defaultValues: {
        //     otp: "123456",
        // },
        resolver: zodResolver(otpAuth),
    })
  
  
    const onSubmit: SubmitHandler<OtpProps> = async (data) => {
        const route = `http://172.17.151.11:8083/api-v3/verify-otp`;

        axios.post(route, {
            user_id: userID,
            email: email,
            otp: data.otp,
        }).then(function (res) {
            if(res.data.status == true){
                // console.log(res.data.data);

                console.log("OTP is valid!");

                // navigation.navigate('BottomTabs');
            }else{
                console.log(res.data.response);
            }
        })
        .catch(function (error) {
            console.log(error);
        }); 

        // navigation.navigate('BottomTabs'); // Use 'Profile' instead of 'ProfileScreen'
    };

    const onResendOtpPressed = () => {
        console.log('Resend OTP!');
    };

    const onBackToLogInPressed = () => {
        navigation.navigate('LogIn'); // Use 'Profile' instead of 'ProfileScreen'
    };

    const handleChangeOTP = () => {
        console.log('handle change otp!');

        // setState(prevState => ({ ...prevState, otp: { ...prevState.otp, value: value, error: false } }));
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

                <View style={styles.errorText}>
                    {errors && <Text style={styles.errorText}>{errors.otp?.message}</Text>}
                </View>
                <Controller 
                    control={control}
                    name="otp"
                    render={( {field } ) => {
                        return(
                            <CodeField                                        
                                cellCount={6}
                                value={field.value}
                                onChangeText={field.onChange}
                                rootStyle={styles.codeFieldRoot}                    
                                keyboardType="number-pad"
                                textContentType="oneTimeCode"
                                onSubmitEditing= {handleSubmit(onSubmit)}                        
                                multiline={false}
                                renderCell={({index, symbol, isFocused}) => (
                                    <Text
                                        key={index}
                                        style={[
                                        styles.cell,
                                        isFocused && styles.focusCell,
                                        symbol && styles.cellHasValue,
                                        errors.otp && styles.errorCell, // Highlight error if validation fails
                                        ]}
                                    >
                                        {symbol || (isFocused ? <Cursor /> : null)}
                                    </Text>
                                )}
                            />
                        )
                    }}
                />

                <Button style={styles.verifyBtn} onPress={handleSubmit(onSubmit)}> VERIFY </Button>
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