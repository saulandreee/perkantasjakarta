import {defineField, defineType} from 'sanity'
export const eventType = defineType({
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
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
      name: 'cover',
      type: 'image',
    }),
    defineField({
      name: 'short_description',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'string',
    })
  ],
})
