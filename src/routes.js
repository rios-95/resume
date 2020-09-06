import React from "react";

const Main = React.lazy(() => import("./components/Main"));
const Timeline = React.lazy(() => import("./components/Timeline"));

const routes = [
    { path: "/timeline", exact: true, name: "Inicio", component: Timeline },
    { path: "/", exact: false, name: "Inicio", component: Main },
];

export default routes;
