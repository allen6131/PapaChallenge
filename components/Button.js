    import { View, Text } from 'react-native';
    import React from 'react';
    import { gql, useQuery } from '@apollo/client';

        const GET_MOVIES = gql`
        query GetMovies {
            allFilms {
                films {
                title
                director
                releaseDate
                speciesConnection {
                    species {
                    name
                    classification
                    homeworld {
                        name
                    }
                    }
                }
                }
            }
            }
        `;
    
    export default function Button() {
        const { loading, error, data } = useQuery(GET_MOVIES);

        if (loading) return <Text>Loading...</Text>;
        if (error) return <Text>Error! ${error.message}</Text>;
        console.warn(data.allFilms.films);
      return (
        <View>
          <Text>Button</Text>
        </View>
      )
    }