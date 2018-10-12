import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Banana from "./component/Banana";
import Greeting from "./component/Greeting";


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello World!</Text>
                <Banana/>
                <Text>Rendering simple greeting list</Text>
                <SimpleGreetingList/>
            </View>
        );
    }
}


class SimpleGreetingList extends Component {

    render() {

        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name='Sajol'/>
                <Greeting name='John'/>
                <Greeting name='Christ'/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
