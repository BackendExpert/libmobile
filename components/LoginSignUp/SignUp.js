import React from 'react'
import { Button, View } from 'react-native'

const SignUp = ({ navigation }) => {
  return (
    <View>
        <Button
            title='SignUp'
            onPress={() => navigation.navigate('login')}
        >
        </Button>
    </View>
  )
}

export default SignUp