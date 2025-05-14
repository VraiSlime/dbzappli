import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store';
import { fetchCharacters } from '../store/characters/characterSlice';


const Home = () => {

  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage ] = useState(1);


  useEffect(() => {
    dispatch(fetchCharacters(currentPage, 10))
  }, [dispatch])

  const {characters, loading, error} = useSelector((state:RootState) => state.characters);


  console.log("characters", characters);
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home