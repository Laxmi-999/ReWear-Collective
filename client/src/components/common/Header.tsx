'use client';
import { Search, ShoppingBag, User, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import  Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-stone-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-2xl font-bold text-emerald-700">ThriftFind</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-stone-700 hover:text-emerald-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/buyer-dashboard" className="text-stone-700 hover:text-emerald-600 transition-colors font-medium">
              Shop
            </Link>
            <Link href="/seller-dashboard" className="text-stone-700 hover:text-emerald-600 transition-colors font-medium">
              Sell
            </Link>
            <Link href="/admin-dashboard" className="text-stone-700 hover:text-emerald-600 transition-colors font-medium">
              Admin
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for vintage treasures..."
                className="pl-10 pr-4 py-2 w-full border-stone-300 focus:border-emerald-500 focus:ring-emerald-500 rounded-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-4 h-4" />
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-stone-700 hover:text-emerald-600">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-stone-700 hover:text-emerald-600 relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Button>
            <Button variant="ghost" size="sm" className="text-stone-700 hover:text-emerald-600">
              <User className="w-5 h-5" />
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6">
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-700"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 w-full border-stone-300 focus:border-emerald-500 rounded-full"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-4 h-4" />
              </div>
              <div className="flex flex-col space-y-2">
                <Link href="/" className="text-stone-700 hover:text-emerald-600 py-2 font-medium">
                  Home
                </Link>
                <Link href="/buyer-dashboard" className="text-stone-700 hover:text-emerald-600 py-2 font-medium">
                  Shop
                </Link>
                <Link href="/seller-dashboard" className="text-stone-700 hover:text-emerald-600 py-2 font-medium">
                  Sell
                </Link>
                <Link href="/admin-dashboard" className="text-stone-700 hover:text-emerald-600 py-2 font-medium">
                  Admin
                </Link>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm" className="text-stone-700">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-stone-700 relative">
                    <ShoppingBag className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      2
                    </span>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-stone-700">
                    <User className="w-5 h-5" />
                  </Button>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
