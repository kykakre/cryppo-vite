import React, { useState } from "react";

const UIContext = React.createContext([{}, () => {}]);

const UIContextProvider = (props) => {
    const [state, setState] = useState({
        isBusiness: false,
        isWallet: true,
        isLk: false,
    });
    return (
        <UIContext.Provider value={[state, setState]}>
            {props.children}
        </UIContext.Provider>
    );
};

export { UIContext, UIContextProvider };
