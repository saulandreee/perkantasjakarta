import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Events",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
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
    defineField({
      name: "cover",
      type: "image",
    }),
    defineField({
      name: "short_description",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "isRecurringEvent",
      title: "Is event recurring?",
      type: "boolean",
    }),
    defineField({
      name: "eventDate",
      title: "Event Date",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 15,
      },
      hidden: ({ document }) => !!document?.isRecurringEvent,
    }),
    defineField({
      name: "recurringTime",
      title: "Recurring Time",
      description: "e.g. Every Saturday 10:00 AM - 12:00 PM",
      type: "string",
      hidden: ({ document }) => !document?.isRecurringEvent,
    }),
  ],
});
