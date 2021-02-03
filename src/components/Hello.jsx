import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { string, bool } from 'prop-types';

function Hello(props) {
  const { children } = props;
  return (
    <View>
      <Text style={styles.text} />
    </View>
  );
}

Hello.prototype = {
  children: string.isRequired,
  bang: bool,
};

Hello.defaultProps = {
  bang: false,
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    color: '#ffffff',
  },
});
export default Hello;
