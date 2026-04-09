// ============================================================
// Placeholder data for the agent website template.
// Replace with your CMS / API / database of choice.
// ============================================================

export interface Property {
  id: string;
  title: string;
  slug: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  beds: number;
  baths: number;
  sqft: number;
  type: "House" | "Apartment" | "Condo" | "Townhouse";
  status: "For Sale" | "For Rent" | "Sold";
  image: string;
  images: string[];
  description: string;
  features: string[];
  yearBuilt: number;
  lot: string;
  garage: number;
  agent: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

// -- Properties ---------------------------------------------------------------

export const properties: Property[] = [
  {
    id: "1",
    title: "Modern Lakefront Villa",
    slug: "modern-lakefront-villa",
    price: 1250000,
    address: "123 Lakeview Drive",
    city: "Austin",
    state: "TX",
    zip: "73301",
    beds: 4,
    baths: 3,
    sqft: 3200,
    type: "House",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
    description:
      "Stunning modern villa with panoramic lake views. This beautifully designed home features floor-to-ceiling windows, an open-concept living area, gourmet kitchen with premium appliances, and a resort-style backyard with infinity pool. The primary suite offers a spa-like bathroom and private balcony overlooking the water.",
    features: [
      "Infinity pool",
      "Smart home system",
      "Wine cellar",
      "Home theater",
      "3-car garage",
      "Outdoor kitchen",
    ],
    yearBuilt: 2022,
    lot: "0.45 acres",
    garage: 3,
    agent: "Sarah Mitchell",
  },
  {
    id: "2",
    title: "Downtown Luxury Penthouse",
    slug: "downtown-luxury-penthouse",
    price: 890000,
    address: "456 Main Street, PH1",
    city: "Austin",
    state: "TX",
    zip: "73301",
    beds: 3,
    baths: 2,
    sqft: 2100,
    type: "Condo",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    ],
    description:
      "Sophisticated penthouse in the heart of downtown with breathtaking city skyline views. Features include hardwood floors throughout, a chef's kitchen, private rooftop terrace, and floor-to-ceiling windows flooding every room with natural light.",
    features: [
      "Rooftop terrace",
      "Concierge service",
      "Gym & spa access",
      "Valet parking",
      "Floor-to-ceiling windows",
    ],
    yearBuilt: 2021,
    lot: "N/A",
    garage: 2,
    agent: "Sarah Mitchell",
  },
  {
    id: "3",
    title: "Charming Craftsman Bungalow",
    slug: "charming-craftsman-bungalow",
    price: 475000,
    address: "789 Oak Avenue",
    city: "Austin",
    state: "TX",
    zip: "73301",
    beds: 3,
    baths: 2,
    sqft: 1800,
    type: "House",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&q=80",
    ],
    description:
      "Beautifully restored Craftsman bungalow blending original character with modern updates. Original hardwood floors, built-in bookshelves, and a wraparound porch create timeless charm, while the renovated kitchen and bathrooms offer every modern convenience.",
    features: [
      "Wraparound porch",
      "Original hardwood floors",
      "Updated kitchen",
      "Fenced backyard",
      "Detached garage",
    ],
    yearBuilt: 1935,
    lot: "0.25 acres",
    garage: 1,
    agent: "Sarah Mitchell",
  },
  {
    id: "4",
    title: "Sleek Urban Townhouse",
    slug: "sleek-urban-townhouse",
    price: 625000,
    address: "321 Elm Street",
    city: "Austin",
    state: "TX",
    zip: "73301",
    beds: 3,
    baths: 2.5,
    sqft: 2400,
    type: "Townhouse",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
    description:
      "Contemporary three-story townhouse in a walkable urban neighborhood. Open-plan main level with designer kitchen, private rooftop deck with city views, and an attached two-car garage. Energy-efficient construction with premium finishes throughout.",
    features: [
      "Rooftop deck",
      "Energy efficient",
      "Designer kitchen",
      "Attached garage",
      "Walk-in closets",
    ],
    yearBuilt: 2023,
    lot: "0.08 acres",
    garage: 2,
    agent: "Sarah Mitchell",
  },
  {
    id: "5",
    title: "Cozy Studio Apartment",
    slug: "cozy-studio-apartment",
    price: 1800,
    address: "555 River Road, Unit 4B",
    city: "Austin",
    state: "TX",
    zip: "73301",
    beds: 1,
    baths: 1,
    sqft: 650,
    type: "Apartment",
    status: "For Rent",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    ],
    description:
      "Bright and modern studio apartment with river views. Features include in-unit laundry, stainless steel appliances, quartz countertops, and access to building amenities including a pool, fitness center, and co-working space.",
    features: [
      "In-unit laundry",
      "Pool access",
      "Fitness center",
      "Co-working space",
      "Pet friendly",
    ],
    yearBuilt: 2020,
    lot: "N/A",
    garage: 1,
    agent: "Sarah Mitchell",
  },
  {
    id: "6",
    title: "Hilltop Estate",
    slug: "hilltop-estate",
    price: 2100000,
    address: "10 Summit Ridge",
    city: "Austin",
    state: "TX",
    zip: "73301",
    beds: 5,
    baths: 4,
    sqft: 4500,
    type: "House",
    status: "Sold",
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&q=80",
    ],
    description:
      "Magnificent hilltop estate offering unparalleled views and ultimate privacy. This luxury residence features a grand foyer, formal living and dining rooms, a gourmet kitchen, home office, and a resort-style outdoor living area with a heated pool and outdoor fireplace.",
    features: [
      "Heated pool",
      "Outdoor fireplace",
      "Home office",
      "Guest suite",
      "Gated entry",
      "4-car garage",
    ],
    yearBuilt: 2019,
    lot: "1.2 acres",
    garage: 4,
    agent: "Sarah Mitchell",
  },
];

