import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Link href="/about">
        <Text style={styles.button}>Go to About</Text>
      </Link>
    </View>
  );
}
