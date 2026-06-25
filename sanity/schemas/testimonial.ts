export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'clientName', title: 'Client Name', type: 'string', validation: (R: any) => R.required() },
    { name: 'businessName', title: 'Business / Company', type: 'string' },
    { name: 'location', title: 'Location', type: 'string', description: 'e.g. Sydney, Australia' },
    {
      name: 'rating',
      title: 'Rating (1–5)',
      type: 'number',
      options: { list: [1, 2, 3, 4, 5] },
    },
    { name: 'quote', title: 'Testimonial Quote', type: 'text', rows: 5, validation: (R: any) => R.required() },
    { name: 'photo', title: 'Client Photo', type: 'image', options: { hotspot: true } },
    { name: 'initials', title: 'Initials (if no photo)', type: 'string', description: 'e.g. KA' },
    {
      name: 'service',
      title: 'Service Used',
      type: 'string',
      options: {
        list: [
          'Website Design',
          'Graphic Design',
          'SEO',
          'Social Media Management',
          'Virtual Assistance',
          'AI Automation',
          'Project Management',
        ],
      },
    },
    { name: 'featured', title: 'Featured on Homepage', type: 'boolean', initialValue: false },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
  preview: {
    select: { title: 'clientName', subtitle: 'businessName', media: 'photo' },
  },
}
