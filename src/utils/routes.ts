import {Props as Pill} from "../components/Pill.astro";

const Routes: Array<Pill> = [
    {
        hrefLink: "/",
        iconName: "home",
        title: "Home",
        ariaLabel: "Home"
    },
    {
        hrefLink: "/about",
        iconName: "about",
        title: "About",
        ariaLabel: "Learn about Cameron Carley"
    },
    {
        hrefLink: "/projects",
        iconName: "projects",
        title: "Projects",
        ariaLabel: "View Cameron Carley's projects"
    },
    {
        hrefLink: "/contact",
        iconName: "contact",
        title: "Contact",
        ariaLabel: "Contact Cameron Carley"
    }
]

export default Routes;