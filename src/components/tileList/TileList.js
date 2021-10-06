import React from "react";

import { Tile } from "../tile/Tile";

export const TileList = ({ contacts }) => {
  const contactList = contacts.map((contact, index) => {
    return (
      <Tile
        key={index}
        name={contact.name}
        phone={contact.phone}
        email={contact.email}
      />
    );
  });

  return <div>{contactList}</div>;
};
