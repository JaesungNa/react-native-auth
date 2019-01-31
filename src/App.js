import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common/Index';
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
    state = {
        loggedIn: null
    }

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
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }} >
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}


export default App;
