module.exports = {
  siteTitle: "Micah Yaple Design", // Site title.
  siteTitleShort: "MYD", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Micah Yaple Design", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://micahyaple.com", // Domain of your website without pathPrefix.
  pathPrefix: "/micah-yaple-design", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Micah Yaple Design - Design & marketing for freelancers.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1", // FB Application ID for using app insights
  siteGATrackingID: "UA-133374980-1", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Marketing", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Micah Kid", // Username to display in the author segment.
  userEmail: "im@micahyaple.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "North Pole, Earth", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Testing out my bio.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/micahkid",
      iconClassName: "fa fa-github"
    },
    {
      label: "Instagram",
      url: "https://instagram.com/micahyapledesign",
      iconClassName: "fa fa-instagram"
    },
    {
      label: "Email",
      url: "mailto:im@micahyaple.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. Micah Yaple Design" // Copyright string for the footer of the website and RSS feed.
};


