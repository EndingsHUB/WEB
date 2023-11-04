import {View, Text, SafeAreaView, StyleSheet, Platform} from 'react-native'
import React from 'react'
import {StatusBar} from 'expo-status-bar'
import InputForm from "../components/InputForm";
import TodoItem from "../components/TodoItem";

// React Native Core Components and APIs
//https://reactnative.dev/docs/components-and-apis#user-interface
// 리액트 네이티브 코어 컴포넌트를 통한 UI 작성

const MainScreen = () => {
    return (
        // SafeAreaView: ios 11 이상 기기에서 상단 영역 제외한 안전 영역내에서 렌더링
        <SafeAreaView style={styles.container}>
            {/* StatusBar : 상단 상태 표시줄 제어*/}
            <StatusBar barStyle={'default'}/>
            
            {/*text는 <Text> 컴포넌트 안에서만 사용할수 있다*/}
            <Text style={styles.pageTitle}>ToDo App</Text>
            
            <View style={styles.listView}>
                <Text style={styles.listTitle}>할 일</Text>
                <TodoItem/>
            </View>
            
            <View style={styles.seperator}/>
            <View style={styles.listView}>
                <Text style={styles.listTitle}>완료된 일</Text>
            </View>
            <InputForm/>
        </SafeAreaView>
    )
}


export default MainScreen

// 스타일시트를 통한 UI 코드 분리
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 30 : 0,
        backgroundColor: '#f7f8fa'
    },
    pageTitle: {
        marginBottom: 35,
        paddingHorizontal: 15,
        fontSize: 54,
        fontWeight: '600',
    },
    seperator: {
        marginHorizontal: 10,
        marginTop: 25,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.2)'
    },
    listView: {
        flex: 1,
    },
    listTitle: {
        marginBottom: 25,
        paddingHorizontal: 15,
        fontSize: 41,
        fontWeight: '500'
    }
})

