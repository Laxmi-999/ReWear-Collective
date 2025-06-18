import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter } from "lucide-react";

const FeaturedProducts = () => {
  // Mock data for featured products
  const featuredProducts = [
    {
      id: "1",
      name: "Vintage Leather Jacket - Brown Bomber Style",
      price: 85,
      originalPrice: 120,
      condition: "Like New",
      imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
      seller: "VintageVibes",
      isLiked: false,
    },
    {
      id: "2",
      name: "Floral Summer Dress - Midi Length",
      price: 45,
      originalPrice: 65,
      condition: "Very Good",
      imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
      seller: "EcoFashion",
      isLiked: true,
    },
    {
      id: "3",
      name: "Designer Denim Jeans - High Waisted",
      price: 55,
      originalPrice: 89,
      condition: "Good",
      imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d",
      seller: "DenimDream",
      isLiked: false,
    },
    {
      id: "4",
      name: "Cashmere Sweater - Cream Cable Knit",
      price: 65,
      originalPrice: 95,
      condition: "Like New",
      imageUrl: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
      seller: "LuxuryFinds",
      isLiked: false,
    },
    {
      id: "5",
      name: "Retro Sneakers - Classic White",
      price: 75,
      originalPrice: 110,
      condition: "Very Good",
      imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
      seller: "SneakerVault",
      isLiked: false,
    },
    {
      id: "6",
      name: "Silk Blouse - Vintage Floral Print",
      price: 38,
      originalPrice: 58,
      condition: "Good",
      imageUrl: "https://images.unsplash.com/photo-1485518882345-15568b007407",
      seller: "SilkStories",
      isLiked: true,
    },
    {
      id: "7",
      name: "Wool Coat - Double Breasted Navy",
      price: 95,
      originalPrice: 140,
      condition: "Like New",
      imageUrl: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f",
      seller: "CoatCloset",
      isLiked: false,
    },
    {
      id: "8",
      name: "Bohemian Maxi Skirt - Earthy Tones",
      price: 42,
      originalPrice: 62,
      condition: "Very Good",
      imageUrl: "https://images.unsplash.com/photo-1583496661160-fb5886a13d44",
      seller: "BohoStyle",
      isLiked: false,
    },
  ];

  const categories = [
    "All Items",
    "Jackets & Coats",
    "Dresses",
    "Jeans & Denim",
    "Sweaters",
    "Shoes",
    "Accessories"
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
            Featured Finds
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Discover handpicked vintage treasures and pre-loved fashion pieces that are ready for their next adventure.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              className={`rounded-full px-6 py-2 font-medium transition-all ${
                index === 0 
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white" 
                  : "border-stone-300 text-stone-700 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Sort and Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="text-stone-600">
            Showing <span className="font-semibold">{featuredProducts.length}</span> of <span className="font-semibold">1,247</span> items
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="rounded-full">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <select className="px-4 py-2 border border-stone-300 rounded-full text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-full px-8 py-3 font-medium group"
          >
            Load More Items
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
