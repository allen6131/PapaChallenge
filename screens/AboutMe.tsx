    import { View, Text, StyleSheet } from 'react-native';
    import React from 'react';
    
    const me = {
      "name" : "Allen Abraham",
      "phone": "248-910-0076",
      "email" : "allen61310@gmail.com"
     }

    const AboutMe = () => {
      return (
        <View style={styles.container}>
          <Text style={styles.name}>{me.name}</Text>
          <Text style={styles.phone}>{me.phone}</Text>
          <Text style={styles.email}>{me.email}</Text>
        </View>
      )
    }


    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      name: {
        fontSize: 24,
      },
      phone: {
        fontSize: 20,
      },
      email: {
        fontSize: 20
      }
    });


    export default AboutMe;