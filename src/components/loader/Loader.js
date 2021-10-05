import React from 'react';

export default function Loader(props) {

  return (
    <div style={{margin: props.align}}>
      <img
        src={require('./../../assets/gif/loader.gif').default}
        alt="Loading Application...."
        />
    </div>
  );
}
