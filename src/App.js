import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/Index';
import LoginForm from './components/LoginForm';
import {
    FIREBASE_API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_ID
} from 'react-native-dotenv';

class App extends Component {
    componentWillMount() {
        console.log(FIREBASE_API_KEY);
        firebase.initializeApp({
            apiKey: FIREBASE_API_KEY,
            authDomain: AUTH_DOMAIN,
            databaseURL: DATABASE_URL,
            projectId: PROJECT_ID,
            storageBucket: STORAGE_BUCKET,
            messagingSenderId: MESSAGING_ID
        });
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
