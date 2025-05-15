import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Planet } from '../../types/character'

interface DetailPlanetProps {
    planet: Planet
}

const DetailPlanet:React.FC<DetailPlanetProps> = ({planet}) => {

    if(!planet) return null;

  return (
    <View style={styles.container}>
        <Text style={styles.sectionTitle}>Planète d'origine</Text>
        <View style={styles.planetCard}>
            {planet?.image && (
                <Image
                    source={{uri:planet?.image}}
                    style={styles.planetImage}
                />
            )}
            <View>
                <Text>{planet?.name}</Text>
                <Text>{planet?.isDestroyed ? 'Détruite' : 'Existante'}</Text>
                <Text>{planet?.description}</Text>
            </View>
            <View style={styles.planetInfo}>
                <Text style={styles.planetName}>{planet?.name}</Text>
                <Text style={[styles.planetStatus, {color: planet?.isDestroyed ? '#FF6B6B' : '#4CAF50'}]}>{planet?.isDestroyed ? 'Détruite' : 'Existante'}</Text>
                <Text style={styles.planetDescription}>{planet?.description}</Text>
            </View>
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        marginBottom: 24,
    },
    sectionTitle : {
        fontSize:22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    planetCard : {
        backgroundColor: '#F8F8F8',
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation:2
    },
    planetImage : {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
    },
    planetInfo : {
        padding: 16,
    },
    planetName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    planetStatus: {
        fontSize: 14,
        fontWeight: '500',
        color: '#FF6B6B',
        marginBottom: 8,
    },
    planetDescription : {
        fontSize : 14,
        lineHeight: 20,
        color: '#555',
    }
})

export default DetailPlanet