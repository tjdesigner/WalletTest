/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { v4 as uuidv4 } from 'uuid';

import { HomeScreen } from './screens';
import { ThemeProvider } from 'styled-components';
import theme from './global/styles/theme';
import Routes from './routes';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [data, setData] = useState([]);
  const [dataItem, setDataItem] = useState({
    id: '',
    number: '',
    cvv: '',
    name: '',
  });

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const saveApiData = async () => {
    console.log('111', dataItem);
    const newData = {
      id: dataItem.id,
      number: dataItem.number,
      cvv: dataItem.cvv,
      name: dataItem.name,
    };
    console.log('222', newData);

    const URL = 'http://localhost:3000/cards';
    let result = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });

    const dataResult = await result.json();
    return dataResult;
  };

  const getApiData = async () => {
    const URL = 'http://localhost:3000/cards';
    let result = await fetch(URL);
    const dataResult = await result.json();
    setData(dataResult);
  };

  //const handleAddCard = () => { };

  useEffect(() => {
    console.log('333', uuidv4());
    getApiData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent={true}
        animated={true}
      />
      {/* <SafeAreaView
        style={[
          backgroundStyle,
          { flex: 1, backgroundColor: theme.colors.primary },
        ]}
      > */}
      <Routes />

      {/* <View>
          {data.length
            ? data?.map(item => {
              return <Text key={item.id}>{item.number}</Text>;
            })
            : null}
        </View>
        <TextInput
          value={dataItem.number}
          placeholder="Number of Card"
          onChangeText={value => setDataItem({ ...dataItem, number: value })}
        />
        <TextInput
          value={dataItem.cvv}
          placeholder="CVC of Card"
          onChangeText={value =>
            setDataItem({ ...dataItem, cvv: value.toString() })
          }
        />
        <TextInput
          value={dataItem.name}
          placeholder="Name of Card"
          onChangeText={value => setDataItem({ ...dataItem, name: value })}
        />
        <TouchableOpacity onPress={saveApiData}>
          <Text>Add Card</Text>
        </TouchableOpacity> */}
      {/* </SafeAreaView> */}
    </ThemeProvider>
  );
}

export default App;
