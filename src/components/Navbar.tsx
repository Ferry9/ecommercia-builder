import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import type { User as SupabaseUser } from "@supabase/supabase-js";

const Navbar = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            LuxWatch
          </Link>
          <div className="flex items-center space-x-4">
            <Link 
              to="/products" 
              className="text-gray-600 hover:text-gray-900"
            >
              Catalogue
            </Link>
            <Link 
              to="/cart" 
              className="text-gray-600 hover:text-gray-900"
            >
              <ShoppingCart className="h-6 w-6" />
            </Link>
            {user ? (
              <Link 
                to="/account" 
                className="text-gray-600 hover:text-gray-900"
              >
                <User className="h-6 w-6" />
              </Link>
            ) : (
              <Link 
                to="/auth" 
                className="text-gray-600 hover:text-gray-900"
              >
                Se connecter
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;