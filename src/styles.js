import {Dimensions, StyleSheet} from 'react-native';

export const searchbarStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 5,
    margin: 10,
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.055,
  },
  input: {
    paddingVertical: 0,
  },
});

export const cityStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 5,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: "#424242",
    fontWeight: 'bold',
    marginLeft: 5
  },
});

export const detailStyle = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    // padding: 10,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
  },
  line: {
    // borderWidth: 1,
    // width: Dimensions.get("window").width / 4,
    // alignSelf: 'center',
    // borderColor: '#e0e0e0',
    // marginVertical: 2
  },
  name: {
    // fontSize: 20,
    // fontWeight: 'bold',
    // color: '#424242',
  },
  address: {
    // fontSize: 12,
  },
  phone: {
    // fontWeight: 'bold',
    // marginLeft: 5
  },
});