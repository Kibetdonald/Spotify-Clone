import { StyleSheet} from "react-native";
// import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 15,
    position: 'absolute',
    width: '100%',
    bottom: 30,
    backgroundColor: '#131313',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',

  },
  rightContainer: {
    justifyContent: 'space-around',
    // marginLeft: 15,
    flexDirection: 'row',
    flex: 1,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-around'

  },
  textContainer:{
   flexDirection: 'row',
   alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },
  artist: {
    color: 'lightgray',
    fontSize: 20,
  }
})

export default styles;