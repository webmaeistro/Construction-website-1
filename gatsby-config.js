module.exports = {
  siteMetadata: {
    title: `Danielsen Bygg`,
    fullTitle: `Danielsen Bygg Horten`,
    description: `Forstår deg bedere | Planlegger bedere | Konstruerer det best.`,
    about: `Danielsen Bygg ble startet opp i Oktober 2018, av snekkeren Morten Danielsen, fra Horten. Morten har god erfaring med alt som har med snekkerarbeid å gjøre. Selskapet tar på seg jobber som totalrenovering, tilbygg, tak, malejobber, og alt annet snekkerarbeid. 
    Ta kontakt på epost eller på mobil å få gratis befaring! `,
    email: `danielsen.bygg@gmail.com`,
    social: {
      facebook: `https://facebook.com/tDanielsenByggHorten`,
      twitter: `https://twitter.com/tDanielsenByggHorten`,
      instagram: `https://instagram.com/tDanielsenByggHorten`,
      linkedin: `https://linkedin.com/in/tDanielsenByggHorten`,
    },
    contact: {
      mobile: `+47 984 80 400`,
      telephone: `+47 984 80 400`,
    },
    address: `sentroveien 26, 3182 Horten`,
    map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2030.3411658252485!2d10.475396116075583!3d59.41070378168737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4646b4b73f55a787%3A0x5e7a00a641159e2c!2sSentroveien%2026%2C%203182%20Horten!5e0!3m2!1sno!2sno!4v1574888394763!5m2!1sno!2sno`,
    opening: {
      day: `Monday - Friday`,
      hour: `8:00am - 5:00pm`,
    },
    careers: {
      title: `Danielsen Bygg `,
      about: `Tar ingen ansetta på dette tidspunkettet!`,
      benefits: [
        `her lister vi hvorfor jobbe for deg`,
        `du er lokal gutt og fleksibel`,
        `Billig og høy kvalitet levert til tide`,
      ],
    },

    author: {
      name: `Martin Andersen`,
      position: `Web Developer`,
      email: `marander@pm.me`,
      contact: `+47 99347544 `,
      website: `github.com/webmaeistro`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `danielsen-bygg-horten`,
        short_name: `danielsenbygg`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/brand-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
     `gatsby-plugin-offline`,
  ],
}
