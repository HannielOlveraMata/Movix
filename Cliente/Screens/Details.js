import React from 'react';
import { useSelector } from 'react-redux';
import { handleIntegrationMP } from './MpIntegracion';
import { openBrowserAsync } from "expo-web-browser";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Details = () => {
    const celSelect = useSelector(state => state.celSlice.selectItem);

    const handleBuy = async () => {
        const data = await handleIntegrationMP(celSelect);
        if (!data) {
            return console.log("Ha ocurrido un error");
        }
        openBrowserAsync(data);
    }

    // Verifica si celSelect es null antes de acceder a sus propiedades
    if (!celSelect) {
        return (
            <View style={styles.container}>
                <Text>No se ha seleccionado ningún celular</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{celSelect.name}</Text>

            <Image style={styles.img} source={{ uri: celSelect.imagen }} />

            <View style={styles.containerRow}>
                <Text style={styles.descriptionName}>Modelo:</Text>
                <Text style={styles.description}>{celSelect.modelo}</Text>
            </View>

            <View style={styles.containerRow}>
                <Text style={styles.descriptionName}>Camara Frontal:</Text>
                <Text style={styles.description}>{celSelect.CamaraFrente}</Text>
            </View>

            <View style={styles.containerRow}>
                <Text style={styles.descriptionName}>Camara Trasera:</Text>
                <Text style={styles.description}>{celSelect.CamaraTrasera}</Text>
            </View>

            <View style={styles.containerRow}>
                <Text style={styles.descriptionName}>Memoria Ram:</Text>
                <Text style={styles.description}>{celSelect.MemoriaRam}</Text>
            </View>

            <View style={styles.containerRow}>
                <Text style={styles.descriptionName}>Procesador: </Text>
                <Text style={styles.description}>{celSelect.Procesador}</Text>
            </View>

            <View style={styles.containerRow}>
                <Text style={styles.descriptionName}>Precio:</Text>
                <Text style={styles.description}>{celSelect.price}</Text>
            </View>

            <TouchableOpacity style={styles.btn} onPress={handleBuy}>
                <Text>Comprar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    img: {
        width: "90%",
        height: 300,
        borderWidth: 1,
        backgroundColor: "#ffffff"
    },
    containerRow: {
        flexDirection: 'row',
        width: "90%",
        backgroundColor: "#ffffff"
    },
    name: {
        fontSize: 20,
        borderWidth: 1,
        width: "90%",
        textAlign: 'center',
        paddingVertical: 10,
        marginTop: 10,
        backgroundColor: "#ffffff"
    },
    descriptionName: {
        flex: 1,
        borderWidth: 1,
        fontSize: 16,
        textAlign: 'center',
    },
    description: {
        flex: 1,
        borderWidth: 1,
        fontSize: 16,
        textAlign: 'center',
    },
    btn: {
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        marginTop: 10,
        borderWidth: 1,
        backgroundColor: "#ffffff"
    }
});
