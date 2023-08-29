import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    nome: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 16,
    },
    desc: {
        color: 'black',
        fontSize: 16,
        marginRight: 8,
    },
    preco: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: 8,
    },

    margin: {
        marginTop: 50,

    },

    listadesejos: {
        paddingHorizontal: 24,
        paddingBottom: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexWrap: 'wrap',
    },

    posicao: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        flexWrap: 'wrap',
    },

    divisor: {
        marginHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'purple',
    }
});
