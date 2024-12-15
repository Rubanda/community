import type { FooterItem } from "@/types"
export type SiteConfig = typeof siteConfig

// const links = {
//     x: "https://twitter.com/sadmann17",
//     github: "https://github.com/sadmann7/skateshop",
//     githubAccount: "https://github.com/sadmann7",
//     discord: "https://discord.com/users/sadmann7",
//     calDotCom: "https://cal.com/sadmann7",
//   }
  
export const siteConfig = {
  name: "Developer Community",
  description:
    "Developer Community is a platform For Developers enthusiasts to share their knowledge and experience with others.",
  url: "communitydev-rosy.vercel.app",
  ogImage: "",
  links: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
  },
  footerNav: [
    // {
    //   title: "Credits",
    //   items: [
     
    //     {
    //       title: "Acme Corp",
    //       href: "https://acme-corp.jumr.dev",
    //       external: true,
    //     },
    //     {
    //       title: "shadcn/ui",
    //       href: "https://ui.shadcn.com",
    //       external: true,
    //     },
    //   ],
    // },
    // {
    //   title: "Help",
    //   items: [
    //     {
    //       title: "About",
    //       href: "/about",
    //       external: false,
    //     },
    //     {
    //       title: "Contact",
    //       href: "/contact",
    //       external: false,
    //     },
    //     {
    //       title: "Terms",
    //       href: "/terms",
    //       external: false,
    //     },
    //     {
    //       title: "Privacy",
    //       href: "/privacy",
    //       external: false,
    //     },
    //   ],
    // },
    // {
    //   title: "Social",
    //   items: [
        // {
        //   title: "X",
        //   href: links.x,
        //   external: true,
        // },
        // {
        //   title: "GitHub",
        //   href: links.githubAccount,
        //   external: true,
        // },
        // {
        //   title: "Discord",
        //   href: links.discord,
        //   external: true,
        // },
        // {
        //   title: "cal.com",
        //   href: links.calDotCom,
        //   external: true,
        // },
    //   ],
    // },
    // {
    //   title: "Lofi",
    //   items: [
    //     {
    //       title: "beats to study to",
    //       href: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
    //       external: true,
    //     },
    //     {
    //       title: "beats to chill to",
    //       href: "https://www.youtube.com/watch?v=rUxyKA_-grg",
    //       external: true,
    //     },
    //     {
    //       title: "a fresh start",
    //       href: "https://www.youtube.com/watch?v=rwionZbOryo",
    //       external: true,
    //     },
    //     {
    //       title: "coffee to go",
    //       href: "https://www.youtube.com/watch?v=2gliGzb2_1I",
    //       external: true,
    //     },
    //   ],
    // },
  ] satisfies FooterItem[],
}
