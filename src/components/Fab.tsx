import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    tittle: string;

    position?: 'right' | 'left';
    mOnPress: () => void;
}

export const Fab = ({ tittle, mOnPress, position = 'right' }: Props) => {

    //.log(tittle)
    const ios = () => {
        return (

            <TouchableOpacity
                activeOpacity={0.8}
                style={[myStyles.fabLocation, (position === 'right')
                    ? myStyles.positionR
                    : myStyles.positionL]
                }
                onPress={mOnPress}
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

    const android = () => {
        return (
            <View
                style={[myStyles.fabLocation, (position === 'right')
                    ? myStyles.positionR
                    : myStyles.positionL]
                }
            >
                <TouchableNativeFeedback
                    onPress={mOnPress}
                    background={TouchableNativeFeedback.Ripple(
                        '#6638f0', false, 10
                    )}
                //onPress={() => setContador(contador + 1)}
                >
                    <View style={myStyles.fab}>
                        <Text style={myStyles.fabText}>
                            {tittle}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
    return (Platform.OS == 'ios') ? ios() : android();

}

const myStyles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    positionR: {
        right: 25
    },
    positionL: {
        left: 25
    }
    ,
    fab: {
        backgroundColor: '#5cc9f5',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})