import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { ToastContainer } from "react-toastify";
import { PermissionProvider } from "./utils/permission/permissionContext";
import { SearchProvider } from "./context/SearchContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <Provider store={store}>
    <SearchProvider>
    <PermissionProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PermissionProvider>
    </SearchProvider>
    
    </Provider>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import store, { persistor } from "./redux/store";
// import { BrowserRouter } from "react-router-dom";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { PersistGate } from "redux-persist/integration/react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import "./index.css";
// import App from "./App";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
// import { PermissionProvider } from "./utils/permission/permissionContext";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//       refetchOnReconnect: false,
//       retry: false,
//       staleTime: 5 * 60 * 1000,
//     },
//   },
// });

// const theme = createTheme({
//   direction: "rtl",
//   // other theme properties
// });

// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       {" "}
//       <ToastContainer />
//       <Provider store={store}>
//         <PermissionProvider>
//           <PersistGate loading={null} persistor={persistor}>
//             <BrowserRouter>
//               <QueryClientProvider client={queryClient}>
//                 <App />
//               </QueryClientProvider>
//             </BrowserRouter>
//           </PersistGate>
//         </PermissionProvider>
//       </Provider>
//     </ThemeProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
