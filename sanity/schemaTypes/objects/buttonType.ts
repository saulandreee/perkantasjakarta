import { defineField, defineType } from "sanity";

export default defineType({
  name: "button",
  title: "Button",
  type: "object",
  fields: [
    {
      name: "label",
      title: "Button Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "variant",
      title: "Button Variant",
      type: "string",
      options: [
        {
          name: "Default",
          value: "default",
          type: "option",
        },
        {
          name: "Outline",
          value: "outline",
          type: "option",
        },
      ],
    },
    {
      name: "isLink",
      title: "Is button a link?",
      type: "boolean",
      validation: (Rule) => Rule.required(),
      initialValue: false,
    },
    {
      name: "link",
      title: "Button Link",
      type: "string",
    },
  ],
});
