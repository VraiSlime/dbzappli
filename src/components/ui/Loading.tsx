import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'

interface LoadingType {
    message?: string
}

const Loading: React.FC<LoadingType> = ({message = 'chargement'}) => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'#FF6B6B'} />
      <Text style={styles.message}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    message: {
        marginTop: 12,
        fontSize: 16,
        color: '#666',
    }
})

export default Loading