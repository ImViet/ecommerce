import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import ShoppingCart from "../components/ShoppingCart";
import { ICartItem } from "../interfaces/ICart";
import { IProduct } from "../interfaces/IProduct";
import { getAllProduct } from "../api/product";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { IResponseData } from "../interfaces/IResponseData";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

interface ShoppingCartContext {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
  cartItems: ICartItem[];
  cartQuantity: number;
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<ICartItem[]>("cart", []);
  const [products, setProducts] = useState<IProduct[]>([]);

  //Get list product
  useEffect(() => {
    getAllProduct()
      .then((res: IResponseData<IProduct[]>) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  //Count quantity items in cart
  const cartQuantity = cartItems.reduce((quantity, item) => {
    return item.quantity + quantity;
  }, 0);

  //Set open or close cart
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  //Get quantity items in cart
  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  //Increase item to cart
  function increaseCartQuantity(id: number) {
    setCartItems((currentItems) => {
      var existItem = currentItems.find((item) => item.id === id);
      // exist ? return cart map to find items (isItem ? quantity + 1 : return item) : new item
      return existItem
        ? currentItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [
            ...currentItems,
            {
              id,
              quantity: 1,
              product: products.find((product) => product.id === id),
            },
          ];
    });
  }
  //Decrease item in cart
  function decreaseCartQuantity(id: number) {
    setCartItems((currentItems) => {
      var item = currentItems.find((item) => item.id === id);
      // item ? return cart filter item(remove): return cart map to find items (isItem ? quantity - 1 : return item)
      return item?.quantity === 1
        ? currentItems.filter((item) => item.id !== id)
        : currentItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          );
    });
  }
  //Remove item in cart
  function removeFromCart(id: number) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  //Get cart items

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
