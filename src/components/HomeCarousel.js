import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const images = [
  'https://www.omipharma.vn/files/banner/2020-07/xit-chong-nang-lishan-nhat-ban-spf-50-pa-huong-tinh-dau-thien-nhien.jpg',
  'https://www.omipharma.vn/files/banner/2020-06/omi-pharma-thau-hieu-hon-moi-ngay.jpg',
  'https://www.omipharma.vn/files/banner/2020-06/omi-pharma-thau-hieu-nhu-cau-dan-dau-lua-chon.jpg',
];

const HomeCarousel = () => {
  const [active, setActive] = useState(0);

  const change = (nativeEvent) => {
    // console.log("nativeEvent:", nativeEvent)
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide !== active) {
        setActive(slide);
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({nativeEvent}) => change(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}>
          {images.map((e, index) => (
            // <Image
            //   key={e}
            //   resizeMode="stretch"
            //   style={styles.wrap}
            //   source={{uri: e}}
            // />
            <View style={styles.wrap}>
              <View style={styles.box}>
                <View style={styles.imageContainer}></View>
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            // <Text
            //   key={e}
            //   style={active === index ? styles.dotActive : styles.dot}>
            //   ●
            // </Text>
            <Ionicons
              name={active === index ? 'ellipse' : 'ellipse-outline'}
              size={10}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default HomeCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  wrap: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.25, // 25% window
  },
  wrapDot: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'space-around',
    width: 55,
  },
  dot: {
    margin: 3,
    color: 'lightgray',
    fontSize: 20,
  },
  dotActive: {
    margin: 3,
    color: 'black',
    fontSize: 20,
  },
  box: {
    width: '90%',
    backgroundColor: '#f2f2f2',
    height: '100%',
    marginHorizontal: 20,
    borderRadius: 5,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 130,
    width: 130,
    backgroundColor: 'white',
    borderRadius: 65,
    marginTop: 20,
  },
});
