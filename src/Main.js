import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  Animated,
} from 'react-native';

export default class Main extends Component {
  toggle = (path) => {
    if (path === 'Login') {
      this.props.navigation.navigate('Login');
    }
    if (path === 'Inspector') {
      this.props.navigation.navigate('Inspector');
    }
    if (path === 'Register') {
      this.props.navigation.navigate('Register');
    }
    if (path === 'Website') {
      this.props.navigation.navigate('Website');
    }
    if (path === 'News') {
      this.props.navigation.navigate('News');
    }
    if (path === 'contact') {
      this.props.navigation.navigate('Contact');
    }
  
  };
  render() {
    return (
      <ImageBackground
        source={require('../src/Assets/stars.png')}
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
    
          }}>
                   <View style={{flexDirection: 'row', marginTop: 5,alignSelf:"center"}}>
                <Image
              source={require("./Assets/affordable-maids.png")}

                  style={{
                    height: 100,
                    width: "100%",
                    marginVertical: 5,

                    shadowColor: '#000',
                  }}
                  resizeMode="contain"
            
                />
              </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: 10,
              marginTop: 60,
            }}>
            <TouchableOpacity
              style={[styles.card, {borderColor: '#fbce0c'}]}
              onPress={() => this.toggle('Login')}>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  source={require('../src/Assets/login.png')}
                  style={{
                    height: 50,
                    width: 50,
                    marginVertical: 5,

                    shadowColor: '#000',
                  }}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.toggle('Website')}
              style={[styles.card, {borderColor: '#fbce0c'}]}>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  source={require('../src/Assets/house.png')}
                  style={{
                    height: 50,
                    width: 50,
                    marginVertical: 5,
                    shadowColor: '#000',
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.text}>Website</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: 10,
            }}>
            <TouchableOpacity
              onPress={() => this.toggle('Inspector')}
              style={[styles.card, {borderColor: '#fbce0c'}]}>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  source={require('../src/Assets/maid.png')}
                  style={{
                    height: 50,
                    width: 50,
                    marginVertical: 5,

                    shadowColor: '#000',
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.text}>Maid Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.toggle('News')}
              style={[styles.card, {borderColor: '#fbce0c'}]}>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  source={require('../src/Assets/booking.png')}
                  style={{
                    height: 50,
                    width: 50,
                    shadowColor: '#000',
                    marginVertical: 5,
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.text}>Book Online</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: 10,
            }}>
            <TouchableOpacity
              onPress={() => this.toggle('Register')}
              style={[styles.card, {borderColor: '#fbce0c'}]}>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  source={require('../src/Assets/enrollment.png')}
                  style={{
                    marginVertical: 5,
                    height: 50,
                    width: 50,
                    shadowColor: '#000',
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.text}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.toggle('contact')}
              style={[styles.card, {borderColor: '#fbce0c'}]}>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  source={require('../src/Assets/contact.png')}
                  style={{
                    height: 50,
                    width: 50,
                    shadowColor: '#000',
                    marginVertical: 5,
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.text}>Contact us</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: 10,
            }}>
            {/* <TouchableOpacity
              onPress={() => this.toggle('seven')}
              style={[styles.card, {borderColor: '#5cb431'}]}>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  source={require('../src/Assets/event.png')}
                  style={{
                    marginVertical: 5,
                    height: 50,
                    width: 50,
                    shadowColor: '#000',
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.text}>Magazine</Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity
              onPress={() => this.toggle('eight')}
              style={[styles.card, {borderColor: '#5cb431'}]}>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  source={require('../src/Assets/empty.png')}
                  style={{
                    height: 50,
                    width: 50,
                    shadowColor: '#000',
                    marginVertical: 5,
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.text}>Directory</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    padding: 10,
    backgroundColor:"white",
    elevation:5,
    alignItems: 'center',
    width: 150,
    borderRadius:5,
    height: 120,

    shadowOpacity: 0.6,
    marginBottom: 20,
    borderRadius: 6,
  },
  text: {
    marginVertical:5,
    color: '#005698',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign:"center"
  },
});
