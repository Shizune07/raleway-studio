export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (R: any) => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (R: any) => R.required() },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Web Design', value: 'web-design' },
          { title: 'SEO', value: 'seo' },
          { title: 'Graphic Design', value: 'graphic-design' },
          { title: 'Business Tips', value: 'business-tips' },
          { title: 'AI & Automation', value: 'ai-automation' },
        ],
      },
    },
    { name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true } },
    { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] },
  ],
  preview: {
    select: { title: 'title', media: 'mainImage', subtitle: 'publishedAt' },
  },
}
