import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/Index';
import FirebaseKey from './FirebaseKey';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(
            < FirebaseKey />
        );
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
