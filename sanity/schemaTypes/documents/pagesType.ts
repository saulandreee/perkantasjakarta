import { defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    defineField({
      name: "sitemeta",
      title: "Site Meta",
      type: "siteMeta",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "components",
      title: "Components",
      type: "array",
      of: [
        { type: "heroComponent" },
        { type: "textHeaderComponent" },
        { type: "textComponent" },
        { type: "richTextComponent" },
        { type: "imageComponent" },
        { type: "linkComponent" },
      ],
    }),
  ],
});
