import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import LogoIcon from '../../assets/icons/logo.png';
import TaskStatisticCard from '../TaskStatisticCard';
import PendingTaskIcon from '../../assets/icons/undone.png';
import InprogressIcon from '../../assets/icons/inprogress.png';
import CompletedIcon from '../../assets/icons/completed.png';
import AllTasksIcon from '../../assets/icons/list-all.png';
import PropTypes from 'proptypes';

const countStatusTasks = (tasks, taskStatus) => {
  if (tasks) {
    return tasks?.filter(({ status }) => status === taskStatus).length;
  }
  return 0;
};

const Header = ({ tasks, onFilterTasks, activeFilterStatus }) => (
  <View style={styles.header}>
    <View style={styles.brand}>
      <Image source={LogoIcon} style={styles.brandIcon} />
      <Text style={styles.brandName}>Todo List</Text>
    </View>
    <View style={styles.taskStatistics}>
      <TaskStatisticCard
        activeFilterStatus={activeFilterStatus}
        icon={PendingTaskIcon}
        title="PENDING"
        value={countStatusTasks(tasks, 'pending')}
        onPress={() => onFilterTasks('pending')}
      />
      <TaskStatisticCard
        activeFilterStatus={activeFilterStatus}
        icon={InprogressIcon}
        title="IN PROGRESS"
        value={countStatusTasks(tasks, 'in-progress')}
        onPress={() => onFilterTasks('in-progress')}
      />
      <TaskStatisticCard
        activeFilterStatus={activeFilterStatus}
        icon={CompletedIcon}
        title="COMPLETED"
        value={countStatusTasks(tasks, 'done')}
        onPress={() => onFilterTasks('done')}
      />
      <TaskStatisticCard
        activeFilterStatus={activeFilterStatus}
        icon={AllTasksIcon}
        title="ALL"
        value={tasks?.length}
        onPress={() => onFilterTasks('')}
      />
    </View>
  </View>
);

Header.propTypes = {
  tasks: PropTypes.array,
};
export default Header;
