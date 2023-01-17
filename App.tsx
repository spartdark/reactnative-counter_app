import React from 'react'
import { SafeAreaView } from 'react-native';
import { DimenScreen } from './src/screens/DimenScreen';
//import { HolaMundoScreen } from './src/screens/HolaMundoScreen';

const App = () => {
  return (
    //<HolaMundoScreen></HolaMundoScreen>
    <SafeAreaView style={{ flex: 1}}>
       <DimenScreen/>
    </SafeAreaView>
   
  )
}
export default App;