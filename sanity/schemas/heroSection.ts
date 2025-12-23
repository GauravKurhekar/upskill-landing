export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'headlineBeforeHighlight',
      title: 'Headline (Before Highlight)',
      type: 'string',
      description: 'e.g., "Build a High-Income Career in"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'headlineHighlight',
      title: 'Headline Highlight (will stay on one line)',
      type: 'string',
      description: 'e.g., "Azure Data Engineering"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subheadline',
      title: 'Sub Headline',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'ctaButtonLink',
      title: 'CTA Button Link',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'headlineBeforeHighlight',
      subtitle: 'headlineHighlight',
    },
  },
}
