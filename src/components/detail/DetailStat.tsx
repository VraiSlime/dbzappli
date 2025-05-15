import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { Character } from '../../types/character'
import StatCard from '../ui/StatCard';

interface DetailStatsProps {
    character: Character | null
}

const {width} = Dimensions.get('window');

const DetailStat: React.FC<DetailStatsProps> = ({character}) => {

    console.log(width);

  return (
    <View style={styles.statsContainer}>
        <StatCard label={'Ki'} value={character!.ki}/>
        <StatCard label={'Max ki'} value={character!.maxKi}/>
        <StatCard label={'Genre'} value={character!.gender}/>
        <StatCard label={'Affiliation'} value={character!.affiliation}/>           
    </View>
  )
}

const styles = StyleSheet.create( {
    statsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 24
    }
})

export default DetailStat