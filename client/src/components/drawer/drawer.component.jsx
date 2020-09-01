import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { HamburgerTitle, SubOptionsContainer, ListItem } from "./drawer.styles";

import "./drawer.styles.css";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer({ children }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const [toggleFurniture, setToggleFurnitureTo] = React.useState(false);
  const [toggleClothing, setToggleClothingTo] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <HamburgerTitle>SHOP CHARACTER</HamburgerTitle>
        {["Wednesday", "Vannellopee", "Sullivan", "Barrymore"].map(
          (text, index) => (
            <SubOptionsContainer key={Math.random}>
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            </SubOptionsContainer>
          )
        )}
      </List>
      <Divider />
      <List>
        <HamburgerTitle>SHOP COLLECTION</HamburgerTitle>
        <SubOptionsContainer>
          <ListItem onClick={() => setToggleFurnitureTo(!toggleFurniture)}>
            Furniture
          </ListItem>
          {toggleFurniture && (
            <SubOptionsContainer>
              <ListItem>Pet Beds</ListItem>
              <ListItem>Pet Sofas</ListItem>
            </SubOptionsContainer>
          )}

          <ListItem onClick={() => setToggleClothingTo(!toggleClothing)}>
            Clothing
          </ListItem>
          {toggleClothing && (
            <SubOptionsContainer>
              <ListItem>Jackets</ListItem>
              <ListItem>Shirts</ListItem>
              <ListItem>Dresses</ListItem>
              <ListItem>Costumes & Leisure</ListItem>
            </SubOptionsContainer>
          )}
          <ListItem>Feeding</ListItem>
          <ListItem>Cleaning</ListItem>
        </SubOptionsContainer>
      </List>
      <Divider />
      <List>
        <HamburgerTitle>PESTIMONIALS</HamburgerTitle>
        <SubOptionsContainer>
          <ListItem>Pestimonials</ListItem>
        </SubOptionsContainer>
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{children}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
