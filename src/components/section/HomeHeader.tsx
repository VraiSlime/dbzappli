import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ORANGE } from '../../constants/colorConstant'

const HomeHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        {/* Balle positionnée à gauche */}
        <Image
          source={require('../../assets/images/ball.png')}
          style={styles.logo}
        />

        {/* Logo centré */}
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.titleLogo}
        />
      </View>

      <Text style={styles.subtitle}>Personnage légendaires</Text>
      <View style={styles.divider} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#010101',
    paddingTop: 50,
    paddingBottom: 16,
  },
  headerContent: {
    height: 50,               // même hauteur que les images
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',     // pour pouvoir placer la balle en absolu
  },
  logo: {
    position: 'absolute',
    left: 16,                 // marge depuis la gauche
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  titleLogo: {
    width: 150,               // ou '80%' selon la place souhaitée
    height: 50,
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
    color: ORANGE,
  },
  divider: {
    height: 4,
    backgroundColor: ORANGE,
    marginTop: 16,
  },
})

export default HomeHeader
