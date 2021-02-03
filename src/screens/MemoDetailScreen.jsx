import React from 'react';
import {
  StyleSheet, Text, View, ScrollView,
} from 'react-native';
import CercleButton from '../components/CercleButton';

export default function MemoDetailScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2020年12月24日 10:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          買い物リスト
          しょらいやレイアウトなどを確認するために利用します。
        </Text>
      </ScrollView>
      <CercleButton
        style={{ top: 60, bottom: 'auto' }}
        name="plus"
        onPress={() => { navigation.navigate('MemoEdit'); }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },

  memoHeader: {
    height: 90,
    backgroundColor: '#467FD3',
    justifyContent: 'center',
    paddingHorizontal: 19,
    paddingVertical: 24,
  },

  memoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    lineHeight: 32,
  },

  memoDate: {
    fontSize: 12,
    color: '#ffffff',
    lineHeight: 16,
  },

  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },

  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
