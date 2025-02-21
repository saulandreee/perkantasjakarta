import { defineField, defineType } from "sanity";

export default defineType({
  name: "heroComponent",
  title: "Hero",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "isHeadingOne",
      title: "Is it a <h1>?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "richText",
      type: "richTextComponent",
    }),
    defineField({
      name: "button",
      title: "Buttons",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "imageComponent" }],
    }),
  ],
});
