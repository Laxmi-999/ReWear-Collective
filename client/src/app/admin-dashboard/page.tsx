'use client';
import { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Package, ShoppingBag, Settings, AlertTriangle, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AdminDashboard = () => {
  const [users] = useState([
    { id: "1", name: "John Doe", email: "john@example.com", type: "Buyer", status: "Active" },
    { id: "2", name: "Sarah Smith", email: "sarah@example.com", type: "Seller", status: "Active" },
    { id: "3", name: "Mike Johnson", email: "mike@example.com", type: "Buyer", status: "Suspended" }
  ]);

  const [products] = useState([
    { id: "1", name: "Vintage Leather Jacket", seller: "Sarah Smith", status: "Pending", price: 89.99 },
    { id: "2", name: "Retro Sunglasses", seller: "Mike Johnson", status: "Approved", price: 25.50 },
    { id: "3", name: "Designer Handbag", seller: "Sarah Smith", status: "Rejected", price: 156.00 }
  ]);

  const [disputes] = useState([
    { id: "1", buyer: "John Doe", seller: "Sarah Smith", item: "Vintage Watch", status: "Open" },
    { id: "2", buyer: "Mike Johnson", seller: "Jane Wilson", item: "Designer Bag", status: "Resolved" }
  ]);

  const stats = {
    totalUsers: 1234,
    totalProducts: 5678,
    pendingApprovals: 23,
    activeDisputes: 5
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-stone-900 mb-2">Admin Dashboard</h1>
          <p className="text-stone-600">Manage users, products, and platform operations.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Users className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-sm text-stone-600">Total Users</p>
                  <p className="text-2xl font-bold">{stats.totalUsers}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Package className="w-8 h-8 text-emerald-600" />
                <div>
                  <p className="text-sm text-stone-600">Total Products</p>
                  <p className="text-2xl font-bold">{stats.totalProducts}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <ShoppingBag className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="text-sm text-stone-600">Pending Approvals</p>
                  <p className="text-2xl font-bold">{stats.pendingApprovals}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                <div>
                  <p className="text-sm text-stone-600">Active Disputes</p>
                  <p className="text-2xl font-bold">{stats.activeDisputes}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="disputes">Disputes</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 bg-stone-50 rounded-lg">
                      <div>
                        <h3 className="font-semibold">{user.name}</h3>
                        <p className="text-sm text-stone-600">{user.email} • {user.type}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant={user.status === "Active" ? "default" : "destructive"}>
                          {user.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          Manage
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle>Product Approvals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {products.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 bg-stone-50 rounded-lg">
                      <div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-sm text-stone-600">by {product.seller} • ${product.price}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge 
                          variant={
                            product.status === "Approved" ? "default" : 
                            product.status === "Pending" ? "secondary" : "destructive"
                          }
                        >
                          {product.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          Review
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
                <CardTitle>Order Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600">All platform orders will be displayed here for monitoring and management.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="disputes">
            <Card>
              <CardHeader>
                <CardTitle>Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {disputes.map((dispute) => (
                    <div key={dispute.id} className="flex items-center justify-between p-4 bg-stone-50 rounded-lg">
                      <div>
                        <h3 className="font-semibold">{dispute.item}</h3>
                        <p className="text-sm text-stone-600">{dispute.buyer} vs {dispute.seller}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant={dispute.status === "Open" ? "destructive" : "default"}>
                          {dispute.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          Resolve
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Platform Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="outline">Manage Categories</Button>
                  <Button variant="outline">Platform Configuration</Button>
                  <Button variant="outline">Analytics & Reports</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
