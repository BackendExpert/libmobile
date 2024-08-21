import React from 'react'
import { View, Text, Button } from 'react-native'

const Login = ({ navigation }) => {
  return (
    <View>
        <Text>
            login here

            <Button
                title='SignUp'
                onPress={() => navigation.navigate('Signup')}
            >
            </Button>
        </Text>
    </View>
  )
}

export default Login