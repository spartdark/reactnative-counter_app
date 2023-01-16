import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const CounterScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        <View
            style={myStyles.container}>
            <Text style={myStyles.tittle}>Contador: {contador}</Text>

            <TouchableOpacity
                onPress={() => setContador(contador + 1)}
            >
                <View
                    style={myStyles.buttonPlus}
                ><Text>
                        +1
                    </Text></View>

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
    buttonPlus: {
        backgroundColor: 'red',
        borderRadius: 100
    }

})
