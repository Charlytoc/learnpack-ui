import React, { Suspense, lazy } from 'react';

import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Theme } from './styles/index';

const Root = lazy(() => import('./routes/root'));
const Test = lazy(() => import('./routes/test'));
// const Dos = lazy(() => import('./routes/dos'));
const ErrorPage = lazy(() => import('./routes/error-page'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    // Rutas anidadas
    children: [
      {
        path: 'test',
        element: <Test />,
      },
      // {
      //   path: 'dos',
      //   element: <Dos />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle theme={Theme} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>
);

// import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
