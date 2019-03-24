import React from 'react'
import {StyleSheet, View, Text, TextInput} from 'react-native'
import {Button, Card, FormInput} from "react-native-elements";


import {Formik} from "formik"
import {mainContainer, colors, padding, margin} from "../../Resources/styles";

class LoginScreen extends React.Component {

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.title}>
          <Text style={styles.title1}>Travel</Text>
          <Text style={styles.title2}>Quest</Text>
        </View>
        <Card>
          <Formik
            initialValues={{email: 'admin', password: 'admin'}}
            onSubmit={async (values, action) => {
              await this.props.onLoginPress(values)
              action.setSubmitting(false)
            }}

            render={({
                       values,
                       errors,
                       touched,
                       handleChange,
                       handleBlur,
                       handleSubmit,
                       isSubmitting,
                     }) => (
              <View style={styles.loginContainer}>
                <FormInput
                  style={styles.input}
                  placeholder='Email'
                  keyboardType='email-address'
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                <FormInput
                  style={styles.input}
                  placeholder='Password'
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                <Button
                  title="Sign In"
                  onPress={handleSubmit}
                  backgroundColor={colors.secondary}
                  disabled={isSubmitting}
                  style={styles.button}
                />
              </View>
            )}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer,
  title: {
    margin: 10,
    flexDirection: 'row',
  },
  title1: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  title2: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 40,
    color: colors.secondary,
  },
  loginContainer: {
    padding: 10,
    width: 300
  },
  formikLogin: {

  },
  input: {
    margin: 20,

    width: '80%',
    fontSize: 20,
  },
  button: {
    marginTop: 20,
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 20
  }
})

export default LoginScreen