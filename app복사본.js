import React from "react";
import { 
  View, 
  Text, 
  Dimensions, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Animated,
  Alert, 
  Image,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

//https://www.youtube.com/watch?v=B5WU6qSGw9o
export default function App() {
  return (
    <View style={styles.container}>
      
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.imageAndTextScroll}>
          <Image
            source={{uri: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"}}
            style={{width: 300, height: 300, marginTop: 150}}/>
          <Text style={{...styles.description, marginTop: 100,}}>내 아이템을 기록해보세요</Text>
        </View>
        <View style={styles.imageAndTextScroll}>
          <Image
            source={{uri: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"}}
            style={{width: 300, height: 300, marginTop: 150}}/>
            <Text style={{...styles.description, marginTop: 90,}}>나만의 기준으로</Text>
            <Text style={styles.description}>내 옷장을 정리할 수 있어요</Text>
        </View>
      </ScrollView>
      <View style={{...styles.buttonContainer}}>
        <TouchableOpacity 
          onPress ={() => {
            Alert.alert('시작합니다.')
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>        시작하기        </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollContainer: {},
  imageAndTextScroll: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 150,
    fontWeight: "600",
    fontSize: 178,
  },
  description: {
    fontSize: 15,
  },
  buttonContainer: {
    flex: 2.5,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 20,
    width: 200,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "500",
    color: 'white',
  },
});