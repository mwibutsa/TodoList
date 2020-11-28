import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import styles from './styles';
import PropTypes from 'proptypes';
const TaskStatisticCard = ({
  icon,
  title,
  value,
  onPress,
  activeFilterStatus,
}) => {
  let activeStyles;
  const status = {
    pending: 'pending',
    completed: 'done',
    all: '',
    'in progress': 'in-progress',
  };

  if (activeFilterStatus === status[title?.toLowerCase()]) {
    activeStyles = {
      backgroundColor: '#E4E6C3',
    };
  }

  return (
    <TouchableOpacity
      style={{ ...styles.card, ...activeStyles }}
      onPress={onPress}
      testID="stat-card"
    >
      <View style={styles.cardHeader}>
        <Image style={styles.cardHeaderIcon} source={icon} />
        <Text style={styles.cardHeaderTitle}>{title}</Text>
      </View>
      <Text style={styles.cardValue}>{value}</Text>
    </TouchableOpacity>
  );
};

TaskStatisticCard.prototype = {
  icon: PropTypes.any,
  title: PropTypes.string,
  value: PropTypes.number,
};
export default TaskStatisticCard;
