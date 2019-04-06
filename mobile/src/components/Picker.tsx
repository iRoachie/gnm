import React from 'react';
import {
  FlatList,
  Keyboard,
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  Dimensions,
} from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import Modal from 'react-native-modal';

import { Theme } from '../util';
import Touchable from './Touchable';

interface Props<T> {
  label: string;
  message: string;
  values: T[];
  value: T | null;
  displayKey: keyof T;
  displayValue: keyof T;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  valueStyle?: StyleProp<TextStyle>;
  showDropdown?: boolean;
  onPress(item: T): void;
}

interface State {
  isVisible: boolean;
}

class Picker<T> extends React.Component<Props<T>, State> {
  state = {
    isVisible: false,
  };

  togglePicker = () => {
    Keyboard.dismiss();
    this.setState(({ isVisible }) => ({ isVisible: !isVisible }));
  };

  makeSelection = (item: T) => {
    this.props.onPress(item);
    this.togglePicker();
  };

  render() {
    const {
      label,
      message,
      value,
      values,
      error,
      displayKey,
      displayValue,
      containerStyle,
      buttonStyle,
      showDropdown = true,
      valueStyle,
    } = this.props;
    const { isVisible } = this.state;

    return (
      <>
        <View style={[styles.container, containerStyle]}>
          <Text
            style={[
              styles.titleStyle,
              {
                marginLeft: 0,
                fontSize: 15,
              },
            ]}
          >
            {label}
          </Text>

          <Touchable style={buttonStyle} onPress={this.togglePicker}>
            <View
              style={{
                minHeight: 40,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(0,0,0,.05)',
              }}
            >
              <Text
                style={[
                  styles.valueStyle,
                  valueStyle,
                  showDropdown && { paddingRight: 36 },
                ]}
              >
                {value && value[displayValue]}
              </Text>

              {showDropdown && <Icon type="ionicon" name="md-arrow-dropdown" />}
            </View>
          </Touchable>

          {!!error && (
            <Text
              style={{
                color: Theme.error,
                fontFamily: Theme.fonts.medium,
                marginTop: 5,
                fontSize: 12,
              }}
            >
              {error}
            </Text>
          )}
        </View>

        <Modal
          isVisible={isVisible}
          onBackButtonPress={this.togglePicker}
          onBackdropPress={this.togglePicker}
          style={{
            justifyContent: 'flex-end',
            margin: 0,
          }}
        >
          <View style={{ backgroundColor: '#fff' }}>
            <Text style={styles.message}>{message}</Text>

            <FlatList
              data={values}
              keyExtractor={a => String(a[displayKey])}
              style={{ maxHeight: Dimensions.get('window').height / 2 }}
              renderItem={({ item }) => {
                const isSelected =
                  value && item[displayKey] === value[displayKey];
                return (
                  <ListItem
                    title={String(item[displayValue])}
                    titleStyle={[
                      styles.itemStyle,
                      isSelected && styles.itemStyleSelectedText,
                    ]}
                    containerStyle={[isSelected && styles.itemStyleSelected]}
                    onPress={() => this.makeSelection(item)}
                  />
                );
              }}
            />

            <ListItem
              title="Cancel"
              titleStyle={styles.itemStyle}
              onPress={this.togglePicker}
              topDivider
              leftIcon={{ name: 'close', color: Theme.primary }}
            />
          </View>
        </Modal>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    marginBottom: 15,
  },
  message: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    fontSize: 15,
    fontFamily: Theme.fonts.semibold,
    color: Theme.primary,
  },
  titleStyle: {
    fontFamily: Theme.fonts.semibold,
    marginLeft: 15,
    color: 'rgba(0,0,0,.54)',
    fontSize: 15,
  },
  valueStyle: {
    fontSize: 15,
    color: 'rgba(0,0,0,.87)',
    fontFamily: Theme.fonts.medium,
  },
  itemStyle: {
    fontFamily:
      Platform.OS === 'ios' ? Theme.fonts.regular : Theme.fonts.medium,
    color: 'rgba(0,0,0,.87)',
    fontSize: 16,
  },
  itemStyleSelected: {
    backgroundColor: Theme.primary,
  },
  itemStyleSelectedText: {
    color: '#fff',
  },
});

export default Picker;
