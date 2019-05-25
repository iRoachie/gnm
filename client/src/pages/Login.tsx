import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { RouteComponentProps, navigate, Redirect } from '@reach/router';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import validator from 'validator';
import Helmet from 'react-helmet';

import client from '../graphql';
import { loginMutation } from '../../../mobile/src/graphql/mutations';
import { LoginResponse } from '../../../mobile/src/types';

import banner from '../assets/blue-g-bg.jpg';
import logo from '../assets/logo.png';
import { AuthContext } from '../util/AuthContext';

const useStyles = makeStyles(() =>
  createStyles({
    textField: {
      marginBottom: '1rem',
      width: '100%',
    },
    button: {
      marginTop: '1rem',
      width: '100%',
    },
  })
);

const Login: React.FunctionComponent<RouteComponentProps> = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, setDetails } = useContext(AuthContext);

  const styles = useStyles();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setPasswordError('');
    setEmailError('');
    setError('');

    try {
      await validate();
      setLoading(true);
      await login();
    } catch (e) {
      setLoading(false);
      if (e.emailError) {
        setEmailError(e.emailError);
      }

      if (e.passwordError) {
        setPasswordError(e.passwordError);
      }
    }
  };

  const login = async () => {
    try {
      const { data } = await client.mutate<LoginResponse>({
        mutation: loginMutation,
        variables: {
          email,
          password,
        },
      });

      setDetails(data!.login);

      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      let message = "Couldn't sign in at this time. Try again later.";

      if (error.graphQLErrors.length > 0) {
        message = error.graphQLErrors[0].message;
      }

      setTimeout(() => {
        setError(message);
        setLoading(false);
      }, 1000);
    }
  };

  const validate = () => {
    return new Promise((resolve, reject) => {
      if (validator.isEmpty(email) && validator.isEmpty(password)) {
        return reject({
          emailError: 'Enter your email',
          passwordError: 'Enter your password',
        });
      }

      if (validator.isEmpty(email)) {
        return reject({ emailError: 'Enter your email' });
      }

      if (!validator.isEmail(email)) {
        return reject({ emailError: 'Enter a valid email' });
      }

      if (validator.isEmpty(password)) {
        return reject({ passwordError: 'Enter your password' });
      }

      resolve();
    });
  };

  return user ? (
    <Redirect to="/" noThrow />
  ) : (
    <main className="min-h-screen flex">
      <Helmet>
        <title>Login | GNM 2019</title>
      </Helmet>

      <Banner className="flex-1 hidden md:block" />

      <div className="flex-1 flex flex-col items-center justify-center">
        <Content className="w-full flex flex-col items-center">
          <Logo src={logo} className="mb-4" />

          <h1 className="text-primary text-3xl mb-4">Sign in</h1>

          <form onSubmit={submit}>
            <TextField
              label={emailError || 'Email'}
              value={email}
              type="email"
              onChange={e => setEmail(e.currentTarget.value)}
              className={styles.textField}
              error={!!emailError}
              disabled={loading}
            />

            <TextField
              label={passwordError || 'Password'}
              type="password"
              value={password}
              onChange={e => setPassword(e.currentTarget.value)}
              className={styles.textField}
              error={!!passwordError}
              disabled={loading}
            />

            <p className="text-red-700 my-2 text-center">{error}&nbsp;</p>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={styles.button}
              disabled={loading}
            >
              Sign in
              {loading && <CircularProgress className="ml-4" size={20} />}
            </Button>
          </form>
        </Content>
      </div>
    </main>
  );
};

const Banner = styled.div`
  background-image: url(${banner});
  background-size: cover;
`;

const Content = styled.div`
  max-width: 400px;
`;

const Logo = styled.img`
  width: 200px;
`;

export default Login;
