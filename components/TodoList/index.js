import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, FlatList, Text, Alert } from 'react-native';
import TaskItem from '../TaskItem';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import getTodoList from '../../redux/actions';
import Header from '../Header';

const TodoList = () => {
  const dispatch = useDispatch();
  const [tasksToDisplay, setTasksToDisplay] = useState([]);
  const [activeFilterStatus, setActiveFilterStatus] = useState('');

  const {
    loading,
    todoList: { tasks },
    error,
  } = useSelector(({ todoList }) => todoList);

  // fetch todo list
  useEffect(() => {
    getTodoList()(dispatch);
  }, [dispatch]);

  // show potential error messages to the user.
  useEffect(() => {
    if (error) {
      Alert.alert('Error', error?.message);
    }
  }, [error]);

  const filterTasksHandler = (status) => {
    setActiveFilterStatus(status);
    if (status === '') {
      setTasksToDisplay(tasks);
    }
    const filteredTasks = tasks.filter((task) => task.status === status);
    setTasksToDisplay(filteredTasks);
  };

  // display activity indicator if data is still loading
  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
      {tasks ? (
        <FlatList
          ListHeaderComponent={
            <Header
              tasks={tasks}
              loading={loading}
              onFilterTasks={filterTasksHandler}
              activeFilterStatus={activeFilterStatus}
            />
          }
          data={tasksToDisplay.length ? tasksToDisplay : tasks}
          style={styles.todoList}
          renderItem={({ item }) => (
            <TaskItem
              name={item.name}
              status={item.status}
              dueDate={item.due_date}
            />
          )}
          keyExtractor={(item) => `${item.id}`}
        />
      ) : (
        <View style={styles.noData}>
          <Header />
          <Text>No tasks </Text>
        </View>
      )}
    </>
  );
};

export default TodoList;
