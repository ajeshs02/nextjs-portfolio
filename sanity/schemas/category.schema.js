const schema = {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Project Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gitLink',
      title: 'Source code',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: ['Frontend', 'NextJs', 'Fullstack'],
      },
    },
    {
      name: 'best',
      title: 'Best',
      type: 'boolean',
      initialValue: false,
    },
  ],
}

export default schema
