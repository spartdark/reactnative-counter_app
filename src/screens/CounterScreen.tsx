import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Fab } from '../components/Fab';


export const CounterScreen = () => {

    const [contador, setContador] = useState(0);

    return (
        <View
            style={myStyles.container}>
            <Text style={myStyles.tittle}>Contador: {contador}</Text>

            <Fab
                tittle='+1'
                position='right'
                mOnPress={() => setContador(contador + 1)}
            />

            <Fab
                tittle='-1'
                position='left'
                mOnPress={() => setContador(contador - 1)}
            />
            {/*  <TouchableOpacity
                style={myStyles.fabLocationLeft}
                onPress={() => setContador(contador - 1)}
            >
                <View style={myStyles.fab}>
                    <Text style={myStyles.fabText}> -1 </Text>
                </View>
            </TouchableOpacity> */}

        </View>
    )
}

const myStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    tittle: {
        textAlign: 'center',
        fontSize: 40,
        position: 'relative',
        top: -15,
    }

})
