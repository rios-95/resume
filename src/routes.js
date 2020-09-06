import React from "react";

const Main = React.lazy(() => import("./components/Main"));
const Timeline = React.lazy(() => import("./components/Timeline"));

const routes = [
    { path: "/timeline", exact: true, name: "Timeline", component: Timeline },
    { path: "/inicio", exact: true, name: "Inicio", component: Main },
];

export default routes;
