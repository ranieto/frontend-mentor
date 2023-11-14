import type { PageLoad } from "./$types";
import imageAnne from "./image-anne.jpg";
import imageColton from "./image-colton.jpg";
import imageIrene from "./image-irene.jpg";

export const load = (() => {
  const raters = ["Reviews", "Report Guru", "Best Tech"];
  const testimonials = [
    {
      name: "Colton Smith",
      testimonial:
        "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
      picture: imageColton,
    },
    {
      name: "Irene Roberts",
      testimonial:
        "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
      picture: imageIrene,
    },
    {
      name: "Anne Wallace",
      testimonial:
        "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
      picture: imageAnne,
    },
  ];

  return {
    raters,
    testimonials,
  };
}) satisfies PageLoad;
