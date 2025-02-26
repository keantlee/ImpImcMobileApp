import React from 'react'
import {
    ApplicationProvider,
    Button,
    Icon,
    IconRegistry,
    Layout,
    Text,
    Input,
} from '@ui-kitten/components';
import { View, TextInput, StyleSheet } from 'react-native'
import { Controller, Control } from 'react-hook-form'

interface loginFieldProps {
    control: Control<LogInProps>;
    name: string;
    // rules?: Record<string, unknown>;
    placeholder: string;
    secureTextEntry: boolean;
}

/**
 * field = is a react-hook-form property
 *       = its an object contain event handlers
 */

export const InputComponent: React.FC<loginFieldProps> = ({
    control,
    name,
    // rules = {},
    placeholder,
    secureTextEntry,
}) => { 
    return(
        <Controller 
            control={control}
            name={name}
            // rules={rules}
            render={( {field , fieldState: {error}} ) => {
                return(
                    <View>
                            <Input 
                                style={[styles.input, {borderColor: error ? 'red' : 'black'}]}
                                value={field.value} 
                                onChangeText={field.onChange}
                                onBlur={field.onBlur} 
                                placeholder={placeholder}
                                secureTextEntry={secureTextEntry}
                            />
                        <View style={styles.errorContainer}>
                            {error && <Text style={styles.errorText}>{error.message}</Text>}
                        </View>
                    </View>
                );
            }}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 25,
        width: '70%',
        height: 2,
        borderRadius: 10
    },
    errorContainer: {
        paddingHorizontal: 30, // Adjust the left margin for better separation
        borderRadius: 1,
        borderColor:'red',
    },
    errorText: {
        marginTop:12,
        color: 'red',
        fontStyle: 'italic',
        fontSize: 13,
    },
});