import React, { Component } from 'react';
import IconAwsome from 'react-native-vector-icons/FontAwesome';
import Swipeout from 'react-native-swipeout';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, FlatList, ScrollView } from 'react-native';
const { width, height } = Dimensions.get('window');

class Screen7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listTodo: [
                {
                    name: "Goi Dien Cho Nguyen Quang, goi dien cho hong thu",
                    isDone: false
                },
                {
                    name: "Goi Dien Cho A",
                    isDone: true
                }
            ],
            textValue: ''
        }
    }
    render() {
        return (
            <View style={styles.viewContainer}>
                <View style={{ borderBottomStartRadius: 15, borderBottomEndRadius: 15, backgroundColor: 'rgb(0,188,154)', height: 180 }}>
                    <View style={{
                        width: 200, height: 80, marginTop: 30, marginLeft: 80, borderRadius: 10,
                        backgroundColor: 'rgb(221,221,221)', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <View style={{ height: 60, width: 180, backgroundColor: 'white', alignContent: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 50 }}>List to do</Text>
                        </View>
                    </View>
                    <View style={{
                        height: 40, width: width - 40, marginLeft: 20, borderRadius: 5,
                        backgroundColor: 'rgb(0,203,174)', marginTop: 15
                    }}>
                        <TextInput style={[styles.textApp, { color: 'white' }, { marginLeft: 10 }, { top: 10 }]}
                            placeholder={"Enter your today task.."} placeholderTextColor={'white'}
                            onChangeText={(text) => {
                                this.setState({ textValue: text }
                                )
                            }}
                            value={this.state.textValue}
                        />
                    </View>
                    <TouchableOpacity onPress={this._onPressAdd.bind(this)}>
                        <IconAwsome name={"plus-circle"} color={"white"} size={43} style={{ marginLeft: 320, bottom: 41 }} />
                    </TouchableOpacity>
                </View>
                {/* endtop */}

                {this.renderBody()}
            </View>
        )
    }

    renderBody() {
        return (
            <FlatList
                data={this.state.listTodo}
                renderItem={this.renderItem}
                extraData={this.state}  // default
                keyExtractor={(item, index) => "list" + index}  //default
            />
        )
    }
    renderItem = ({ item, index }) => {
        // console.log('=========> items, index', item, index);
        let colorIcon = item.isDone ? 'green' : 'gray';
        return (
            <Swipeout style={{backgroundColor:'rgb(0,214,219)'}}>
                <View style={{
                    height: 50, width: width - 40, marginLeft: 20, marginTop: 10,
                    backgroundColor: 'white', flexDirection: 'row', alignItems: 'center'
                }}>
                    <View style={{ height: 50, width: width - 90, justifyContent: "center" }}>
                        <Text style={[styles.textApp, { marginLeft: 10 }]} numberOfLines={1}>{item.name}</Text>
                    </View>
                    <TouchableOpacity style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}
                        onPress={this.onChangeTask.bind(this, item, index)}
                    >
                        <IconAwsome name={'check-circle'} color={colorIcon} size={30} />
                    </TouchableOpacity>
                </View>
            </Swipeout>
        )
    }

    // B2
    onChangeTask(item, index) {
        // console.log('======> item', item);
        let listTodo = this.state.listTodo;
        // console.log('======> listTodo[index].isDone', listTodo[index].isDone);
        // console.log('======> item.isDone', item.isDone);
        listTodo[index].isDone = !item.isDone;
        this.setState({ listTodo });

    }

    // B1
    _onPressAdd() {
        // console.log('====== _onPressAdd', this.state.textValue);
        let newTodo = {
            name: this.state.textValue,
            isDone: false
        }
        let listTodo = this.state.listTodo;

        let newList = [newTodo, ...listTodo];
        // let newList = [...listTodo, newTodo];
        this.setState({ listTodo: newList, textValue: '' });
    }
}
const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: 'rgb(75,214,217)'
    },
    textApp: {
        fontSize: 17,
        color: 'rgb(154,154,146)',
        fontWeight: 'bold'
    },
})
export default Screen7;
