import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet } from 'react-native';
// // import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
import OnBoarding from './screen/OnBoarding';
import Home from './screen/Home';
import Setting from './screen/Setting';
import EditHome from './screen/EditHome';
import Backup from './screen/Backup';

// class Header extends React.Component {
//     render() {
//       return (
//         <View
//           style={{
//             height: 24
//           }}>
//         </View>
//       )
//     }
//   }

// const Stack = createStackNavigator({
//     Home: {
//         screen: Home,
//         navigationOptions: {
//             header: <Header/>,
//         }
//     },
// },
//     {
//         initialRouteName: 'Home',
//     });

// export default createAppContainer(Stack);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoarding" screenOptions={{ headerShown: false }}>
        <Stack.Group screenOptions={{ headerStyle: {presentation: "modal"} }}>
          <Stack.Screen name="OnBoarding" component={OnBoarding}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Setting" component={Setting}/>
          <Stack.Screen name="EditHome" component={EditHome}/>
          <Stack.Screen name="Backup" component={Backup}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroudColor: "#fff",
    alignItems: "center",
    justifyContent: 'center',
  },
});
