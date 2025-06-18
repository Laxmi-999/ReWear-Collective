import { Heart, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-stone-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
            <p className="text-stone-400 mb-6">
              Get notified about new arrivals, special deals, and sustainable fashion tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-stone-800 border-stone-700 text-white placeholder-stone-400 rounded-full"
              />
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">ThriftFind</h2>
              <p className="text-stone-400 leading-relaxed">
                Your destination for sustainable fashion. We're building a community where pre-loved clothing finds new homes and stories continue.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-stone-400 hover:text-emerald-400 p-2">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-stone-400 hover:text-emerald-400 p-2">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-stone-400 hover:text-emerald-400 p-2">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors">
                  Shop All Items
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors">
                  Sell Your Items
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors">
                  Our Story
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors">
                  Payment Methods
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-stone-400">
                  123 Sustainable St,<br />
                  Green City, GC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-stone-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-stone-400">hello@thriftfind.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-stone-400">
              <span>&copy; 2024 ThriftFind. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-stone-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for sustainable fashion</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
