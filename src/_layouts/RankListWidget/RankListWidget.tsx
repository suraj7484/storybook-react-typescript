import React from 'react';
import PropTypes from "prop-types"; 
import { Wrapper } from "./style";

type Props = {
  children: JSX.Element;
};

const RankListWidget = ({children}: Props) => {
  return <Wrapper>{children}</Wrapper>; 
};

RankListWidget.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RankListWidget;
