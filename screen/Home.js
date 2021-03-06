import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, Image} from 'react-native';

const {width} = Dimensions.get('window')

const Home = ({navigation}) =>{
    return (
      <View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 100,
          }}
        >
          <Text
            style={{
              fontSize: 19,
            }}>
              홈화면
            </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Setting", {name: 'Setting'})}
            style={{
              backgroundColor: "white",
              width: width - 60,
              height: 48,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text style={styles.bottomSheetText}>설정으로 가기</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    bottomSheetText: {
      color: "black",
      fontSize: 15,
    },
  });

export default Home;
