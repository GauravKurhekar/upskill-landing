export default {
  name: 'instructorSection',
  title: 'Instructor Section',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Instructor Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Profile Image URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
    },
    {
      name: 'credentials',
      title: 'Credentials',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    },
    {
      name: 'experience',
      title: 'Years of Experience',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
    },
  },
}
