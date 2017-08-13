/**
 * This stylesheet script that is used by classes in the app
 * 
 * @author Mohit Kewalramani
 * @version 1.0
 * @since 2017-08-07
 */

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
  title:{
    flex : 0.1,
    fontSize: 35,
    textAlign: "center",
    marginTop : 30,
  },
  optionsTitle:{
    flex : 0.3,
    fontSize: 35,
    textAlign: "center",
    marginTop : 35,
  },
  button:{
    flex : 1,
  },
  listview:{
    flex : 1,
    marginTop : 25,
    marginBottom : 30
  },
  listitem:{
    flex: 1,
    fontSize: 25,
    textAlign: "center",
  },
  image:{
    width : 250,
    height: 250,
    alignItems : "center"
  },
  message:{
    flex : 0.5,
    marginTop : 100,
    fontSize: 30,
    textAlign: "center"
  }
});

// Makes the StyleSheet object public
module.exports = styles;