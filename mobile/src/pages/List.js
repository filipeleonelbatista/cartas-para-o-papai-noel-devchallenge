import React, { useState, useEffect } from 'react';

import { View, Text, ImageBackground, StyleSheet, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { FontAwesome } from '@expo/vector-icons';

import bgImg from '../../assets/main.png';
import imgErrorNotFound from '../../assets/error.png';

import api from '../services/api';

const List = ({ route }) => {
    const navigation = useNavigation()

    const { city, state } = route.params;

    const [listLetter, setListLetter] = useState([]);

    const [show, setShow] = useState(true);

    function handleNavigateToLetter(id) {
        navigation.navigate('Letter', { id });
    }

    async function loadData() {
        const result = await api.get('letters', {
            params: {
                city: city,
                state: state
            }
        });

        const data = result.data;
        if (data.length > 0) {
            setShow(false);
            setListLetter(result.data);
        }

    }

    useEffect(() => {
        loadData();
    }, [state, city]);

    function handleGoBack() {
        setShow(true);
        setListLetter([]);
        navigation.goBack();
    }

    return (
        <ImageBackground source={bgImg} style={styles.container}>
            <SafeAreaView>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.topOpacity}></View>
                    <View style={styles.content}>
                        {
                            show
                                ? (
                                    <>
                                        <View style={styles.headerContent}>
                                            <RectButton onPress={handleGoBack} style={styles.buttonRounded}>
                                                <FontAwesome name="arrow-left" size={16} color="#FFF" />
                                            </RectButton>
                                            <Text style={styles.title}> </Text>
                                        </View>
                                        <View style={styles.descriptionContainerError}>
                                            <Text style={styles.descriptionerrorTitle}>Ops...</Text>
                                            <Text style={styles.descriptionerror}>Não foram encontradas cartinhas nesta localidade.</Text>
                                            <ImageBackground source={imgErrorNotFound} style={styles.imageError} />
                                        </View>
                                    </>
                                )
                                : (
                                    <>
                                        <View style={styles.headerContent}>
                                            <RectButton onPress={handleGoBack} style={styles.buttonRounded}>
                                                <FontAwesome name="arrow-left" size={16} color="#FFF" />
                                            </RectButton>
                                            <Text style={styles.title}>CARTINHAS</Text>
                                        </View>
                                        <View style={styles.descriptionContainer}>
                                            <Text style={styles.description}>Selecione uma cartinha na lista para atender os pedidos e fazer uma criança feliz</Text>
                                        </View>
                                        <View style={styles.listContainer}>
                                            {listLetter.map((letter, index) => {
                                                return (
                                                    <RectButton key={index} onPress={() => handleNavigateToLetter(letter.id)} style={styles.button}>
                                                        <FontAwesome style={styles.icon} name="gift" size={48} color="#FFF" />
                                                        <View style={styles.titleDesc}>
                                                            <Text style={styles.buttonText}>{letter.name}</Text>
                                                            <Text style={styles.buttonTextDesc}>{letter.city}-{letter.state}</Text>
                                                        </View>
                                                    </RectButton>
                                                );
                                            })}
                                        </View>
                                    </>
                                )
                        }

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
    imageError: {
        marginTop: 48,
        width: 200,
        height: 300,
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
    descriptionContainerError: {
        marginHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    descriptionerrorTitle: {
        marginTop: 24,
        fontFamily: 'TitanOne_400Regular',
        fontSize: 38,
        color: '#F3E67D',
        textAlign: 'center',
    },
    descriptionerror: {
        marginTop: 12,
        fontFamily: 'TitanOne_400Regular',
        fontSize: 28,
        color: '#FFF',
        textAlign: 'center',
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
    listContainer: {
        margin: 24,
    },
    button: {
        marginTop: 12,
        backgroundColor: '#579A65',
        borderRadius: 16,
        width: '100%',
        height: 64,
        alignItems: 'center',
        flexDirection: 'row'
    },
    icon: {
        marginHorizontal: 24
    },
    buttonText: {
        fontFamily: 'TitanOne_400Regular',
        fontSize: 24,
        color: '#F3E67D',
    },
    buttonTextDesc: {
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

export default List;