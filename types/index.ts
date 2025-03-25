export type SiteConfig = {
    name: string
    description: string
    url: string
    ogImage: string
    links: {
      twitter: string
      github: string
    }
  }
  
  export interface FooterItem {
    title: string
    items: {
      title: string
      href: string
      external?: boolean
    }[]
  }

  export interface EventData  {
        img: string,
        description: string,
        date: string, //for testing purpose since i ma working with a dummy data,
        venue: string,
        cta?: string,
  }