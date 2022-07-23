import React from 'react'
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {Album} from '../../types';
import AlbumComponent from '../Album';

export type AlbumCategoryProps ={
    title: string,
    albums: [Album]
    }

const AlbumCategory = (props: AlbumCategoryProps)=>{
  return (
   <View style={styles.container}>
    {/* <Image source={{uri: props.album.imageUri}} style={styles.image}/> */}
    <Text style={styles.title}>{props.title}</Text>
    {/* Display list of albums */}
    <FlatList
      data={props.albums}
      renderItem={({ item }) => <AlbumComponent album={item} />}
      keyExtractor={( item ) => item.id}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
    </View>
  )
}

export default AlbumCategory