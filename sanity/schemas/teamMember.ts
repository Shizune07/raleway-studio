export default {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    { name: 'name', title: 'Full Name', type: 'string', validation: (R: any) => R.required() },
    { name: 'role', title: 'Role / Title', type: 'string', validation: (R: any) => R.required() },
    { name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } },
    { name: 'bio', title: 'Bio', type: 'text', rows: 4 },
    {
      name: 'badges',
      title: 'Badges / Certifications',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (1 = Seira, 2 = Gabriel, 3 = Jet)',
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
  orderings: [{ title: 'Display Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
}
