import React, { ImgHTMLAttributes } from 'react';

import logo from '../../assets/ttd.png';

import { Container } from './styles';

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>;

const Logo: React.FC<ImageProps> = (props) => {
  return  <Container src={logo} alt="TTD Logo" {...props}/>;
}

export default Logo;