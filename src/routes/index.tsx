import React from 'react';

import { BrowserRouter, Link } from 'react-router-dom'

const Routes: React.FC= () => {

  return (
    <BrowserRouter basename="/">
      <Link />
    </BrowserRouter>
  );
}

export default Routes;