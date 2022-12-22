import { useState } from "react";
import { TextInput, View, StyleSheet, Text, FlatList, Button } from "react-native";

export function List() {
    const [query, setQuery] = useState('');
    const [list, setList] = useState([]);

     function searchSubmit() {
        fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then(res => res.json())
        .then(res => setList(res.products))
        .then();
    }

    return (
        <View style={view}>
            <TextInput 
                placeholder="Search for products here..." 
                placeholderTextColor="gray"
                style={style}
                onChange={e => setQuery(e.nativeEvent.text)}
                onSubmitEditing={searchSubmit}
            />

            <Button title="Search" color="#9090ff" accessibilityLabel="Search" onPress={searchSubmit}/>

            {list.length > 0 &&
                <FlatList
                    style={flatList}
                    data={list}
                    renderItem={({ item }) => <Text style={{ color: '#fff'}}>{item.title}</Text>}
                />
            }
        </View>
    )
}

const view = StyleSheet.create({
    height: '100%',
    backgroundColor: '#000',
    padding: '2%'
});

const flatList = StyleSheet.create({
    marginTop: '5%'
})

const style = StyleSheet.create({
    backgroundColor: '#000',
    height: '10%',
    color: '#fff',
    borderWidth: '1px',
    borderColor: '#e8e8e8',
    borderRadius: '5%',
    padding: '5%'
})