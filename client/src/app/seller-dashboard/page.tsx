'use client';
import { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, DollarSign, ShoppingBag, BarChart3, Plus, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

const SellerDashboard = () => {
  const [products] = useState([
    { id: "1", name: "Vintage Leather Jacket", price: 89.99, status: "Active", views: 45 },
    { id: "2", name: "Retro Sunglasses", price: 25.50, status: "Sold", views: 23 }
  ]);

  const [orders] = useState([
    { id: "1", buyer: "John D.", item: "Retro Sunglasses", amount: 25.50, status: "Shipped" },
    { id: "2", buyer: "Sarah M.", item: "Vintage Leather Jacket", amount: 89.99, status: "Processing" }
  ]);

  const stats = {
    totalEarnings: 1245.67,
    activeListings: 8,
    soldItems: 23,
    pendingOrders: 2
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-stone-900 mb-2">Seller Dashboard</h1>
          <p className="text-stone-600">Manage your store and track your sales performance.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <DollarSign className="w-8 h-8 text-emerald-600" />
                <div>
                  <p className="text-sm text-stone-600">Total Earnings</p>
                  <p className="text-2xl font-bold">${stats.totalEarnings}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Package className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-sm text-stone-600">Active Listings</p>
                  <p className="text-2xl font-bold">{stats.activeListings}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <ShoppingBag className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="text-sm text-stone-600">Sold Items</p>
                  <p className="text-2xl font-bold">{stats.soldItems}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <BarChart3 className="w-8 h-8 text-orange-600" />
                <div>
                  <p className="text-sm text-stone-600">Pending Orders</p>
                  <p className="text-2xl font-bold">{stats.pendingOrders}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="products">My Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="profile">Store Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Product Inventory</h2>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="w-4 h-4 mr-2" />
                Add New Product
              </Button>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {products.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 bg-stone-50 rounded-lg">
                      <div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-sm text-stone-600">{product.views} views • Status: {product.status}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="font-bold">${product.price}</p>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-stone-50 rounded-lg">
                      <div>
                        <h3 className="font-semibold">{order.item}</h3>
                        <p className="text-sm text-stone-600">Buyer: {order.buyer}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">${order.amount}</p>
                        <p className="text-sm text-stone-600">{order.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Sales Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600">Analytics charts and insights will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Store Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600">Manage your seller profile and store settings here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default SellerDashboard;
