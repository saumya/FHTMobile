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
  TouchableOpacity, 
  WebView, ScrollView, Image, Linking,  
  View,  } from 'react-native';

import Swiper from 'react-native-swiper';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  getMoviesFromApiAsync() {
    const apiURL = 'http://heal-thy.herokuapp.com/api/v1/readings';
    //const apiURL = 'https://facebook.github.io/react-native/movies.json';

    return fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        //return responseJson.movies;
        //console.log( 'responseJson.movies',responseJson.movies )
        //console.log( 'responseJson',responseJson )
        
        //return responseJson

        //consverting Object to Array
        var aReadings = [];
        var property = null;
        for (property in responseJson) {
          /*
          if (object.hasOwnProperty(property)) {
          // do stuff
          }
          */
          //console.log('property',property)
          //console.log('data',responseJson[property])
          aReadings.push( responseJson[property] )
        }

        this.setState( {aReadings: aReadings} )
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleClick(obj) {
    Linking.canOpenURL(obj).then(supported => {
      if (supported) {
        Linking.openURL(obj);
      } else {
        console.log("Don't know how to open URI: " + obj);
      }
    });
  };

  constructor(props){
    super(props)
    this.state = { aReadings:[] };

    this.currentClickedURL = '';

    this.handleClick = this.handleClick.bind(this);

    this.getMoviesFromApiAsync();
  }

  render() {

    //console.log('this.getMoviesFromApiAsync()',this.getMoviesFromApiAsync());
    /*
    this.getMoviesFromApiAsync().then( function(value){
      console.log('this.getMoviesFromApiAsync',value)
    } )
    */ 

    //this.getMoviesFromApiAsync()

    //console.log('render:this.state.aReadings', this.state.aReadings)

    var that = this;
    var readingList = this.state.aReadings.map(function(reading) {
                              return(
                                <TouchableOpacity key={reading.id} onPress={function(){ that.handleClick(reading.url) }}>
                                  <View style={{height:60, marginTop:4, padding:4, backgroundColor:'#000000'}}>
                                    <Text style={{fontSize: 16, color: '#ffffff'}}>{reading.info}</Text>
                                  </View>
                                </TouchableOpacity>
                                ) 
                            });

    return (
      <Swiper style={styles.wrapper} showsButtons={false} showsPagination={true}>
        <View style={styles.slide1}>
          <ScrollView style={{backgroundColor:'#ffffff', width:'99%'}}>
      
            <Text style={styles.welcome} numberOfLines={5}> Find Health </Text>
            <View style={{alignItems: 'center', justifyContent:'center'}}>
              <Image source={require('./fht.android.jpg')} style={{width: 400, height: 320}} />
            </View>
            <Text style={styles.welcomeMessage}> 
              Today. Being healthy means taking medicines from costly Hospitals, taking regular check-ups at most costly checkup centers. This is going on as if its a competition of who visits the most costly Hospital. 
            </Text>
            <View style={{height:2, marginTop:10, marginBottom:2, backgroundColor:'#cccccc'}}></View>
            <Text style={styles.welcomeMessage}> 
              Being healthy is simple and we are here to help. Being healthy is simple and we are here to help. Being healthy is simple and we are here to help. 
            </Text>
          
          </ScrollView>
        </View>
        <View style={styles.slide2}>
          <ScrollView style={{backgroundColor:'#000000', width:'100%'}}>
            <Text style={styles.text}>{new Date().toDateString()}</Text>
            { readingList }
          </ScrollView>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Today</Text>
          <Image source={{uri: 'https://imageshack.com/a/img538/1592/0q9ZgT.jpg'}} style={{width:'98%', height:'90%'}} />
        </View>
      </Swiper>
    );

  }
}

/*
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
*/
const styles = StyleSheet.create({

  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  welcomeMessage:{
    fontSize: 20,
    textAlign: 'left',
  },

  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

