import {Block} from "payload/types";

export const PictureTimeline: Block = {
    slug: "timeline",
    labels: {
        plural: "Pictorial Timelines",
        singular: "Pictorial Timeline",
    },
    fields: [
        {
          name: "items",
          type: "array",
          fields: [
              {
                  type: "text",
                  name: "date"
              },
              {
                  type: "text",
                  name: "title",
              },
              {
                  type: "richText",
                  name: "body"
              },
              {
                  type: "upload",
                  name: "image",
                  relationTo: "media"
              }
          ]
        },
    ]
}

export default PictureTimeline;
