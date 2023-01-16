import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const CounterScreen = () => {

    const [contador, setContador] = useState(0);



    return (
        <View
            style={myStyles.container}>
            <Text style={myStyles.tittle}>Contador: {contador}</Text>

            <TouchableOpacity
                style={myStyles.fabLocation}
                onPress={() => setContador(contador + 1)}
            >
                <View style={myStyles.fab}>
                    <Text style={myStyles.fabText}>
                        +1
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={myStyles.fabLocationLeft}
                onPress={() => setContador(contador - 1)}
            >
                <View style={myStyles.fab}>
                    <Text style={myStyles.fabText}> -1 </Text>
                </View>
            </TouchableOpacity>

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
    },
    fabLocation: {
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    fabLocationLeft: {
        position: 'absolute',
        bottom: 25,
        left: 25
    }
    ,
    fab: {
        backgroundColor: '#5cc9f5',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }

})
