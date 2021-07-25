import React from 'react';
import { Layout } from '@ui-kitten/components';
import { BlockButton } from '../components/BlockButton';
import { AppLogotype } from '../components/AppLogotype';
import { Subtitle } from '../components/Subtitle';
import { Input } from './../components/Input';

export const LoginScreen = () => (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30}}>
      <AppLogotype/>
      <Subtitle content="Login" />
      <Input placeholder="Email" keyboardType="email-address" autoCompleteType="email" />
      <Input placeholder="Password" secureTextEntry />
      <BlockButton>Login</BlockButton>
    </Layout>
  );