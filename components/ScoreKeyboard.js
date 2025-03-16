
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function ScoreKeyboard({ onPress }) {
    const { width } = Dimensions.get("window");
    const numColumns = 6;
    const keySize = width / numColumns - 2;

    return (
        <View style={styles.container}>
            {[0, 1].map((row) => (
                <View key={row} style={styles.row}>
                    {['10+', 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0].slice(row * numColumns, row * numColumns + numColumns).map((key) => (
                        <TouchableOpacity key={key} style={[styles.key, { width: keySize, height: keySize }]} onPress={() => onPress(key)}>
                            <Text style={styles.keyText}>{key}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#2e2d2b",
        paddingBottom: 1,
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
    key: {
        justifyContent: "center",
        alignItems: "center",
        margin: 1,
        backgroundColor: '#2196f3',
    },
    keyText: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'white'
    },
});