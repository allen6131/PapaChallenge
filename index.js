/**
 * @format
 */
import { AppRegistry, Button } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {name as appName} from './app.json';
import MovieList from './components/MovieList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutMe from './screens/AboutMe';

// Initialize Navigation Stack
const Stack = createNativeStackNavigator();

// Initialize Apollo Client
const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache()
  });
  
  const App = ({ navigation }) => (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Star Wars Movies" 
            component={MovieList}
           options={({ navigation }) => ({
              title: 'Star Wars Movies',
              headerStyle: {
                backgroundColor: '#273469',
              },
              headerTintColor: '#EBF2FA',
              headerRight: () => (
                <Button
                  title='About Me'
                  onPress={() => navigation.navigate('About Me')}
                />
              ),
            })}
          />
          <Stack.Screen name="About Me" component={AboutMe} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );

AppRegistry.registerComponent(appName, () => App);
