import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./menu-item.styles";

gsap.registerPlugin(Draggable);

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  const menuItem = React.createRef();

  useEffect(() => {
    Draggable.create(".content");
  });

  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      />
      <ContentContainer className="content">
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
