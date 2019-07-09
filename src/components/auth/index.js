import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LogoComponent from './authLogo';
import AuthForm from './authForm';
import { getTokens, setTokens } from '../../utils/funcs';
import { autoSignIn } from '../../store/actions/userActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#e1f7d2',
  },
  loading: {
    flex: 1,
    backgroundColor: '#F3FAEE',
  },
});

class AuthComponent extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    getTokens(value => {
      if (value[0][1] === null) {
        this.setState({ loading: false });
      } else {
        const { autoSignInDispatch } = this.props;
        autoSignInDispatch(value[1][1]).then(
          () => {
            const { user } = this.props;
            if (!user.auth.token) {
              this.setState({ loading: false });
            } else {
              setTokens(user.auth, () => {
                this.goNext();
              });
            }
          },
          error => {
            return error;
          }
        );
      }
    });
  }

  goNext = () => {
    const { navigation } = this.props;
    navigation.navigate('App');
  };

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <ScrollView style={styles.container}>
        <LogoComponent />
        <AuthForm goNext={this.goNext} />
      </ScrollView>
    );
  }
}

AuthComponent.propTypes = {
  autoSignInDispatch: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.object).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    autoSignInDispatch: value => dispatch(autoSignIn(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthComponent);
