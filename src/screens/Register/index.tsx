import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

const RegisterScreen = () => {
    useEffect(() => {
        console.log('333', uuidv4());
    }, []);

    return (
        <View>
            <Text>Register</Text>
        </View>
    );
};

export default RegisterScreen;
