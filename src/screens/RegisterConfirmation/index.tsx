import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { v4 as uuidv4 } from "uuid";

const RegisterConfirmationScreen = () => {
    useEffect(() => {
        console.log("333", uuidv4());
    }, []);

    return (
        <View>
            <Text>RegisterConfirmation</Text>
        </View>
    );
};

export default RegisterConfirmationScreen;
