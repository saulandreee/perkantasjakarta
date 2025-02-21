import { defineField, defineType } from "sanity";
export default defineType({
  name: "ministry",
  title: "Ministries",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "abbreviation",
      title: "Abbreviation",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        //Change to schema title to automatically populate
        source: "title",
        slugify: (input) =>
          input
            .toLowerCase()
            //Remove spaces
            .replace(/\s+/g, "-")
            //Remove special characters
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
      },
      validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   name: "cover",
    //   type: "image",
    // }),
    defineField({
      name: "cover",
      title: "Ministry Cover",
      type: "imageComponent",
    }),
    defineField({
      name: "icon",
      title: "Ministry Icon",
      type: "imageComponent",
    }),
    defineField({
      name: "short_description",
      title: "Short Description",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
  ],
});
