import Communities from "../pages/Communities";
import EachCommunity from "../pages/EachCommunity";
import Home from "../pages/Home";
import ReactDOMServer from "react-dom/server";
import TotalResidents from "../pages/TotalResidents";
import DuesCreated from "../pages/DuesCreated";
import Groups from "../pages/Groups";
import Liscence from "../pages/Liscence";
import Finance from "../pages/Finance";
import Liscences from "../pages/Liscences";
import Setting from "../pages/Setting";
import Integrations from "../pages/Integrations";
// import extractTextFromComponent from "../utils/extractTextFromComponent"

const extractTextFromComponent = (Component) => {
  const htmlString = ReactDOMServer.renderToString(<Component />);
  const textContent = htmlString.replace(/<[^>]*>/g, ''); // Strip HTML tags
  return textContent;
};


const renderComponentToString = (Component) => {
const htmlString =  ReactDOMServer.renderToString(<Component />)
  const textContent = htmlString.replace(/<[^>]*>/g, '');
  return textContent;
};  

const componentHtmlString = renderComponentToString(Liscences);
console.log(componentHtmlString);



export const contentIndex = [
  {
    page: "Dashboard",
    path: "/dashboard",
    content: renderComponentToString(Home),
  },
  // {
  //   page: "Communities",
  //   path: "/communities",
  //   content: renderComponentToString(Communities),
  // },
  // {
  //   page: "EachCommunity",
  //   path: "/communities/:id",
  //   content: extractTextFromComponent(EachCommunity),
  // },
  // {
  //   page: "TotalResidents",
  //   path: "/communities/:id/total_residents",
  //   content: extractTextFromComponent(TotalResidents),
  // },
  // {
  //   page: "DuesCreated",
  //   path: "/communities/:id/dues_created",
  //   content: extractTextFromComponent(DuesCreated),
  // },
  // {
  //   page: "Groups",
  //   path: "/communities/:id/groups",
  //   content: extractTextFromComponent(Groups),
  // },
  // //
  // {
  //   page: "Liscence",
  //   path: "/communities/:id/liscence_purchased",
  //   content: extractTextFromComponent(Liscence),
  // },
  {
    page: "Finance",
    path: "/financials",
    content: extractTextFromComponent(Finance),
  },
  {
    page: "Integrations",
    path: "/integrations",
    content: extractTextFromComponent(Integrations),
  },
  {
    page: "Liscences",
    path: "/licenses",
    content: extractTextFromComponent(Liscences),
  },
  {
    page: "Setting",
    path: "/settings",
    content: extractTextFromComponent(Setting),
  },
];
