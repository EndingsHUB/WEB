import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import CheckboxUnchecked from '../assets/checkbox-unchecked.svg';
import CheckboxChecked from '../assets/checkbox-checked.svg';
import DeleteIcon from '../assets/delete.svg';

// todoitem 컨포넌트
const TodoItem = () => {
    return (
        <View style={styles.itemContainer}>
            {/*Pressable : 터치 입력에 대한 동작을 정의*/}
            <Pressable
                // HitRect : 터치 입력으로 인식 되는 영역
                // PressRect : 터치가 유지 되는 영억 - 이 영역을 벗어나면 PressOut이 된다.
                hitSlop={10} // 추가적으로 터치 영역을 확장 할 수 있다.
                style={styles.itemCheckbox}
            >
                {/*SVG 파일 로드*/}
                <CheckboxUnchecked/>
                <CheckboxChecked style={styles.itemCheckboxCheckedIcon}/>
                
            </Pressable>

            <Text style={[styles.itemText, styles.itemTextChecked]}>
                코딩하기
            </Text>

            <Pressable
                style={[styles.deleteButton, styles.deleteButtonDone]}
                hitSlop={10}
            >

                {/*SVG 파일 로드*/}
                <DeleteIcon/>
                
            </Pressable>
        </View>
    );
}

export default TodoItem;

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 15,
        paddingHorizontal: 15,
        backgroundColor: '#f7f8fa'
    },
    itemCheckbox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        marginRight: 13,
        borderRadius: 6
    },
    itemCheckboxCheckedIcon: {
        shadowColor: '#000000',
        shadowOffset: 0.14,
        shadowRadius: 8,
        textShadowOffset: {
            width: 0,
            height: 4
        }
    },
    itemText: {
        marginRight: 'auto',
        paddingRight: 25,
        fontSize: 15,
        lineHeight: 20,
        color: '#737373'
    },
    itemTextChecked: {
        opacity: 0.3,
        textDecorationLine: 'line-through'
    }
});