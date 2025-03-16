
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ScoreKeyboard from "../components/ScoreKeyboard";
import {DataTable} from "react-native-paper";

const SCORELISTEXAMPLE = [
    {firstshot: 9, secondshot: 8, thirdshot: 6},
    {firstshot: 9, secondshot: 8, thirdshot: 6},
    {firstshot: 9, secondshot: 8, thirdshot: 6},
    {firstshot: 9, secondshot: 8, thirdshot: 6},
    {firstshot: 9, secondshot: 8, thirdshot: 6},
    {firstshot: 9, secondshot: 8, thirdshot: 6},
    {firstshot: 9, secondshot: 8, thirdshot: 6},
    {firstshot: 9, secondshot: 8, thirdshot: 6},
    {firstshot: 9, secondshot: 8, thirdshot: 6},
    {firstshot: 9, secondshot: 8, thirdshot: 6},
    {firstshot: 9, secondshot: 8, thirdshot: 6},
    {firstshot: 4, secondshot: 10, thirdshot: 2}
]

export default function ScoreScreen({route}) {
    const {name, secondary} = route.params;
    const [scoreList, setScoreList] = useState(SCORELISTEXAMPLE);
    const [selectedNumber, setSelectedNumber] = useState(null);

    const arrowColor = (arrowScore) => {
        if(arrowScore <= 2) return '#fefefe';
        else if(arrowScore <= 4) return '#262123';
        else if(arrowScore <= 6) return '#099fdc';
        else if(arrowScore <= 8) return '#d1393a';
        else return '#fcdc60';
    };

    const scoreColor = (arrowScore) => {
        if(arrowScore <= 2) return 'black';
        else if(arrowScore <= 8) return 'white';
        else return 'black';
    };

    return (
        <>
            <StatusBar style="auto" />

            <ScrollView style={styles.scoreList}>
                <DataTable>
                    {scoreList.map((score, index) => (
                        <DataTable.Row key={'Score ' + index} style={{flex: 1, gap: 2}}>
                            <DataTable.Cell style={{maxWidth: '10%'}} textStyle={{color: 'white'}}>
                                {index + 1}
                            </DataTable.Cell>
                            <DataTable.Cell>
                                <View style={{width: '100%',flex: 1, flexDirection: 'row', justifyContent: 'center', gap: 5}}>
                                    <Text style={{width: '33%', backgroundColor: arrowColor(score.firstshot), borderRadius: 0.5, textAlign: 'center', color: scoreColor(score.firstshot)}}>
                                        {score.firstshot}
                                    </Text>
                                    <Text style={{width: '33%', backgroundColor: arrowColor(score.secondshot), borderRadius: 0.5, textAlign: 'center', color: scoreColor(score.secondshot)}}>
                                        {score.secondshot}
                                    </Text>
                                    <Text style={{width: '33%', backgroundColor: arrowColor(score.thirdshot), borderRadius: 0.5, textAlign: 'center', color: scoreColor(score.thirdshot)}}>
                                        {score.thirdshot}
                                    </Text>
                                </View>
                            </DataTable.Cell>
                            <DataTable.Cell style={{maxWidth: '15%'}} textStyle={{color: 'white'}} numeric>
                                {score.secondshot}
                            </DataTable.Cell>
                        </DataTable.Row>
                    ))}
                </DataTable>
            </ScrollView>

            <ScoreKeyboard onPress={setSelectedNumber} />
        </>
    );
}

const styles = StyleSheet.create({
    scoreList: {
        flex: 1,
        backgroundColor: "#2e2d2b",
    },
    scoreItem: {
        backgroundColor: "#444",
        padding: 15,
        marginVertical: 5,
        borderRadius: 5,
    },
    scoreText: {
        color: "#fff",
        fontSize: 16,
    },
});