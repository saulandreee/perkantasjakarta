import { defineField } from "sanity";

export default {
  type: "object",
  name: "siteMeta",
  title: "Site Configuration",
  fieldsets: [{ name: "google", title: "Google Analytics" }],
  groups: [
    {
      name: "meta",
      title: "Site Info",
      default: true,
    },
    {
      name: "og",
      title: "Social Share Info",
    },
    {
      name: "manifest",
      title: "Web App Settings",
      hidden: ({
        document,
      }: {
        document: {
          [key: string]: never;
        };
      }): boolean => !document.isPwa,
    },
    {
      name: "google",
      title: "Google Config",
      hidden: ({
        document,
      }: {
        document: {
          [key: string]: never;
        };
      }): boolean => !document.isGoogleAnalyticsEnabled,
    },
  ],
  fields: [
    defineField({
      type: "string",
      name: "site_name",
      title: "Site Name",
      group: ["og", "meta"],
      // fieldset: "optional"
    }),
    defineField({
      type: "text",
      name: "ogDescription",
      title: "Social Share Description",
      group: ["og", "meta"],
    }),
    defineField({
      type: "url",
      title: "URL",
      name: "url",
      description: "Most likely either the url of the page or its canonical url",
      validation: (Rule: { required: () => any }) => Rule.required(),
      group: ["og", "meta"],
      // fieldset: "basic"
    }),
    defineField({
      type: "string",
      title: "Page Title",
      name: "ogTitle",
      description: "Set the title Open Graph should use. In most situations, this should be different from the value of the title prop",
      validation: (Rule) => Rule.required(),
      // fieldset: "basic"
    }),
    // {
    //   type: "image",
    //   title: "Image",
    //   name: "ogImage",
    //   description:
    //     "URL of the image that should be used in social media previews. If you define this, you must define two other OG basic properties as well: title and type.",
    //   validation: (Rule) => Rule.required(),
    //   group: ["og"],
    //   // fieldset: "basic"
    // },
    // {
    //   type: "text",
    //   name: "description",
    //   title: "Describe This Site",
    //   group: ["meta", "og"],
    // },
    // {
    //   type: "boolean",
    //   name: "isPwa",
    //   title: "should this site be installable like an app?",
    //   group: ["meta", "manifest"],
    //   initialValue: false,
    //   options: {
    //     layout: "checkbox",
    //   },
    // },
    // {
    //   type: "boolean",
    //   name: "isGoogleAnalyticsEnabled",
    //   title: "Enable Google Analytics?",
    //   group: ["meta", "google"],
    //   initialValue: false,
    //   options: {
    //     layout: "checkbox",
    //   },
    // },
    // {
    //   type: "string",
    //   name: "googleanalyticsId",
    //   title: "Google Analytics ID",
    //   fieldset: "google",
    //   group: ["meta", "google"],
    // },
    // {
    //   type: "string",
    //   name: "googleSiteVerificationId",
    //   title: "Google site Verification ID",
    //   fieldset: "google",
    //   group: ["meta", "google"],
    // },
    // {
    //   type: "manifest",
    //   title: "Web App Features",
    //   name: "manifest",
    //   group: "manifest",
    // },
  ],
};
