import React from 'react';

export const LangContext = React.createContext({
  currentLanguage: 'en',
  setLanguage: () => {},
})