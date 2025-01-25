import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  stock: number;
}

export default function Products() {
  const { toast } = useToast();

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Product[];
    },
  });

  const addToCart = (product: Product) => {
    // TODO: Implement cart functionality
    toast({
      title: "Produit ajouté au panier",
      description: `${product.name} a été ajouté à votre panier`,
    });
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </CardHeader>
              <CardContent>
                <div className="h-40 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mt-4"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Notre Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              ) : (
                <div className="w-full h-48 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Pas d'image</span>
                </div>
              )}
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-bold">{product.price.toFixed(2)} €</p>
              <p className="text-sm text-gray-500">
                Stock: {product.stock} unité{product.stock > 1 ? "s" : ""}
              </p>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => addToCart(product)}
                disabled={product.stock === 0}
                className="w-full"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                {product.stock === 0 ? "Rupture de stock" : "Ajouter au panier"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}