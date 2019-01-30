
import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common/Index';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    };
    onButtonPress() {
        const { email, password } = this.state;

        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({ error: 'Authentication Failed' });
                    });
            });
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@gmail.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection >
                    <Input
                        secureTextEntry="true"
                        label="Password"
                        placeholder="Input password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    <Button
                        onPress={this.onButtonPress.bind(this)}
                    >
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
}
export default LoginForm;
