import React, {useEffect} from 'react'
import {View, FlatList} from 'react-native'
// similar to useparams from react
import { useRoute } from '@react-navigation/native';
import SongListItem from '../components/SongListItem';
import albumDetails from '../dummyData/albumDetails';
import AlbumScreenHeader from '../components/AlbumScreenHeader';

const AlbumScreen=() =>{
    const route = useRoute();
    // const albumId = route.params.id;
    useEffect(() => {
        console.log(route)
    },[])
  return (
    <View>
        <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumScreenHeader album={albumDetails} />}
      />
    </View>
  )
}

export default AlbumScreen;