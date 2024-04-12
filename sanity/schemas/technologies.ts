export default {
  name: "technology",
  title: "Tecnologia",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nome",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "image",
      title: "Imagem",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Texto alternativo",
          type: "string",
          description: "Texto alternativo para a imagem",
        },
      ],
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      description: "URL para mais informações sobre esta tecnologia",
    },
  ],
};
