import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../navigations/MainNavigation';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import {fetchCharacterDetail} from '../store/characters/characterSlice';
import Loading from '../components/ui/Loading';
import DetailHeader from '../components/detail/DetailHeader';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const Detail = () => {
  const route = useRoute<DetailScreenRouteProp>();

  const {characterId} = route.params;
  console.log('characterId', characterId);

  const dispatch = useDispatch<AppDispatch>();

  const {characterDetail, loading, error} = useSelector(
    (state: RootState) => state.characters,
  );

  useEffect(() => {
    dispatch(fetchCharacterDetail(characterId));
  }, [dispatch, characterId]);

  //on gere le chargement de la page
  if (loading) {
    return <Loading message={'Chargement des détails du personnage...'} />;
  }

  //on gere le message d'erreur
  if(error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <DetailHeader character={characterDetail} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#FF6B6B',
    textAlign: 'center',
    marginBottom: 16,
  },
  container: {
    flex:1,
    backgroundColor: '#FFF',
  }
});

export default Detail;