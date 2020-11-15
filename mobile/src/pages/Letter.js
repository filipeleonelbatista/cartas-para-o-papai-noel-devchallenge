import React, { useState, useEffect } from 'react';

import { View, Text, ImageBackground, StyleSheet, Dimensions, ScrollView, SafeAreaView, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { FontAwesome } from '@expo/vector-icons';

import bgImg from '../../assets/main.png';

import api from '../services/api';

const Letter = ({ route }) => {
    const navigation = useNavigation()

    const { id } = route.params;

    const [letter, setLetter] = useState([]);


    async function loadData() {
        const result = await api.get(`letters/${id}`);

        const data = result.data;
        if (data.length > 0) {
            setLetter(data[0]);
        }

    }

    useEffect(() => {
        loadData();
    }, [id]);

    function handleGoBack() {
        setLetter([]);
        navigation.navigate('Search');
    }

    function handleDeepLink(){
        if(letter.whatsapp == ''){
            Linking.openURL(`mailto:${letter.email}`)
        }else{
            Linking.openURL(`https://wa.me/${letter.whatsapp}`)
        }
    }

    return (
        <ImageBackground source={bgImg} style={styles.container}>
            <SafeAreaView>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.topOpacity}></View>
                    <View style={styles.content}>
                        <View style={styles.headerContent}>
                            <RectButton onPress={handleGoBack} style={styles.buttonRounded}>
                                <FontAwesome name="arrow-left" size={16} color="#FFF" />
                            </RectButton>
                            <Text style={styles.title}>{letter.name}</Text>
                        </View>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.description}>{letter.city}-{letter.state}</Text>
                        </View>
                        <View style={styles.letterContainer}>
                            <Text style={styles.letterText}>{letter.letter}</Text>
                        </View>
                        <RectButton onPress={handleDeepLink} style={styles.button}>
                            <Text style={styles.buttonText}>Entrar em contato</Text>
                        </RectButton>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    scrollView: {
        paddingBottom: 24
    },
    topOpacity: {
        height: 24,
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    content: {
        marginTop: 100,
    },
    headerContent: {
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    descriptionContainer: {
        marginHorizontal: 24
    },
    title: {
        fontFamily: 'TitanOne_400Regular',
        fontSize: 38,
        color: '#F3E67D',
        textAlign: 'right',
    },
    description: {
        marginTop: 18,
        fontFamily: 'Roboto_400Regular',
        fontSize: 18,
        color: '#FFF',
        textAlign: 'right',
    },
    letterContainer: {
        marginHorizontal: 24,
        paddingHorizontal: 24,
        marginTop: 12,
        backgroundColor: '#579A65',
        borderRadius: 16,
        width: 'auto',
        height: 'auto',
        minHeight: 64,
    },
    letterText: {
        margin: 12,
        fontFamily: 'Roboto_400Regular',
        fontSize: 18,
        color: '#FFF',
    },
    button: {
        margin: 24,
        backgroundColor: '#D52D3C',
        borderRadius: 16,
        width: 'auto',
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    icon: {
        marginHorizontal: 24
    },
    buttonText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 18,
        color: '#FFF',
    },
    buttonRounded: {
        marginTop: 12,
        backgroundColor: '#579A65',
        borderRadius: 32,
        width: 64,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonRoundedText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 18,
        color: '#FFF',
    },
});

export default Letter;