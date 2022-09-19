    import React from 'react';
    import { View, Text, SafeAreaView, FlatList, TouchableOpacity, StyleSheet, useState, Button } from 'react-native';
    import { gql, useQuery } from '@apollo/client';
    import MovieCard from './MovieCard';
    
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
    
    export default function MovieList({ navigation }) {
        const { loading, error, data } = useQuery(GET_MOVIES);
        
        if (loading) return <Text>Loading...</Text>;
        if (error) return <Text>Error! ${error.message}</Text>;

        const renderItem = ({ item }) => (
            <MovieCard 
                title={item.title} 
                director={item.director} 
                releaseDate={item.releaseDate}
                species={item.speciesConnection.species}
            />
          );


        // console.log(data.allFilms.films[0].speciesConnection.species);
      return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data.allFilms.films}
                renderItem={renderItem}
                keyExtractor={item => item.index}
            />
        </SafeAreaView>
      )
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
      });