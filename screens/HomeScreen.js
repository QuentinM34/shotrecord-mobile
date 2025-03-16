
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {Avatar, Divider, List} from "react-native-paper";
import TypeIcon from "../components/TypeIcon";

export default function HomeScreen({navigation}) {

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <List.Section>
                <List.Item
                    title={'Premiere Item'}
                    description={'Flèche Blanche'}
                    left={() =>
                        <Avatar.Icon
                            icon={'arrow-projectile'}
                            color={'#000000'}
                            size={45}
                            style={{ backgroundColor: '#fefefe', borderStyle: 'solid', borderWidth: 1, borderColor: 'black', marginLeft: 20 }}
                        />
                    }
                    right={() =>
                        <List.Icon icon={'delete'} color={'red'} />
                    }
                    onPress={() => navigation.navigate('Score', {name: 'Quentin', secondary: 'Fleche blanche'})}
                />
                <Divider bold={true} />
                <List.Item
                    title={'Deuxieme Item'}
                    description={'Plume Rouge 2'}
                    left={() =>
                        <Avatar.Icon
                            icon={'feather'}
                            color={'#FFFFFF'}
                            size={45}
                            style={{ backgroundColor: 'red', borderStyle: 'solid', borderWidth: 1, borderColor: 'black', marginLeft: 20}}
                        />
                    }
                    right={() =>
                        <List.Icon icon={'delete'} color={'red'} />
                    }
                    onPress={() => navigation.navigate('Score', {name: 'Quentin', secondary: 'Fleche blanche'})}
                />
                <Divider bold={true} />
                <List.Item title={() => <List.Icon icon={'plus'} color={'#2196f3'} />} />
            </List.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});