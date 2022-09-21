    import React from 'react';
    import { Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';
    import { gql, useQuery } from '@apollo/client';
    import MovieCard from '../components/MovieCard';
    
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
                            
                        }
                    }
                }
            }
        }
    `;

    export interface MovieDetails {
        title: string;
        director: string;
        releaseDate: Date;
        species: Array<string>;
      };


    interface FilmDetailsResponse {
        title: string;
        director: string;
        releaseDate: Date;
        speciesConnection: {
            species: Array<{ 
                name: string,
             }>,
        },
    };
    
    export default function MovieList() {
        const { loading, error, data } = useQuery(GET_MOVIES);
        
        if (loading) return <Text>Loading...</Text>;
        if (error) return <Text>Error! ${error.message}</Text>;

        const films = data.allFilms.films.map((film: FilmDetailsResponse) => {
            const speciesList = film.speciesConnection.species.map((species: {name: string}) => species.name);

            return {
                'title': film.title,
                'director': film.director,
                'releaseDate': film.releaseDate,
                'species': speciesList,
            };
        });

        // renders per each index in array passed to FlatList
        const renderItem = ({item} : {item: MovieDetails}) => ( 
            <MovieCard 
                title={item.title} 
                director={item.director} 
                releaseDate={item.releaseDate}
                species={item.species}
            />
        );


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={films}
                renderItem={renderItem}
                keyExtractor={(item, index) => 'key:'+index}
            />
        </SafeAreaView>
      )
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
      });