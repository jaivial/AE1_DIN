import * as React from 'react';
import { useState } from 'react';
import { Text, Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ButtonsBody = () => {
    const botones = [
        {
            text: 'Camara',
            nombreIcono: 'camera',
        },
        {
            text: 'AirPlay',
            nombreIcono: 'airplay',
        },
        {
            text: 'Bluetooth',
            nombreIcono: 'bluetooth',
        },
    ];

    const [estadosBoton, setEstadosBoton] = useState(botones.map( () => ({
        colorBoton: 'purple',
        colorTextoBoton: 'white',
    }))
    );
}

export default ButtonsBody;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        display: 'flex',
        width: '100%',
        height: 'auto',

        justifyContent: 'flex-start',
        backgroundColor: 'black',
    },
    estiloButtons: {
        backgroundColor: "purple",
        marginBottom: 10,
    },
    tituloButtons: {
        marginBottom: 10,
        color: 'white',
        fontSize: 20,
        fontWeight: 900,
    },
});