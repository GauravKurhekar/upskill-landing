export default {
  name: 'video',
  title: 'Videos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Video Title',
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
      name: 'videoUrl',
      title: 'Video URL (AWS S3 or YouTube)',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'duration',
      title: 'Duration (e.g., 10:30)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
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
      subtitle: 'duration',
      media: 'thumbnail',
    },
  },
}
