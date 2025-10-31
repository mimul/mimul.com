import React from "react";
import Helmet from "react-helmet";

export default React.memo(
  ({
    author,
    siteUrl,
    datePublished,
    dateModified,
    description,
    image,
    isBlogPost,
    organization,
    title,
    url
  }) => {
    const baseSchema = [
      {
        "@context": "http://schema.org",
        "@type": "Organization",
        "@id": "https://wwww.mimul.com#organization",
        name: "Mimul",
        url: "https://wwww.mimul.com",
        sameAs: ["https://twitter.com/mimul"],
        legalName: "Mimul",
        logo: {
          "@type": "ImageObject",
          url: "https://wwww.mimul.com/img/android-chrome-144x144.png",
          width: 144,
          height: 144
        },
        founder: {
          "@type": "Person",
          name: "Mimul",
          image: {
            "@type": "ImageObject",
            url: "https://www.mimul.com/img/hahojin.jpg",
            width: 300,
            height: 300
          }
        }
      },
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "@id": "https://wwww.mimul.com#website",
        url: "https://wwww.mimul.com",
        name: "Mimul",
        alternateName: "Full Stack Developer | Mimul",
        author: {
          "@id": "https://wwww.mimul.com#organization"
        }
      },
      {
        "@context": "http://schema.org",
        "@type": "WebPage",
        "@id": url,
        url,
        headline: title,
        description,
        publisher: {
          "@id": "https://wwww.mimul.com#organization"
        },
        sourceOrganization: {
          "@id": "https://wwww.mimul.com#organization"
        }
      }
    ];

    const schema = isBlogPost
      ? [
          ...baseSchema,
          {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@id": url,
                  name: title,
                  image
                }
              }
            ]
          },
          {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            url,
            name: title,
            headline: title,
            image: {
              "@type": "ImageObject",
              url: image
            },
            description,
            author: {
              "@id": "https://wwww.mimul.com#organization"
            },
            publisher: {
              "@id": "https://wwww.mimul.com#organization"
            },
            mainEntityOfPage: {
              "@type": "WebSite",
              "@id": siteUrl
            },
            datePublished,
            dateModified: dateModified ? dateModified : datePublished
          }
        ]
      : baseSchema;

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    );
  }
);
