/**
 * This script that displays the home screen
 * 
 * @author Mohit Kewalramani
 * @version 1.0
 * @since 2017-08-07
 */

import React from 'react';
import {Image, Text, View, Button} from 'react-native';

import styles from '../Stylesheet';

/**
 * The class that implements the HomeScreen
 */
class HomeScreen extends React.Component {

  // Sets the title of the screen
  static navigationOptions = {
    title: 'Welcome',
  };

  /**
   * The method that renders the home screen's layout
   * and message
   * @return (JSX) The code to render on the screen
   */
  render() {


    // Object of image displayed on the screen
    let ballImage = {
      uri : 'https://www.horoscope.com/images-US/games/game-magic-8-ball-no-text.png'
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>An Example Of The Magic 8-Ball</Text>
        <Image source = {ballImage} style = {styles.image}/>
        <Button style={styles.button}
          title="Shake The Ball"
          onPress = {()=> this.props.navigation.navigate('Result')}
        />
        <Button style={styles.button}
          title = "View The Available Options"
          onPress = {()=> this.props.navigation.navigate('Options')}
        />
      </View>
    );
  }
}

// Makes the HomeScreen class public
module.exports = HomeScreen;