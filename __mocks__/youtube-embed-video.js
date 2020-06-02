/* eslint-disable react/prop-types */
import React from 'react';

const Player = ({ children, ...props }) => <div {...props}>{children}</div>;

export default Player;
