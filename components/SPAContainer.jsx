import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import NavBar from "./NavBar";

function routerSetup(pages, name) {
  let sitemap = [];
  let routes = [];

  pages.map(([Button, path, Content]) => {
    let route = {};
    route.path = path;
    route.element = Content;
    routes.push(route);
  });

  let buttons = [];
  pages.map(([Button, path, Content]) => {
    buttons.push([Button, path]);
  });

  let container = {};
  container.path = "/";
  container.element = (
    <div>
      <Outlet />
      <NavBar name={name} buttons={buttons} />
    </div>
  );
  container.children = routes;

  sitemap.push(container);

  return createBrowserRouter(sitemap);
}

export default function SPAContainer({
  pages = [
    [
      "Home",
      "/",
      () => {
        return <p>Hello!</p>;
      },
    ],
  ],
  name = "app",
}) {
  const router = routerSetup(pages, name);
  return <RouterProvider router={router} />;
}
