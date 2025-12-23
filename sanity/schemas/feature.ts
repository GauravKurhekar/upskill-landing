export default {
  name: 'feature',
  title: 'Features',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Feature Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon Name (React Icon)',
      type: 'string',
      description: 'e.g., FaUserTie, FaChartLine, etc.',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}
