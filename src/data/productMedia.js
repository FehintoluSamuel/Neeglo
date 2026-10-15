import mockup1 from "../images/products_images/trendysize/mockups/trendysize_mockup_1.jpg";
import mockup2 from "../images/products_images/trendysize/mockups/trendysize_mockup_2.jpg";
import mockup3 from "../images/products_images/trendysize/mockups/trendysize_mockup_3.jpg";

// Product screenshots live here (not in content.js) because bundler
// asset imports can't sit in the plain-data module. Keyed by product id.
export const productGalleries = {
  trendysize: [
    { src: mockup1, alt: "TrendySize vendor dashboard with measurement records" },
    { src: mockup2, alt: "TrendySize customer measurement form" },
    { src: mockup3, alt: "TrendySize body-measurement estimate from a photo" },
  ],
};
