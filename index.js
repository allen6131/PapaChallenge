/**
 * @format
 */
import { AppRegistry, Button } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {name as appName} from './app.json';
import MovieList from './screens/MovieList';
import AboutMe from './screens/AboutMe';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Initialize Navigation Stack
const Stack = createNativeStackNavigator();

// Initialize Apollo Client
const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache()
  });

  
  const App = () => (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Star Wars Movies" 
            component={MovieList}
              options={({ navigation }) => ({
              title: 'Star Wars Movies',
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
