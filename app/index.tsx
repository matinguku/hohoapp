import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { router } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      router.replace('/home'); // navigate to home
    } else {
      alert('Enter email & password');
    }
  };

  return (
    <View style={{ padding: 20, marginTop: 100 }}>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} style={{ borderWidth: 1 }} />

      <Text>Password: </Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry style={{ borderWidth: 1 }} />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}