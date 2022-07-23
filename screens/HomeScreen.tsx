import { StyleSheet, FlatList } from 'react-native';
import Album from '../components/Album';
import AlbumCategory from '../components/AlbumCategory';

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import albumCategoriesData from '../dummyData/albumCategoriesData';



export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      {/* <AlbumCategory title={albumCategory.title} albums={albumCategory.albums}/> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <FlatList
         data={albumCategoriesData}
         renderItem={({ item }) => (
           <AlbumCategory
             title={item.title}
             albums={item.albums}
           />
         )}
         keyExtractor={(item) => item.id}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
