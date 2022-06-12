import { Route } from "react-router-dom";
import Card from "./pages/dashboard/Card";
import Dashboard from "./pages/dashboard/Dashboard";

const Ciao = () => {
  return <h1>Ciao</h1>;
};
const HelloWorld = () => {
  return <h1>Hello HelloWorld</h1>;
};

const actions = {
  comments: 764,
  likes: 11111,
  attachments: 5,
};

const routes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/card",
    element: (
      <>
        <Card
          descr={"Ciao sono la carta"}
          title={"Sono il titolo"}
          actions={actions}
        />
        <Card
          descr={"Ciao sono la carta"}
          title={"Sono il titolo"}
          actions={actions}
        />
      </>
    ),
  },
  {
    path: "/",
    element: <Ciao />,
  },
  {
    path: "*",
    element: (() => <h1>404 Not Found</h1>)(),
  },
];
export default routes;
