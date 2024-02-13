import {StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


import React from 'react';

const TodoTask = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.taskInput} placeholder='Enter your task here'></TextInput>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Add Task</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TodoTask;

const styles = StyleSheet.create({
    taskInput: {
        width: 280,
        backgroundColor: '#FEFBF6',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FEFBF6',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    button: {
        backgroundColor: 'blue',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
})