/**
 * This script that displays the results of the 
 * 8-Ball on the result screen
 * 
 * @author Mohit Kewalramani
 * @version 1.0
 * @since 2017-08-07
 */

import React from 'react';
import {Text, View} from 'react-native';

import styles from '../Stylesheet';

/**
 * The class that implements the ResultScreen
 */
class ResultScreen extends React.Component {
   
  // Sets the title of the screen
  static navigationOptions = {
    title: "The 8-Ball Says:",
  };

  /**
   * The method that renders the result screen's layout
   * and message
   * @return (JSX) The code to render on the screen
   */
  render() {
    var message = this.printMessage();
    return (
      <View style={styles.container}>
        <Text style={styles.title}>The Magic 8-Ball Says:</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    );
  }
  
  /**
   * The message that selects a random integer,
   * and picks the message based on the index generated
   * @return (str) : The message from the magic 8-ball
   */
  printMessage(){
    optionsArray = constructMessage();
    randomIndex = getRandomIndex();
    return optionsArray[randomIndex]
  }
}

/**
 * A helper method that constructs an array, and 
 * populates the array with possible messages selectable
 * by the magic 8-ball
 * @returns (Array) : The array containing messages selectable
 *  from the magic 8-ball
 */
function constructMessage(){
  optionsArray = new Array(20);
  optionsArray[0] = "It is certain";
  optionsArray[1] = "It is decidely so";
  optionsArray[2] = "Without a doubt";
  optionsArray[3] = "Yes definitely";
  optionsArray[4] = "You may rely on it";
  optionsArray[5] = "As I see it, yes";
  optionsArray[6] = "Most likely";
  optionsArray[7] = "Outlook good";
  optionsArray[8] = "Yes";
  optionsArray[9] = "Signs point to yes";
  optionsArray[10] = "Reply hazy try again";
  optionsArray[11] = "Ask again later";
  optionsArray[12] = "Better not tell you now";
  optionsArray[13] = "Cannot predict now";
  optionsArray[14] = "Concentrate and ask again";
  optionsArray[15] = "Don\"t count on it";
  optionsArray[16] = "My reply is no";
  optionsArray[17] = "My sources say no";
  optionsArray[18] = "Outlook not so good";
  optionsArray[19] = "Very doubtful";
  return optionsArray;
}

/**
 * A helper method to generate a random integer
 * between 0 and 19 to use as an index for the array
 * @returns (int) : The randomly generated integer
 */
function getRandomIndex(){
  min = Math.ceil(0);
  max = Math.floor(20);
  num = Math.floor(Math.random() * (max-min)) + min;
  return num;
}

// Makes the ResultScreen class and helper methods public
module.exports = {
  resultscreen : ResultScreen, 
  constructmessage : constructMessage,
  getrandomindex : getRandomIndex
}