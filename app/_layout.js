import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={ styles.page_container }>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  page_container: {
    backgroundColor: 'white',
    flex: 1,
  }
})