// bannerImage.js

const bannerImage = {
  name: "bannerImage",
  title: "Banner Image",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // Enable hotspot for image cropping
      },
      validation: (Rule) => Rule.required(), // Image is required
    },
    {
      name: "altText",
      title: "Alt Text",
      type: "string",
      description: "Alternative text for screen readers",
      validation: (Rule) => Rule.required(), // Alt text is required
    },
  ],
};

export default bannerImage;
