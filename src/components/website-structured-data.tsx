import { BUSINESS_EMAIL, BUSINESS_NAME, businessNap } from "@/lib/business-nap";

import { getContactPhoneE164Plus } from "@/lib/contact";

import { SITE_DEFAULT_DESCRIPTION } from "@/lib/site-default-description";

import { buildLocalBusinessSchema } from "@/lib/schema-local-business";

import { getSiteUrl } from "@/lib/site-url";

import { SITE_SITELINKS } from "@/lib/sitelinks";



const siteDescription = SITE_DEFAULT_DESCRIPTION;



/**

 * WebSite + Organization + LocalBusiness + navegación (sitelinks).

 */

export function WebsiteStructuredData() {

  const base = getSiteUrl().replace(/\/$/, "");



  const navigationElements = SITE_SITELINKS.map((item, i) => ({

    "@type": "SiteNavigationElement",

    "@id": `${base}/#nav-${i + 1}`,

    name: item.name,

    url: `${base}${item.path}`,

  }));



  const localBusiness = buildLocalBusinessSchema();

  const graph = {

    "@context": "https://schema.org",

    "@graph": [

      {

        "@type": "Organization",

        "@id": `${base}/#organization`,

        name: BUSINESS_NAME,

        url: base,

        logo: `${base}/icons/icon-512.png`,

        description: siteDescription,

        contactPoint: {

          "@type": "ContactPoint",

          contactType: "customer service",

          telephone: getContactPhoneE164Plus(),

          email: BUSINESS_EMAIL,

          areaServed: "ES",

          availableLanguage: "Spanish",

          hoursAvailable: {

            "@type": "OpeningHoursSpecification",

            dayOfWeek: businessNap.openingHours.dayOfWeek,

            opens: businessNap.openingHours.opens,

            closes: businessNap.openingHours.closes,

          },

        },

      },

      {

        ...localBusiness,

        "@id": `${base}/#localbusiness`,

        parentOrganization: { "@id": `${base}/#organization` },

      },

      {

        "@type": "WebSite",

        "@id": `${base}/#website`,

        url: base,

        name: BUSINESS_NAME,

        alternateName: "Livendia Gestoría Inmobiliaria",

        description: siteDescription,

        inLanguage: "es-ES",

        publisher: { "@id": `${base}/#organization` },

        hasPart: navigationElements.map((n) => ({ "@id": n["@id"] })),

      },

      ...navigationElements,

      {

        "@type": "ItemList",

        "@id": `${base}/#principal`,

        name: "Secciones principales de Livendia",

        numberOfItems: SITE_SITELINKS.length,

        itemListElement: SITE_SITELINKS.map((item, i) => ({

          "@type": "ListItem",

          position: i + 1,

          name: item.name,

          url: `${base}${item.path}`,

        })),

      },

    ],

  };



  return (

    <script

      type="application/ld+json"

      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}

    />

  );

}


