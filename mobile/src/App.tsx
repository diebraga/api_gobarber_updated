import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import Routes from './routes/index';
// import { Container } from './styles';

const App: React.FC = () => {
  return(
    <>
    <StatusBar barStyle='light-content' backgroundColor='#312e38'/>
    <View style={{  backgroundColor: '#312e38', flex: 1, }}>
      <Routes />
    </View>
    </>
  ) 
}

export default App;