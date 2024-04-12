const info = {
  name: "info",
  title: "Informações",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtítulo",
      type: "string",
    },
    {
      name: "imageHero",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Text alternative",
          type: "string",
        },
      ],
    },
    {
      name: "bio",
      title: "Biografia",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
        },
      ],
    },
    {
      name: "technologies",
      title: "Tecnologias",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Nome",
              type: "string",
            },
            {
              name: "link",
              title: "Link",
              type: "url",
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
                  title: "Text alternative",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default info;
