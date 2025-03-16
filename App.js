
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import ScoreScreen from "./screens/ScoreScreen";
import Icon from "react-native-vector-icons/AntDesign";
import {View} from "react-native";
import { Text } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName={'Accueil'}
            screenOptions={{
                headerStyle: {backgroundColor: '#141311'},
                headerBackButtonDisplayMode: 'minimal',
                headerTintColor: 'white',
                headerTitleAlign: 'center'
            }}
        >
            <Stack.Screen name="Accueil" component={HomeScreen} />
            <Stack.Screen
                name="Score"
                component={ScoreScreen}
                options={{
                    headerRight: () => <Icon name={'infocirlceo'} size={25} color={'white'} />,
                    headerTitle: () =>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text variant="titleMedium" style={{color: 'white', textTransform: 'uppercase'}} text70 uppercase>Primary Text</Text>
                            <Text variant="labelMedium" style={{color: 'white'}} >Secondary Text</Text>
                        </View>
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}