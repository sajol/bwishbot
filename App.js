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
                <Text>Rendering simple randomized greeting list</Text>
                <SimpleRandomizedGreetingList names={['Sajol', 'John', 'Christ']}/>
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


class SimpleRandomizedGreetingList extends Component {

    constructor(props) {

        super(props);

        this.state = {
            names: this.props.names
        };

        // Toggle the state every second
        setInterval(() => {
            this.setState(previousState => {
                return {isShowingText: SimpleRandomizedGreetingList.shuffleArray(previousState.names)};
            });
        }, 5000);
    }

    render() {

        return (
            <View style={{alignItems: 'center'}}>
                {this.state.names.map((prop, key) => {
                    return (
                        <Greeting key={key} name={prop}/>
                    );
                })}
            </View>
        );
    }

    /**
     * Randomize array element order in-place.
     * Using Durstenfeld shuffle algorithm.
     */
    static shuffleArray(array) {
        if (array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        return array;
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
