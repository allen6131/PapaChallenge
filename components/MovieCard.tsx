    import { View, Text, StyleSheet, TouchableOpacity, FlatList, ListRenderItemInfo } from 'react-native';
    import React from 'react';
    import { MovieDetails } from '../screens/MovieList';

  
  

    const MovieCard = (props: MovieDetails) => { 
      const { title, director, releaseDate, species } = props;
      const [isExpanded, setExpanded] = React.useState(false);

      const date = new Date(releaseDate);
      const formattedDate = date.toLocaleDateString("en-US");

      // expands card
      function openModal() {
        setExpanded(true);
      }
    
      // closes card
      function closeModal() {
        setExpanded(false);
      }

      // component rendered by species FlatList
      const renderItem = ({item} : {item: string}) => (
        <View style={styles.namesView}>
          <Text>{item}</Text>                  
        </View>
      );

      if (isExpanded === false) {
        return (
          <TouchableOpacity style={styles.expandListItem} onPress={openModal}>
            <Text style={styles.titleText}>{title}</Text>
          </TouchableOpacity>
        )
      } else {
        return (
          <TouchableOpacity style={styles.expandedListItem} onPress={closeModal}>
            <Text style={styles.titleTextExpanded}>{title}</Text>
            <Text style={styles.directorText}>{director}</Text>
            <Text style={styles.releaseDateText}>{formattedDate}</Text>
            <FlatList
                data={species}
                renderItem={renderItem}
                keyExtractor={(item, index) => 'key'+index}
            />
          </TouchableOpacity>
        )
      }
    }

    const styles = StyleSheet.create({
        expandListItem: {
          height: 60,
          backgroundColor: '#fff',
          justifyContent: 'center',
          marginTop: 10,
        },
        titleTextExpanded: {
          textAlign: 'center',
          fontSize: 20,
          marginTop: 25
        },
        directorText: {
          fontSize: 18,
          fontWeight: '600',
          marginLeft: 10
        },
        releaseDateText: {
          fontSize: 16,
          marginLeft: 10
        },
        namesView: {
          marginLeft: 10,
        },
        expandedListItem: {
          flex: 2,
          backgroundColor: '#fff',
          marginTop: 10
        },
        titleText: {
            fontSize: 18,
            marginLeft: 15,
        }
      });

      export default MovieCard;