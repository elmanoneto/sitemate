import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import { List } from './src/components/List';

export default function App() {
	 return (
		<SafeAreaView>
    		<List />
		</SafeAreaView>
	);
}