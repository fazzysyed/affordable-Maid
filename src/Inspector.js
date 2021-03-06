import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import WebView from 'react-native-webview';

const WebViewIos = ({navigation}) => {
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  const webviewRef = useRef(null);

  const  backButtonHandler = () => {
    navigation.goBack()
      };
    
 const frontButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goForward();
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.flexContainer}>
        <WebView
          source={{uri: 'https://affordablemaidsservice.com/account'}}
          startInLoadingState={true}
          renderLoading={() => (
            <ActivityIndicator
              color="#fbce0c"
              size="large"
              style={styles.flexContainer}
            />
          )}
          ref={webviewRef}
          onNavigationStateChange={(navState) => {
            setCanGoBack(navState.canGoBack);
            setCanGoForward(navState.canGoForward);
            setCurrentUrl(navState.url);
          }}
        />
        <View style={styles.tabBarContainer}>
          <TouchableOpacity onPress={backButtonHandler}>
            <Text style={styles.button}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={frontButtonHandler}>
            <Text style={styles.button}>Forward</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  tabBarContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fbce0c',
  },
  button: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default WebViewIos;
