'use client'
import { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingBag, Heart, MapPin, CreditCard, Star, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const BuyerDashboard = () => {
  const [activeOrders] = useState([
    { id: "1", item: "Vintage Leather Jacket", status: "Shipped", total: 89.99 },
    { id: "2", item: "Retro Sunglasses", status: "Processing", total: 25.50 }
  ]);

  const [orderHistory] = useState([
    { id: "3", item: "Designer Handbag", status: "Delivered", total: 156.00, date: "2024-06-10" },
    { id: "4", item: "Vintage Watch", status: "Delivered", total: 234.99, date: "2024-06-01" }
  ]);

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-stone-900 mb-2">My Dashboard</h1>
          <p className="text-stone-600">Welcome back! Manage your orders and account settings.</p>
        </div>

        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            <TabsTrigger value="addresses">Addresses</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    Active Orders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-stone-50 rounded-lg">
                        <div>
                          <h3 className="font-semibold">{order.item}</h3>
                          <p className="text-sm text-stone-600">Status: {order.status}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">${order.total}</p>
                          <Button variant="outline" size="sm">Track Order</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orderHistory.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-stone-50 rounded-lg">
                        <div>
                          <h3 className="font-semibold">{order.item}</h3>
                          <p className="text-sm text-stone-600">Delivered on {order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">${order.total}</p>
                          <Button variant="outline" size="sm">Review Item</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="wishlist">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  My Wishlist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600">Your saved items will appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="addresses">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Shipping Addresses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button>Add New Address</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment Methods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button>Add Payment Method</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  My Reviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600">Your product reviews will appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default BuyerDashboard;
