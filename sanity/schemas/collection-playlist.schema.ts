

const schema = {
  name: 'collectionPlaylist',
  title: 'Collection Playlist',
  type: 'document',
  field: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'collections',
      title: 'Collections',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type:'collection' }] }
      ]
    },
    // {
    //   name: '',
    //   title: '',
    //   type: '',
    //   validation: (Rule: any) => Rule.required(),
    // },
  ]

}

export default schema;