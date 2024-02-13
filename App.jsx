import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoTask from './src/TodoTask'
import TodoList from './src/TodoList'

const App = () => {
    return (
        <View style={styles.background}>
            <Text style={styles.header}>Todo Task App</Text>
            <TodoTask />
            <Text style={styles.header}>Todo Informations</Text>
            <TodoList />
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#333333',
    },
    background: {
        flex: 1,
        backgroundColor: 'darkgray',
    }
})