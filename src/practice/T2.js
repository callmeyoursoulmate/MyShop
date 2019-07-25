import React, { Component } from 'react';
import { View, Text, TextInput , Keyboard} from 'react-native';
class T2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typedText: 'please type your text',
            typedPassword: '',
            typedDescription: ''
        }
    }
    render() {
        return (
            <View>
                <TextInput style={{
                    height: 40,
                    margin: 20,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                    autoFocus={true}    //tu dong nhay vao
                    keyboardType='email-address'
                    placeholder="Enter your email"
                    placeholderTextColor="red"
                    onChangeText={         //onChangeText la 1 arrow function, (text) => return 
                        (text) => {
                            this.setState(
                                () => {
                                    return {
                                        typedText: text
                                    };
                                }
                            )
                        }
                    }
                />
                <Text style={{ marginLeft: 20 }}>{this.state.typedText}</Text>


                <TextInput style={{
                    height: 40,
                    margin: 20,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                    keyboardType='default'
                    placeholder="Enter your password"
                    placeholderTextColor="red"
                    secureTextEntry={true}

                    onChangeText={(text) => {
                        this.setState(() => {
                            return {
                                typedPassword: text
                            }
                        })
                    }         //onChangeText la 1 arrow function, (text) => return 
                    }
                />

                <TextInput style={{
                    height: 100,
                    margin: 20,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderBottomColor: 'green',
                }}
                    multiline={true}   // go duoc nhieu dong
                    returnKeyType='done'
                    onSubmitEditing={Keyboard.dismiss}
                    onChangeText={(text) => {
                        this.setState(() => {
                            return {
                                typedDescription: text
                            }
                        })
                    }}
                />
            </View>
        )
    }
}
export default T2;