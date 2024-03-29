import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Iniciar sesión"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Registro"
        onPress={() => navigation.navigate('Registro')}
      />
      <Button
        title="MercadoPago"
        onPress={() => navigation.navigate('MercadoPago')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
