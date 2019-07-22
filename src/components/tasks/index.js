import React, { Component } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getTasks from '../../store/actions/tasksActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAEE',
    alignItems: 'center',
  },
  cardContainer: {
    width: 300,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F3FAEE',
    padding: 20,
    maxHeight: 200,
    margin: 20,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: '#244f44',
    borderWidth: 1,
    borderColor: '#244f44',
    borderStyle: 'solid',
    shadowOffset: { height: 3, width: 3 },
  },
});

class Tasks extends Component {
  componentDidMount() {
    const { getTasksDispatch } = this.props;
    getTasksDispatch();
  }

  renderTask = tasks =>
    tasks.tasks ? (
      tasks.tasks.map(item => {
        return (
          <TouchableOpacity key={item.name}>
            <View style={styles.cardContainer}>
              <Text>{item.name}</Text>
              <Text>{item.daysLeft}</Text>
            </View>
          </TouchableOpacity>
        );
      })
    ) : (
      <View />
    );

  render() {
    const { tasks } = this.props;
    return (
      <ScrollView contentContainerStyle={styles.container}>{this.renderTask(tasks)}</ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

const mapDispatchToProps = dispatch => {
  return { getTasksDispatch: () => dispatch(getTasks()) };
};

Tasks.propTypes = {
  getTasksDispatch: PropTypes.func.isRequired,
  tasks: PropTypes.objectOf(PropTypes.array),
};

Tasks.defaultProps = {
  tasks: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);
