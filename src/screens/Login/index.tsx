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

interface LoginProps {
    email: string,
    id: number,
    password: string,
};

const LogIn = (props: LoginProps) => {
    const [state, setState] = useState({
        email:{
            focus:false,
            error:false,
            errorMessage:'',
            value:''
        },
        password:{
            focus:false,
            error:false,
            errorMessage:'',
            value:''
        },
        isLoading: false,
        secureTextEntry: true,
    });

    // Handle the email input change
    const onEmailChange = (value: string) => {
        setState(prevState => ({
            ...prevState,
            email: {
                ...prevState.email,
                value
            }
        }));
    };

    // Handle the password input change
    const onPasswordChange = (value: string) => {
        setState(prevState => ({
            ...prevState,
            password: {
                ...prevState.password,
                value
            }
        }));
    };

    const onLoginPressed = () => {
        let payload = {
            email: state.email.value,
            password: state.password.value,
        }
    }

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
                <Text style={styles.title}>IMC - Procurement App</Text>

                <Input
                    style={styles.input}
                    placeholder='Email'
                    value={state.email.value}  // Bind the value to state
                    onChangeText={onEmailChange}  // Handle email change
                />

                <Input
                    style={styles.input}
                    placeholder='Password'
                    value={state.password.value}  // Bind the value to state
                    onChangeText={onPasswordChange}  // Handle password change
                    secureTextEntry={state.secureTextEntry}  // Use state for secureTextEntry
                />

                <TouchableOpacity onPress={onForgotPasswordPressed}>
                    <Text style={styles.fpText}>Forgot Password?</Text>
                </TouchableOpacity>
                
                <Button style={styles.logInBtn}> LOGIN </Button>
            </Layout>
        </Layout>
    );
}

export default LogIn;