import React from 'react';
import useStyles from "./Loader.styles";

export default function Loader(props) {
  const { loader } = useStyles();

  return (
    <div style={{margin: props.align}}>
      <img
        src={require('./../../assets/gif/loader.gif').default}
        alt="Loading Application...."
        />
    </div>
  );
}
