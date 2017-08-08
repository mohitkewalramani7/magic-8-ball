/**
 * This script is the entry point of the app
 * 
 * @author Mohit Kewalramani
 * @version 1.0
 * @since 2017-08-07
 */

import React from 'react';
import {StackNavigator} from 'react-navigation';

import HomeScreen from './Components/HomeScreen';
import OptionsScreen from './Components/OptionsScreen';
import ResultScreen from './Components/ResultScreen';

/**
 * The instance of the StackNavigator which initializes the
 * app with three different screens
 */
const SimpleAppNavigator = StackNavigator({
  Home: {screen : HomeScreen},
  Options: {screen : OptionsScreen},
  Result: {screen : ResultScreen}
});

/**
 * Creates an instance of AppNavigation
 */
const AppNavigation = () => (
  <SimpleAppNavigator />
);

/**
 * A class that renders the created instance of 
 * AppNavigation which starts the app using the screen
 * declared with the Home screen
 */
export default class App extends React.Component{

  /**
   * The render method returns the Home screen as
   * declared by the Navigation instance
   * @return (HTML) The code to render the screen
   */
  render(){
    return(
      <AppNavigation/>
    );
  }
}
