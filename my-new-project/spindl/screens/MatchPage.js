import React from 'react';
import {
    Image,
    Button,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import {withNavigation} from 'react-navigation';

import Matches from '../components/Matches';

class MatchPage extends React.Component {
    static navigationOptions = {
        header: null,
    };

    adding = () => {
        console.log('ayyeee');
    }

    render() {
    return(
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                    <Image 
                        style= {styles.images}
                        source={require('../assets/images/dd-logo.png')}
                    />
                <Matches />
            </View>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scrollView:{
        flex: 1,
        backgroundColor: '#F98F8F'
    },
    container:{
        paddingHorizontal: 10,
        paddingVertical:10,
        paddingTop: 40,
        flexDirection: 'column',
        alignItems: 'center',
    },
    images:{
        height: 50,
        width: 100,
        paddingTop: 50,
        alignItems: 'center'
    }
})

export default withNavigation(MatchPage)