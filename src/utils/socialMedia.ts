
export type SocialMedia = {
    color: string,
    href: string,
    title: string,
    body: string,
    iconName: string,
}


const SocialMediaInfo: Array<SocialMedia> =
    [
        {
            color: "#171515",
            href: "https://docs.astro.build/",
            title: "Github",
            body: "My hobby work. Including this website",
            iconName: "github"
        },
        {
            color: "#0077B5",
            href: "https://www.linkedin.com/in/cameron-carley-711b07169/?originalSubdomain=ca",
            title: "Linkedin",
            body: "Work stuff! Let's connect!",
            iconName: "linkedin"
        },
        {
            color: "#1DA1F2",
            href: "https://www.twitter.com/camcarley",
            title: "Twitter",
            body: "The only social media I bother with",
            iconName: "twitter"
        },
        {
            color: "#8a3ab9",
            href: "https://www.instagram.com/walliethegreat/",
            title: "Dogstagram",
            body: "Keep up with the life of my Great Pyreness",
            iconName: "instagram"
        }
    ]


export default SocialMediaInfo;