/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import proceed from 'common/utils/proceed';

let granted;

export const setGranted = gtd => {
  granted = gtd;
};

const ConsentAwareView = ({ children, whenGrantedIs, whenGrantedIsNot }) =>
  proceed(granted, whenGrantedIs, whenGrantedIsNot) ? <Fragment>{children}</Fragment> : null;

export default ConsentAwareView;
