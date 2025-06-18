import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-stone-50 to-amber-50 py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-500 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-amber-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-stone-500 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Sustainable Fashion Marketplace
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-6">
              Discover
              <span className="text-emerald-600"> Vintage</span>
              <br />
              Treasures
            </h1>
            
            <p className="text-lg text-stone-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Find unique, pre-loved fashion pieces that tell a story. Join our community of conscious shoppers and sellers making sustainable choices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 py-3 text-lg font-medium group"
              >
                Start Shopping
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-stone-300 text-stone-700 hover:bg-stone-100 rounded-full px-8 py-3 text-lg font-medium"
              >
                Sell Your Items
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-12 pt-8 border-t border-stone-200">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-stone-900">50K+</div>
                <div className="text-sm text-stone-600">Happy Customers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-stone-900">100K+</div>
                <div className="text-sm text-stone-600">Items Sold</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-stone-900">95%</div>
                <div className="text-sm text-stone-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                alt="Vintage clothing collection"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg p-4 transform rotate-3 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="font-semibold text-stone-900">Authentic</div>
                  <div className="text-sm text-stone-600">Verified Items</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 transform -rotate-3 hover:rotate-0 transition-transform">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">$25</div>
                <div className="text-sm text-stone-600">Avg. Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
