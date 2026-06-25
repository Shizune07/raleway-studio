export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'siteName',
      title: 'Site / Business Name',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short one-line description of your business',
    },
    {
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: false },
    },
    {
      name: 'logoWhite',
      title: 'Logo (White / Footer Version)',
      type: 'image',
      options: { hotspot: false },
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
      ],
    },
    {
      name: 'heroHeadline',
      title: 'Homepage Hero Headline',
      type: 'string',
    },
    {
      name: 'heroSubtext',
      title: 'Homepage Hero Subtext',
      type: 'text',
      rows: 3,
    },
    {
      name: 'charityText',
      title: 'Charity / Footer Banner Text',
      type: 'string',
      description: 'e.g. 5% of every sale goes to non-government animal shelters',
    },
  ],
  preview: {
    select: { title: 'siteName' },
  },
}
