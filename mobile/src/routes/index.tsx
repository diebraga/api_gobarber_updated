import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// import { Container } from './styles';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup'

const Auth = createStackNavigator();

const routes: React.FC = () => {
  return (
    <NavigationContainer>
    <Auth.Navigator screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' }
    }}>
      <Auth.Screen name='Signin' component={Signin}/>
      <Auth.Screen name='Signup' component={Signup}/>
    </Auth.Navigator>
    </NavigationContainer>
  );
}

export default routes;