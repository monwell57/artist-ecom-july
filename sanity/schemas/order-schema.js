const order = {
  name: "order",
  title: "Orders",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "qty",
      title: "Qty",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "color",
      title: "Color",
      type: "string",
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DDTHH:mm:ssZ",
      },
      readOnly: true,
    },
    {
      name: "paid",
      title: "Paid",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "delivered",
      title: "Delivered",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "shippingAddress",
      type: "object",
      title: "Shipping Address",
      fields: [
        { name: "street", type: "string", title: "Street" },
        { name: "city", type: "string", title: "City" },
        { name: "state", type: "string", title: "State" },
        { name: "postalCode", type: "string", title: "Postal Code" },
        { name: "country", type: "string", title: "Country" },
        { name: "phone", type: "string", title: "Phone" },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  initialValue: {
    createdAt: new Date().toISOString(),
  },
};

export default order;