// -- Blog Posts ---------------------------------------------------------------

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Tips for First-Time Home Buyers in 2026",
    slug: "tips-first-time-home-buyers-2026",
    excerpt:
      "Navigating the real estate market as a first-time buyer can be overwhelming. Here are our top tips to help you find your dream home with confidence.",
    content: `
Buying your first home is one of the most exciting — and sometimes daunting — milestones in life. The 2026 market brings unique opportunities for first-time buyers, and being prepared can make all the difference.

## 1. Get Pre-Approved Early

Before you start browsing listings, get pre-approved for a mortgage. This gives you a clear budget and shows sellers you're a serious buyer. In today's competitive market, a pre-approval letter can be the difference between winning and losing a bidding war.

## 2. Understand Your True Budget

Your mortgage pre-approval amount isn't necessarily what you should spend. Factor in property taxes, insurance, maintenance costs, and your lifestyle expenses. A good rule of thumb is keeping housing costs below 30% of your gross income.

## 3. Research Neighborhoods Thoroughly

Visit potential neighborhoods at different times of day and on different days of the week. Talk to residents, check local school ratings, and research future development plans that could affect property values.

## 4. Don't Skip the Inspection

A home inspection is your safety net. Even in a hot market, never waive the inspection contingency. The cost of an inspection is minimal compared to discovering major issues after closing.

## 5. Work with an Experienced Agent

A knowledgeable real estate agent who understands the local market is invaluable. They can spot red flags, negotiate effectively, and guide you through the complex closing process.

## 6. Consider Future Resale Value

Even if you plan to stay long-term, think about factors that affect resale value: location, school districts, lot size, and neighborhood trends. Your first home is also an investment.

## 7. Be Ready to Act Quickly

In competitive markets, desirable homes sell fast. Have your financing in order, know your must-haves versus nice-to-haves, and be prepared to make a strong offer when you find the right property.

## 8. Explore First-Time Buyer Programs

Many states and municipalities offer programs with down payment assistance, reduced interest rates, or tax credits for first-time buyers. Research what's available in your area.

## 9. Plan for Closing Costs

Closing costs typically range from 2-5% of the purchase price. Budget for these expenses in addition to your down payment so there are no surprises at the closing table.

## 10. Trust the Process

Buying a home takes time, and it's normal to feel overwhelmed. Stay patient, lean on your agent and lender for guidance, and remember that the right home is worth the wait.
    `.trim(),
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    author: "Sarah Mitchell",
    date: "2026-03-15",
    category: "Buying",
    readTime: "8 min read",
  },
  {
    id: "2",
    title: "How to Stage Your Home for a Quick Sale",
    slug: "stage-home-quick-sale",
    excerpt:
      "Professional staging can help sell your home faster and for more money. Learn the essential techniques that make buyers fall in love at first sight.",
    content: `
First impressions matter, especially in real estate. Professional staging isn't just about making your home look pretty — it's a strategic marketing tool that helps buyers envision themselves living in the space.

## Declutter and Depersonalize

The first step in staging is removing personal items and excess clutter. Pack away family photos, collections, and personal memorabilia. Buyers need to imagine their own lives in the space, which is difficult when surrounded by someone else's personality.

## Focus on Curb Appeal

The exterior of your home is the first thing buyers see. Ensure the lawn is manicured, the front door is freshly painted, and the entryway is welcoming. Add potted plants or seasonal flowers for a pop of color.

## Let There Be Light

Open all curtains and blinds to maximize natural light. Replace dim bulbs with bright, warm-toned alternatives. Well-lit spaces feel larger, cleaner, and more inviting.

## Neutralize Your Color Palette

While you may love your bold accent walls, neutral tones appeal to the widest range of buyers. Consider repainting in soft whites, warm grays, or gentle beiges.

## Create Lifestyle Vignettes

Set the dining table for a dinner party, place fresh towels in the bathroom, or create a cozy reading nook. These small touches help buyers connect emotionally with the space.

## The ROI of Staging

According to industry data, staged homes sell 73% faster on average and often for 5-15% above the asking price. The investment in staging typically returns several times its cost at closing.
    `.trim(),
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    author: "Sarah Mitchell",
    date: "2026-02-28",
    category: "Selling",
    readTime: "6 min read",
  },
  {
    id: "3",
    title: "Understanding the Austin Real Estate Market",
    slug: "understanding-austin-real-estate-market",
    excerpt:
      "Austin continues to be one of the hottest real estate markets in the country. Here's what you need to know about current trends and future projections.",
    content: `
Austin's real estate market has been on a remarkable trajectory, driven by tech industry growth, quality of life, and a vibrant cultural scene. Understanding current market dynamics is essential whether you're buying, selling, or investing.

## Current Market Overview

The Austin metro area continues to see strong demand, though the market has shifted from the frenzy of previous years to a more balanced environment. Median home prices have stabilized, giving buyers more negotiating power while still rewarding sellers with strong returns.

## Key Trends to Watch

### Tech Industry Influence
Major tech companies continue to expand their Austin presence, bringing high-paying jobs and driving housing demand in specific corridors. Areas near tech campuses and innovation districts command premium prices.

### Suburban Growth
As remote work remains prevalent, suburban communities like Cedar Park, Round Rock, and Pflugerville are seeing increased interest from buyers seeking more space and value.

### New Construction
Builders are responding to demand with new developments across the metro area. New construction offers modern amenities and energy efficiency, though buyers should research builder reputations carefully.

## Investment Outlook

Austin's fundamentals remain strong for real estate investment. Population growth, job creation, and limited land supply in desirable areas support long-term appreciation. However, investors should focus on quality locations and avoid overpaying based on past growth rates.

## Working with a Local Expert

The Austin market has distinct micro-markets with varying dynamics. Working with an agent who understands these nuances is crucial for making informed decisions, whether you're a first-time buyer or seasoned investor.
    `.trim(),
    image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=800&q=80",
    author: "Sarah Mitchell",
    date: "2026-02-10",
    category: "Market Insights",
    readTime: "7 min read",
  },
  {
    id: "4",
    title: "Renovation Projects That Add the Most Value",
    slug: "renovation-projects-most-value",
    excerpt:
      "Not all renovations are created equal. Discover which home improvement projects deliver the best return on investment when it's time to sell.",
    content: `
When it comes to home renovations, strategic improvements can significantly boost your property's value. But not every project delivers the same return. Here's where to invest your renovation dollars for maximum impact.

## Kitchen Remodel (Minor)

A minor kitchen remodel — updating countertops, refacing cabinets, upgrading appliances, and adding a fresh backsplash — consistently ranks as one of the highest ROI renovations, often returning 75-80% of the investment.

## Bathroom Updates

Modernizing bathrooms with new fixtures, tile, vanities, and lighting can return 60-70% of costs. Focus on creating a clean, contemporary look without over-customizing.

## Exterior Improvements

New siding, a fresh coat of exterior paint, or updated landscaping dramatically improves curb appeal. These projects often return 70-80% of costs and create the crucial positive first impression.

## Energy Efficiency Upgrades

New windows, improved insulation, and energy-efficient HVAC systems are increasingly valued by buyers. These upgrades reduce utility costs and may qualify for tax credits, making them doubly beneficial.

## What to Avoid

Swimming pools, luxury additions in modest neighborhoods, and highly personalized renovations (like converting a garage to a home gym) typically offer poor returns. Always consider your neighborhood's price ceiling before investing in major renovations.
    `.trim(),
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    author: "Sarah Mitchell",
    date: "2026-01-20",
    category: "Home Improvement",
    readTime: "5 min read",
  },
];

// -- Helpers ------------------------------------------------------------------

export function getPropertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatPrice(price: number, status: string) {
  if (status === "For Rent") {
    return `$${price.toLocaleString()}/mo`;
  }
  return `$${price.toLocaleString()}`;
}
