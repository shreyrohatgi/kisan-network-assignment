import { useRoutes } from "react-router-dom";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import ContactInfoPage from "./Pages/ContactInfoPage";
import NewMessage from "./Pages/NewMessage";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Page1 />,
    },
    {
      path: "message",
      element: <Page2 />,
    },
    {
      path: "contactInfo",
      element: <ContactInfoPage />,
    },
    {
      path: "newMessage",
      element: <NewMessage />,
    },
  ]);
};

export default Routes;
