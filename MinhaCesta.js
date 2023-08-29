import React from "react";
import { FlatList, SafeAreaView } from "react-native";

import {Text} from "react-native";

import Texto from '../src/componentes/Texto';
import Item from './Item';

const produtos=[
    {
        id:1,
        nome: "CROCHÊ INVERNO",
        preco: 79.9,
        descricao: "Roupas de crochê típicas do inverno."
    },
    {
        id:2,
        nome: "CROCHÊ VERÃO",
        preco: 79.9,
        descricao: "Roupas de crochê típicas do verão."
    },
    {
        id:3,
        nome: "CROCHÊ ESTAÇÕES",
        preco: 99.9,
        descricao: "Roupas de crochê da estação vigente."
    },
];



export default function MinhaCesta(){
    return <SafeAreaView>
        <FlatList
            data={produtos}
            renderItem={({item})=>(<Item {...item}/>)}
            keyExtractor={({id})=>(String(id))}
        />
        
    </SafeAreaView>

}

