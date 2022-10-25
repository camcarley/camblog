export type Route = {
    path:string;
    iconName:string;
    navTitle:string;
    ariaLabel:string;
}

const Routes: Array<Route> = [
    {
        path: "/",
        iconName: "home",
        navTitle: "Home",
        ariaLabel: "Home"
    },
    {
        path: "/about",
        iconName: "about",
        navTitle: "About",
        ariaLabel: "Learn about Cameron Carley"
    },
    {
        path: "/projects",
        iconName: "projects",
        navTitle: "Projects",
        ariaLabel: "View Cameron Carley's projects"
    },
    {
        path: "/contact",
        iconName: "contact",
        navTitle: "Contact",
        ariaLabel: "Contact Cameron Carley"
    }
]

export default Routes;