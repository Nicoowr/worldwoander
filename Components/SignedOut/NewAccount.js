import React from 'react'
import {Formik} from "formik";
import {Text, TextInput, TouchableOpacity, View, StyleSheet} from "react-native";
import {FormInput, FormValidationMessage} from 'react-native-elements'

class NewAccount extends React.Component {
    render() {
        const genders = ['Male', 'Female']
        return(
            <View style={styles.mainContainer}>
                <View style={styles.newAccountContainer}>
                    <Formik
                        initialValues={{
                            email: this.props.userInfoFromLogin.email,
                            password: this.props.userInfoFromLogin.password,
                            confirmPassword: 'admin',
                            firstName: 'Admin',
                            lastName: '',
                            gender: ''
                        }}
                        validate={values => {
                            let errors = {};
                            if (!values.email) {
                                errors.email = 'Please specify your email address.';
                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address.';
                            } else if ( values.password !== values.confirmPassword ){
                                errors.confirmPassword = 'Passwords do not match.'
                            } else if (!values.firstName) {
                                errors.firstName = 'Please specify your first name.'
                            }
                            return errors;
                        }}
                        onSubmit={async (values, action) => {
                            await this.props.onCreatePress(values)
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
                            <View style={styles.formikNewAccount}>
                                <FormInput
                                    style={styles.input}
                                    placeholder='Email'
                                    keyboardType='email-address'
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                />
                                <FormValidationMessage>{errors.email && touched.email? 'Email required': ''}</FormValidationMessage>
                                <FormInput
                                    style={styles.input}
                                    placeholder='Password'
                                    secureTextEntry={true}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                />
                                <FormInput
                                    style={styles.input}
                                    placeholder='Confirm password'
                                    secureTextEntry={true}
                                    onChangeText={handleChange('confirmPassword')}
                                    onBlur={handleBlur('confirmPassword')}
                                    value={values.confirmPassword}
                                />
                                <FormValidationMessage>{errors.confirmPassword && touched.confirmPassword? 'Passwords do not match': ''}</FormValidationMessage>
                                <FormInput
                                    style={styles.input}
                                    placeholder='First name'
                                    onChangeText={handleChange('firstName')}
                                    onBlur={handleBlur('firstName')}
                                    value={values.firstName}
                                />
                                <FormValidationMessage>{errors.firstName && touched.firstName? 'At least your first name is needed': ''}</FormValidationMessage>
                                <FormInput
                                    style={styles.input}
                                    placeholder='Last name'
                                    onChangeText={handleChange('lastName')}
                                    onBlur={handleBlur('lastName')}
                                    value={values.lastName}
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


const styles = StyleSheet.create(
    {
        mainContainer: {
            flex: 1,
            backgroundColor: '#ff790a',
            alignItems: 'center',
            justifyContent: 'center',
        },
        newAccountContainer: {
            height: 340,
            width: 300,
            padding: 10,
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
        },
        formikNewAccount: {
            flex: 1,
        },
        error: {
            flex: 1,
            marginLeft:20,
            color: '#FF0000',
            fontSize: 15,
        },
        input: {
            flex: 1,
            marginTop: 10,
            marginLeft: 20,
            fontSize: 20,
        },
        button: {
            flex: 0.8,
            margin: 20,
            padding: 5,
            backgroundColor: '#ff230d',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center'
        },
    }
);

export default NewAccount