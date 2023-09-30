import React, { useEffect, useState } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { ContainerMainPage } from '../../global/styles/theme';
import { RootStackScreenProps } from '../../@types/navigation';

const MyCardsScreen = ({
    navigation,
}: RootStackScreenProps<'MyCards'>) => {
    useEffect(() => {
        console.log('333', uuidv4());
    }, []);

    return (
        <ContainerMainPage>
            <View
                style={{
                    marginTop: Platform.OS === 'android' ? 30 : 64,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: "center",
                }}
            >
                <Text style={{ color: "white", fontSize: 20, fontWeight: "400" }}>
                    Wallet Test
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Text>meus cartões</Text>
                </TouchableOpacity>
            </View>
        </ContainerMainPage>
    );
};

export default MyCardsScreen;
