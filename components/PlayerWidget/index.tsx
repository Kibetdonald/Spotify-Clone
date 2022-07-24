// Component for the player widget
import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import { Song } from '../../types';
import styles from './styles';
import {AntDesign, FontAwesome} from '@expo/vector-icons';


// songs
const song = {
  id: '1',
  imageUri: 'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/cre4xcrus9cboynvytuz/best-drake-album-cover-art-scorpion?fimg-client-default',
  title: 'Hotline Bling',
  artist: 'Drake',
}

const PlayerWidget = () =>{
  return (

<View style={styles.container}>
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      
  <View style={styles.rightContainer}>
     <View style={styles.textContainer}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
      </View>   
      <View style= {styles.iconsContainer}>
          <AntDesign size={30} color="white" name="hearto"/>
          <FontAwesome size={30} color="white" name="play"/>
      </View>
   </View>
</View>

  )
}
export default  PlayerWidget