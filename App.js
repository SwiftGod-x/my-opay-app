import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './Hello';
import Transaction from './Transaction';
import Home from './Home';
import Reward from './Reward';
import Fianance from './Fianance';
import Cards from './Cards';
import Me from './Me';
import Loginpage from './Loginpage';
import LoginFullpage from './LoginFullpage';
import loginRewardPage from './loginRewardPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {

   const Stack = createStackNavigator();

  
  return (



    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown: false}}>
        
        <Stack.Screen name="Hello" component={Hello} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Transaction" component={Transaction} />
        <Stack.Screen name="Reward" component={Reward} />
        <Stack.Screen name="Fianance" component={Fianance} />
        <Stack.Screen name="Cards" component={Cards} />
        <Stack.Screen name="Me" component={Me} />
        <Stack.Screen name="Loginpage" component={Loginpage} />
        <Stack.Screen name="LoginFullpage" component={LoginFullpage} />
        
      </Stack.Navigator>

    </NavigationContainer>


    // <View style={styles.container}>
    //   <Hello/>
    //   <StatusBar style="auto" />
    // </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2dcb74',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});


