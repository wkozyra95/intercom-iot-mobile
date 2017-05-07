import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  WebView,
  Platform,
} from 'react-native';

import FCM from 'react-native-fcm';

export default class App extends Component {
  componentDidMount() {
    FCM.subscribeToTopic('/topics/INTERCOM');
    FCM.getFCMToken().then(token => {
      console.log(token)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          style={{ flex: 1 }}
          scalesPageToFit
          source={{ uri: 'http://10.42.0.11:5000/video_feed' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
});
