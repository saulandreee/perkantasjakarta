import { defineField, defineType } from "sanity";

export default defineType({
  name: "textHeaderComponent",
  title: "Text Header",
  type: "object",
  fields: [
    defineField({
      name: "headerTitle",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "headerSubitle",
      title: "Subitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "headerButtons",
      title: "Buttons",
      type: "array",
      of: [{ type: "button" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
