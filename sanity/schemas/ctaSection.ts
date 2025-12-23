export default {
  name: 'ctaSection',
  title: 'CTA Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'text',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'sessionDuration',
      title: 'Session Duration',
      type: 'string',
    },
    {
      name: 'platform',
      title: 'Meeting Platform',
      type: 'string',
    },
    {
      name: 'availability',
      title: 'Availability Time',
      type: 'string',
    },
    {
      name: 'whatsIncluded',
      title: "What's Included",
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'trustNote',
      title: 'Trust Note',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
