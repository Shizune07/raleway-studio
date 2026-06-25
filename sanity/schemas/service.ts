export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', title: 'Service Name', type: 'string', validation: (R: any) => R.required() },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (R: any) => R.required(),
      description: 'e.g. website-design, seo, graphic-design',
    },
    { name: 'icon', title: 'Icon / Emoji', type: 'string', description: 'Paste an emoji (e.g. 🎨)' },
    { name: 'tagline', title: 'Short Tagline', type: 'string', description: 'Shown on the services grid card' },
    { name: 'description', title: 'Full Description', type: 'text', rows: 5 },
    {
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet points shown on the service detail page',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'tagline' },
    prepare({ title, subtitle }: any) {
      return { title, subtitle }
    },
  },
  orderings: [{ title: 'Display Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
}
