import React, { useState } from 'react';

const MenuContext = React.createContext({
  menuOpen: false,
  toggleMenu: () => null,
});

const MenuProvider = props => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
    document.body.classList.toggle('overflow-hidden');
  };

  return (
    <MenuContext.Provider
      value={{
        menuOpen: open,
        toggleMenu,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export { MenuProvider, MenuContext };
