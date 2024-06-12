import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Faq = ({data}) => {
  const [accord, setAccord] = useState(data);
  //   const handleaccord = item => {
  //     // console.log(item);
  //     let index = data.findIndex((val, index) => val.title === item.title);
  //     console.log('obj>>>>', index);
  //     data[index].showsubtitle=true;
  //   };

  const handleaccord = item => {
    const updatedAccord = accord.map(accordItem => {
      if (accordItem.title === item.title) {
        return {
          ...accordItem,
          showsubtitle: !accordItem.showsubtitle, // Toggle the showsubtitle property
        };
      }
      return accordItem;
    });
    setAccord(updatedAccord);
  };

  console.log('>>>>>>>>>>data>>>>>>>>>>', accord);

  return (
    <ScrollView automaticallyAdjustContentInsets>
      <View style={{alignItems: 'center', height: responsiveHeight(120)}}>
        <FlatList
          data={accord}
          renderItem={({item}) => (
            <View
              style={{
                width: responsiveWidth(90),
                borderRadius: 20,
                backgroundColor: '#D2D9D1',
                padding: 10,
                margin: 10,
              }}>
              <TouchableOpacity
                style={{justifyContent: 'space-between', flexDirection: 'row'}}
                onPress={() => handleaccord(item)}>
                <Text style={{fontWeight: 700}}>{item.ques}</Text>
                <Image source={require('../assets/accordianicon.png')} />
              </TouchableOpacity>

              {item.showsubtitle && <Text>{item.title}</Text>}
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Faq;
