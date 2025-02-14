import { defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    defineField({
      name: "sitemeta",
      title: "Site MEta",
      type: "siteMeta",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "components",
      title: "Components",
      type: "array",
      of: [{ type: "textComponent" }, { type: "richTextComponent" }, { type: "imageComponent" }, { type: "linkComponent" }],
    }),
  ],
});
