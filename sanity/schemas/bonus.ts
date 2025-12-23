export default {
  name: 'bonus',
  title: 'Bonuses',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Bonus Title',
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
      description: 'e.g., FaFileAlt, FaCode, etc.',
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
