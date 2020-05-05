import React from 'react';

import { StorageProvider } from './storage';

const AppProvider: React.FC = ({ children }) => (
  <StorageProvider>{children}</StorageProvider>
);

export default AppProvider;
