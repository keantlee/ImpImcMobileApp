import React, { useState, useEffect } from 'react';
import { View, Image, Pressable, TouchableOpacity } from 'react-native';

import {
    ApplicationProvider,
    Button,
    Icon,
    IconRegistry,
    Layout,
    Text,
    Input,
} from '@ui-kitten/components';

import { styles } from './styles';
import { Images } from '../../assets';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList  } from '../../navigations/AppStackNavigations';
import { useNavigation } from '@react-navigation/native';

import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import AuthValidation from '../../actions/validations/authValidation';

import { InputComponent } from '../../components/inputs';

// Form Validation
import { useForm, Controller, SubmitHandler  } from 'react-hook-form'; // Custom hook of react hook form

import axios from 'axios';

type Props = NativeStackScreenProps<RootStackParamList , "LogIn">

const {logInAuth} = AuthValidation;

// extract the inferred type
type LogInProps = z.infer<typeof logInAuth>;

const LogIn: React.FC<Props> = () => {
    // hook navigation
    const navigation = useNavigation();

    const [state, setState] = useState({      
        isLoading:false,  
        isLoadingResendButton:false
    });

    /**
     * control =
     * formState = access the state of the input. also the validation errors.
     * Controller
     */
    const {
        control,
        handleSubmit,
        formState,
    } = useForm<LogInProps>({
        defaultValues: {
            email: "zzdaddy39@gmail.com",
            password: "P@ssw0rd",
        },
        resolver: zodResolver(logInAuth),
    })

    const onSubmit: SubmitHandler<LogInProps> = async (data) => {
        const route = `http://172.17.151.11:8083/api-v3/login`;

        axios.post(route, {
            email: data.email,
            password: data.password,
        }).then(function (res) {
            if(res.data.status == true){
                // console.log(res.data.data);
                console.log("OTP has been sent!");
                
                const { user_id, email } = res.data.data;
                
                const userParams = {
                    userID: user_id,
                    email:  email,
                }

                // console.log(userParams);

                // setTimeout(() => {
                    navigation.navigate('Otp', userParams);
                // }, 1200);
            }else{
                console.log(res.data.response);
            }
        })
        .catch(function (error) {
            console.log(error);
        }); 
    };

    const onForgotPasswordPressed = () => {
        console.warn("Click forgot password");
    }

    return(
        <Layout style={styles.container}>
            <Layout style={styles.subContainer}>
   
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}                        
                        source={Images.logos.daLogo}
                        resizeMode={"contain"}                      
                    />
                </View>   

                <Text style={styles.title}>Intervention Management Platform</Text>
                {/* <Text style={styles.title}>IMC - Procurement App</Text> */}

                <InputComponent name="email" placeholder="Email" control={control} secureTextEntry={false} />
                <InputComponent name="password" placeholder="Password" control={control} secureTextEntry />

                <TouchableOpacity onPress={onForgotPasswordPressed}>
                    <Text style={styles.fpText}>Forgot Password?</Text>
                </TouchableOpacity>
                
                <Button style={styles.logInBtn} onPress={handleSubmit(onSubmit)}>
                    LOGIN
                </Button>
            </Layout>
        </Layout>
    );
}

export default LogIn;