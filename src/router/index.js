const Home = () => import("./../pages/Home");
const About = () => import("./../pages/About");
const NotFound = () => import("./../pages/404");

export const routers = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  { path: '*', component: NotFound }
];
