import React from 'react'
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native'
import { Formik } from "formik"

class LoginScreen extends React.Component {

    render(){
        return(
            <View style={styles.mainContainer}>
                <View style={styles.title}>
                    <Text style={styles.title1}>Travel</Text>
                    <Text style={styles.title2}>Quest</Text>
                </View>
                <View style={styles.loginContainer}>
                    <Formik
                        initialValues={{ email: 'admin7@email.com', password: 'admin' }}
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
                            <View style={styles.formikLogin}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Email'
                                    keyboardType='email-address'
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder='Password'
                                    secureTextEntry={true}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                />
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={handleSubmit}
                                    disabled={isSubmitting}
                                >
                                    <Text>Login</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#ff790a',
        alignItems: 'center',
        justifyContent: 'center',
    },
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
        color: '#ff230d'
    },
    loginContainer: {
        height: 200,
        width: 300,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    },
    formikLogin: {
        flex: 1,
    },
    input: {
        flex: 1,
        margin: 20,
        fontSize: 20,
    },
    button: {
        flex: 1,
        margin: 20,
        backgroundColor: '#ff230d',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default LoginScreen