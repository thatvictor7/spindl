import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return(
      <ScrollView>
        <Image
         source={{uri:'https://placeimg.com/200/200/people'}}
         fadeDuration={0}
         style={{width: 200, height: 200,marginTop: 35, marginLeft: 25}}
        />
      </ScrollView>
    )
  }
}