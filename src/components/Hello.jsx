import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {string,bool} from 'prop-types';

function Hello(props) {
  const {children, bang} = props;
  return (
    <View>
      <Text style={styles.text}>
          {`Hello ${children} ${bang ? '!' : '' }`}
      </Text>
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
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 16,
  },
});
export default Hello;
