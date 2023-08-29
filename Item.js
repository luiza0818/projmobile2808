import React, {useState} from "react";
import { View, TextInput, Button } from "react-native";

import Texto from '../src/componentes/Texto';
import estiloMinhaCesta from "./estiloMinhaCesta";
import CampoInteiro from "../src/componentes/CampoInteiro";

export default function Item({nome, descricao, preco}){

    const [quantidade, setQuantidade] = useState(1);
    const [total, setTotal] = useState(preco);

    const calculaTotal = (quantidade) => {
        setTotal(quantidade * preco);
    }

    const atualizaQtdeTotal = (novaQtde) => {
        setQuantidade(novaQtde);
        calculaTotal(novaQtde);
    }

    return <>
        <View style={estiloMinhaCesta.margin}>
        
            <Texto style={estiloMinhaCesta.nome}>{nome}</Texto>
            <Texto style={estiloMinhaCesta.desc}>{descricao}</Texto>
            <Texto style={estiloMinhaCesta.preco}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(preco) }</Texto>
        </View>
        <View style={estiloMinhaCesta.listadesejos}>
            <View style={estiloMinhaCesta.posicao}>
                <Texto>Quantidade</Texto>
                <CampoInteiro valor={quantidade} acao={atualizaQtdeTotal}/>
            </View>
            <View style={estiloMinhaCesta.posicao}>
                <Texto>Total</Texto>
                <Texto>{total}</Texto>
            </View>
            <Button title="Adicionar"/>
        </View>
        <View style={estiloMinhaCesta.divisor}/>
    </>
}