export type Testimonial = {
  id: string;
  name: string;
  title: string;
  quote: string;
  avatar?: string;
};

/**
 * TODO(Ali): only the quotes you actually received are here — the three
 * placeholder entries from the old site were lorem ipsum, so they're gone.
 * Send me (or drop in) any real ones and add them below.
 */
export const testimonials: Testimonial[] = [
  {
    id: "siam",
    name: "Sheikh Shahariar Siam",
    title: "Full-Stack Developer",
    quote:
      "Working with Ali has always been enjoyable; he is an exceptional coding partner. I have collaborated with him on many projects, and each one feels as effortless as playing a game of Ludo. He is very talented and has a knack for finding bugs efficiently.",
    avatar:
      "https://res.cloudinary.com/itsproali/image/upload/v1702649424/Portfolio/reviews/siam_lbw9s9.jpg",
  },
  {
    id: "refat",
    name: "Refat Shahriear",
    title: "Digital Marketing Expert",
    quote:
      "Mohammad is very much passionate and dedicated in full-stack web development. He finished 40+ web projects at this young age. I wish a successful life for him.",
    avatar:
      "http://res.cloudinary.com/itsproali/image/upload/v1702737209/Portfolio/reviews/xuizjqth57ss9lguyq8q.jpg",
  },
];
