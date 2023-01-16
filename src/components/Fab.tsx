import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

interface Props {
    tittle: string
}

export const Fab = ({ tittle }: Props) => {

    console.log(tittle)

    return (
        <TouchableOpacity
            style={myStyles.fabLocation}
            onPress={() => console.log(tittle)}
        //onPress={() => setContador(contador + 1)}
        >
            <View style={myStyles.fab}>
                <Text style={myStyles.fabText}>
                    {tittle}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const myStyles = StyleSheet.create({
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