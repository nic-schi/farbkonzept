import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import Auswertung from "./routes/auswertung/Auswertung";
import {Container} from "react-bootstrap";
import Farbkonzept from "./routes/farbkonzept/Farbkonzept";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/farbkonzept",
        element: <Farbkonzept />
    },
    {
        path: "/auswertung",
        element: <Auswertung />,
    }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Container className={"content"}>
          <RouterProvider fallbackElement={<App />} router={router} />
      </Container>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
