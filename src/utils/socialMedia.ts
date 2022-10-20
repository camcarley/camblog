
export type SocialMedia = {
    color: string,
    href: string,
    title: string,
    body: string,
    iconName: string,
}


let colors = [
    "#008040", "#9932CC", "#00AA55", "#E00000", "yellow"
]

let l = colors.length;

const genRandomNum = (): number => Math.floor(Math.random() * (l - 0 + 1)) + 0

const genRandomColor = (): string => colors[genRandomNum()]






const SocialMediaInfo: Array<SocialMedia> =
    [
        {
            color: genRandomColor(),
            href: "https://docs.astro.build/",
            title: "Github",
            body: "My hobby work. Including this website",
            iconName: "github"
        },
        {
            color: genRandomColor(),
            href: "https://www.linkedin.com/in/cameron-carley-711b07169/?originalSubdomain=ca",
            title: "Linkedin",
            body: "Work stuff! Let's connect!",
            iconName: "linkedin"
        },
        {
            color: genRandomColor(),
            href: "https://www.twitter.com/camcarley",
            title: "Twitter",
            body: "The only social media I bother with",
            iconName: "twitter"
        },
        {
            color: genRandomColor(),
            href: "https://www.instagram.com/walliethegreat/",
            title: "Dogstagram",
            body: "Keep up with the life of my Great Pyreness, whose either sleeping or causing ruckus",
            iconName: "instagram"
        }
    ]


export default SocialMediaInfo;