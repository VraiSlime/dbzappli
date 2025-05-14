import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store';
import { fetchCharacters, setSelectedCharacterId } from '../store/characters/characterSlice';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/ui/Loading';
import { YELLOW } from '../constants/colorConstant';
import HomeHeader from '../components/section/HomeHeader';
import CharacterCard from '../components/ui/CharacterCard';
import { RootStackParamList } from '../navigations/MainNavigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { RefreshControl } from 'react-native-gesture-handler';
import Pagination from '../components/section/Pagination';


type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {

  //on recup les hooks
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  //on declare nos states
  const [currentPage, setCurrentPage ] = useState(1);
  const [refreshing, setRefreshing] = useState(false);


  useEffect(() => {
    dispatch(fetchCharacters(currentPage, 10))
  }, [dispatch, currentPage])

  const loadCharacters = () => {
    dispatch(fetchCharacters(currentPage,10))
  }

  const {characters, loading, error} = useSelector((state:RootState) => state.characters);


  console.log("characters", characters);

  const handleSelectCharacter = (characterId: number) => {
    dispatch(setSelectedCharacterId(characterId));
    navigation.navigate('Detail', {characterId})
  }

  const handleRefresh = () => {
    setRefreshing(true);
    loadCharacters();
    setRefreshing(false);
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  }

//on traite le cas du chargements des données 
if(loading && !characters) {
  return <Loading message={"Chargement des personnages.."}></Loading>
}  

if(error && !characters) {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>Error</Text>
      <Text style={styles.retryText} onPress={loadCharacters}>Appuyer pour réessayer</Text>
    </View>
  )
}

  return (
    <View style={styles.container}>
      <HomeHeader/>
      <FlatList
      data = {characters?.items || []}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <CharacterCard character={item}
        onPress={()=> handleSelectCharacter(item.id)} />
      )}
      refreshControl={
        <RefreshControl 
        refreshing={refreshing}
        onRefresh={handleRefresh}
        colors={['#FF6B6B']}
        tintColor={'#FF6B6B'}
        
        />
      }
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={true}
      />

      {characters?.meta && (
        <Pagination
        currentPage={characters.meta.currentPage}
        totalPages={characters.meta.totalPages}
        onPageChange={handlePageChange}
        />
      )}

    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000'
  },
  errorContainer : {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    padding: 20
  },
  errorText: {
    fontSize: 16,
    color: '#FF6B6B',
    textAlign: 'center',
    marginBottom: 16
  },
  retryText : {
    fontSize: 16,
    color: '#5D5FEF',
    fontWeight: 'bold',
    padding:8
  }, 
  listContent: {
    paddingVertical: 12,
    paddingBottom: 80
  }
})

export default Home