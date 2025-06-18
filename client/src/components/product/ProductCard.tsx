'use client';
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  condition: string;
  imageUrl: string;
  seller: string;
  isLiked?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(product.isLiked || false);
  const [isHovered, setIsHovered] = useState(false);

  const conditionColors = {
    "Like New": "bg-emerald-100 text-emerald-700",
    "Very Good": "bg-blue-100 text-blue-700",
    "Good": "bg-amber-100 text-amber-700",
    "Fair": "bg-orange-100 text-orange-700",
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div 
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <Badge className="absolute top-3 left-3 bg-red-500 text-white font-semibold">
            -{discountPercentage}%
          </Badge>
        )}

        {/* Condition Badge */}
        <Badge 
          className={`absolute top-3 right-3 text-xs font-medium ${
            conditionColors[product.condition as keyof typeof conditionColors] || 
            "bg-stone-100 text-stone-700"
          }`}
        >
          {product.condition}
        </Badge>

        {/* Like Button */}
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-3 right-14 w-8 h-8 p-0 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all ${
            isLiked ? 'text-red-500' : 'text-stone-600 hover:text-red-500'
          }`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart 
            className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} 
          />
        </Button>

        {/* Quick Add to Cart - Shows on Hover */}
        <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <Button 
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium"
            size="sm"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold text-stone-900 text-sm line-clamp-2 group-hover:text-emerald-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-stone-500 mt-1">by {product.seller}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-stone-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-stone-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 font-medium text-xs px-3"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
