import React, { useReducer } from 'react';

type AppState = {
    currentDemo: null | 'one' | 'two';
    currentFlow: any,
};

const initialState: AppState = {
    currentDemo: null,
    currentFlow: null,
};

export const AppContext = React.createContext({
  state: initialState,
  dispatch: (action) => {},
});

export enum actions {
  setStateValue,
  startDemo,
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

function reducer(state: AppState, { action, payload }) {
  switch (action) {
    case actions.setStateValue:
        return { ...state, ...payload };
    case actions.startDemo:
        return { ...state, currentDemo: payload.demo, currentFlow: payload.flow };
    default:
      return state;
  }
}