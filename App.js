/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {  
  Platform, 
  StyleSheet, 
  Text,
  WebView, ScrollView, Image, 
  View,  } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView style={{backgroundColor:'#ffffff', width:'95%'}}>
      
        <Text style={styles.welcome} numberOfLines={5}> Find Health </Text>
        <View style={{alignItems: 'center', justifyContent:'center'}}>
          <Image source={require('./fht.android.jpg')} style={{width: 400, height: 320}} />
        </View>
        <Text style={styles.welcomeMessage}> 
          Today. Being healthy means taking medicines from costly Hospitals, taking regular check-ups at most costly checkup centers. This is going on as if its a competition of who visits the most costly Hospital. 
        </Text>
        <View style={{height:2, marginTop:10, marginBottom:2, backgroundColor:'#cccccc'}}></View>
        <Text style={styles.welcomeMessage}> 
          Being healthy is simple and we are here to help. 
        </Text>
      
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  welcomeMessage:{
    fontSize: 20,
    textAlign: 'left',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  WebViewContainer: {
    marginTop: (Platform.OS == 'ios') ? 20 : 0, 
    width:300,
    height:100, 
    justifyContent:'center', 
    alignItems:'center', 
    backgroundColor:'black',
  },
});
