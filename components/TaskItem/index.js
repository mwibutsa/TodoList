import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import PendingIcon from '../../assets/icons/undone.png';
import InprogressIcon from '../../assets/icons/inprogress.png';
import CompletedIcon from '../../assets/icons/completed.png';
import PropTypes from 'proptypes';

const TaskItem = ({ name, status, dueDate }) => {
  // assign icons  to relevant task status

  const taskNameStyles = {
    done: { textDecorationLine: 'line-through' },
    'in-progress': { fontWeight: '600' },
  };

  const statusIcons = {
    done: CompletedIcon,
    'in-progress': InprogressIcon,
    pending: PendingIcon,
  };

  return (
    <View style={styles.listItem} testID="list-item">
      <View style={styles.taskInfoContainer}>
        <Image source={statusIcons[status]} />
        <Text style={{ ...styles.taskName, ...taskNameStyles[status] }}>
          {name}
        </Text>
      </View>
      <Text style={styles.taskDueDate}>Due at {dueDate}</Text>
    </View>
  );
};

TaskItem.prototype = {
  name: PropTypes.string,
  status: PropTypes.string,
  dudeDate: PropTypes.string,
};

export default React.memo(TaskItem);
