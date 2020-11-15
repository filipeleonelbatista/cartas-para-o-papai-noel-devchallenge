import React, { useState } from 'react';

import { View, Text, ImageBackground, TextInput, StyleSheet, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import bgImg from '../../assets/main.png';

export default function Search() {

  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const navigation = useNavigation()
  
  function handleSearch(){
    navigation.navigate('List', {city, state})
  }

  return (
    <ImageBackground source={bgImg} style={styles.container}>
      <View style={styles.topOpacity}></View>
      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>QUERIDO{'\n'}PAPAI NOEL...</Text>
          <Text style={styles.description}>Selecione a cidade e estado para ver as cartas próximas de você</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Selecione um estado</Text>
            <TextInput 
              autoCapitalize="characters" 
              maxLength={2} 
              style={styles.input}
              value={state}
              onChangeText={(text)=>{setState(text)}} />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Selecione um município</Text>
            <TextInput 
              style={styles.input}
              value={city}
              onChangeText={(text)=>{setCity(text)}} />
          </View>
        </View>
      <View style={styles.inputContainer}>
        <RectButton onPress={handleSearch} style={styles.button}>
          <Text style={styles.buttonText}>Pesquisar</Text>
        </RectButton>
      </View>

      </View>
    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  topOpacity: {
    height: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  content: {
    marginTop: 100,
  },
  contentTitle: {
    marginHorizontal: 24,
  },
  title: {
    fontFamily: 'TitanOne_400Regular',
    fontSize: 38,
    color: '#F3E67D',
  },
  description: {
    marginTop: 18,
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    color: '#FFF',
  },
  label: {
    marginTop: 18,
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    color: '#FFF',
  },
  inputContainer: {
    marginHorizontal: 24,
    marginTop: 32,
  },
  inputGroup: {
    marginTop: 12,
  },
  input: {
    marginTop: 12,
    paddingHorizontal: 12,
    backgroundColor: '#FFF',
    borderColor: "#999",
    borderRadius: 16,
    width: '100%',
    height: 64,
    borderWidth: 1

  },
  button: {
    marginTop: 12,
    backgroundColor: '#D52D3C',
    borderColor: "#BF2A37",
    borderRadius: 16,
    width: '100%',
    height: 64,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    color: '#FFF',
  },
})


{/* <View>
            <Text>Selecione um estado</Text>
            <Picker
              selectedValue={state}
              onValueChange={(state, itemIndex) =>
                setState(state)
              }>
              {
               stateList.map((option, index) => {
                 return (
                  <Picker.Item key={index} label={option.name} value={option.sigla} />
                 );
               }) 
              }
            </Picker>
            <Text>Selecione um município</Text>
            <Picker
              selectedValue={city}
              onValueChange={(city, itemIndex) =>
                setCity(city)
              }>
              {
               cityList.map((option, index) => {
                 return (
                  <Picker.Item key={index} label={option.name} value={option.name} />
                 );
               }) 
              }
            </Picker>
            <TouchableOpacity>
              <Text>Pesquisar</Text>
            </TouchableOpacity>
          </View> */}