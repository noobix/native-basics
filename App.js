import { StatusBar } from 'expo-status-bar';
import Pict001 from './assets/downsize_200k_v1.jpg' 
import { StyleSheet, Text, View, 
  SafeAreaView, Image, TouchableOpacity,
TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is my first react-native app</Text>
      <Text>This is code at its best</Text>
      <Image source = { Pict001 } style = {{height: 300, width: 400}}/>
      <TouchableOpacity style = {{backgroundColor: "yellow"}}>
        <Text style = {{ color: "black"}}>Click Me</Text>
      </TouchableOpacity>
      <StatusBar style = "auto" />
    </SafeAreaView>
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
