/**
 * This script that displays the options list screen.
 * (Showing the user a list of options the 8-ball can 
 * select from)
 * 
 * @author Mohit Kewalramani
 * @version 1.0
 * @since 2017-08-07
 */

import React from 'react';
import {FlatList, Text, View,} from 'react-native';

import styles from '../Stylesheet'

/**
 * The class that implements the OptionsScreen
 */
class OptionsScreen extends React.Component{

  // Sets the title of the screen
  static navigationOptions = {
    title: 'Options for the 8-Ball',
  };

  /**
   * The method that renders the options screen's layout
   * and message
   * @return (JSX) The code to render on the screen
   */
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.optionsTitle}> Options For The Magic 8 Ball </Text>
        <FlatList
          style = {styles.listview}

          // List of data that is populated on the FlatList (ListView)
          data = {[
              {key: 'It is certain', color : '#b3ffb3'},
              {key: 'It is decidely so', color : '#b3ffb3'},
              {key: 'Without a doubt', color : '#b3ffb3'},
              {key: 'Yes definitely', color : '#b3ffb3'},
              {key: 'You may rely on it', color : '#b3ffb3'},
              {key: 'As I see it, yes', color : '#b3ffb3'},
              {key: 'Most likely', color : '#b3ffb3'},
              {key: 'Outlook good', color : '#b3ffb3'},
              {key: 'Yes', color : '#b3ffb3'},
              {key: 'Signs point to yes', color : '#b3ffb3'},
              {key: 'Reply hazy try again', color : '#ffff99'},
              {key: 'Ask again later', color : '#ffff99'},
              {key: 'Better not tell you now', color : '#ffff99'},
              {key: 'Cannot predict now', color : '#ffff99'},
              {key: 'Concentrate and ask again', color : '#ffff99'},
              {key: 'Don\'t count on it', color : '#ff8080'},
              {key: 'My reply is no', color : '#ff8080'},
              {key: 'My sources say no', color : '#ff8080'},
              {key: 'Outlook not so good', color : '#ff8080'},
              {key: 'Very doubtful', color : '#ff8080'},
          ]}
          // For each item :
          renderItem={({item}) => <Text style={{fontSize : 25, textAlign : 'center', backgroundColor : item.color}}>{item.key}</Text>}
        />
      </View>
    );
  }
}

// Makes the OptionsScreen class public
module.exports = OptionsScreen;