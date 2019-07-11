import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getTasks from '../../store/actions/tasksActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAEE',
  },
});

class Tasks extends Component {
  componentDidMount() {
    const { getTasksDispatch } = this.props;
    getTasksDispatch();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Tasks</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { news: state.news };
};

const mapDispatchToProps = dispatch => {
  return { getTasksDispatch: () => dispatch(getTasks()) };
};

Tasks.propTypes = {
  getTasksDispatch: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);
