import React, { useState } from "react";
import {
    Text,
    StyleSheet,
    View,
    Image,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";
import { Input, Button, Icon } from "@rneui/base";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secureText, setSecureText] = useState(true);

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert("Error", "Por favor ingresa correo y contraseña.");
            return;
        }
        // Aquí iría la lógica de autenticación
        console.log("Iniciar sesión", { email, password });
    };

    const goToCreateAccount = () => {
        navigation.navigate("Home"); // Cambia "Home" por el nombre de tu pantalla de registro si es diferente
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: '#e0f2f1' }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.logoContainer}>
                    <Image
                        source={{
                            uri: "https://upload.wikimedia.org/wikipedia/commons/5/54/Logo-utez.png",
                        }}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.card}>
                    <Text style={styles.title}>Bienvenido</Text>
                    <Input
                        keyboardType='email-address'
                        placeholder='Correo electrónico'
                        containerStyle={styles.input}
                        inputContainerStyle={{ borderBottomWidth: 0 }}
                        leftIcon={<Icon name="email" type="material" color="#888" />}
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        inputStyle={styles.inputText}
                        placeholderTextColor="#888"
                    />
                    <Input
                        placeholder='Contraseña'
                        containerStyle={styles.input}
                        inputContainerStyle={{ borderBottomWidth: 0 }}
                        leftIcon={<Icon name="lock" type="material" color="#888" />}
                        rightIcon={
                            <Icon
                                name={secureText ? "visibility-off" : "visibility"}
                                type="material"
                                color="#888"
                                underlayColor="transparent"
                                onPress={() => setSecureText(!secureText)}
                                accessibilityLabel="Mostrar u ocultar contraseña"
                            />
                        }
                        value={password}
                        onChangeText={setPassword}
                        autoCapitalize="none"
                        inputStyle={styles.inputText}
                        secureTextEntry={secureText}
                        placeholderTextColor="#888"
                    />

                    <Button
                        title="Iniciar sesión"
                        containerStyle={styles.buttonContainer}
                        buttonStyle={styles.button}
                        onPress={handleLogin}
                    />

                    <View style={styles.createAccountContainer}>
                        <Text style={styles.createAccountText}>
                            ¿No tienes cuenta?
                            <Text style={styles.createAccountLink} onPress={goToCreateAccount}>
                                {" "}Crear cuenta
                            </Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 10,
    },
    logo: {
        width: 200,
        height: 200,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 28,
        marginHorizontal: 24,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 6,
        marginBottom: 30,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#00695c',
        textAlign: 'center',
    },
    input: {
        width: "100%",
        marginBottom: 15,
        backgroundColor: '#f7f7f7',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#b2dfdb',
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
    inputText: {
        color: '#222',
        fontSize: 16,
    },
    buttonContainer: {
        width: "100%",
        marginTop: 10,
    },
    button: {
        backgroundColor: "#00695c",
        borderRadius: 8,
        paddingVertical: 14,
    },
    createAccountContainer: {
        marginTop: 10,
        alignItems: "center",
    },
    createAccountText: {
        color: "#333",
        fontSize: 15,
    },
    createAccountLink: {
        color: "#00695c",
        fontWeight: "bold",
    },
});