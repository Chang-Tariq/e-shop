import { create } from 'zustand'


export type Cart = {
    id:number,
    image: string
    price: number
    title: string
} & {quantity: number}

type CartStore = {
    cart: Cart[],
    cartCount: number,
    add: (cartObject:Cart) => void,
    updateQuantity: (id:number, quantity:number) => void,
    remove: (id:number) => void,
    incrementCartCount: () => void,
    decrementCartCount: () => void,
    decrementCartCountAll: () => void
}

export const useCartStore = create<CartStore>((set) => ({
    cartCount: 0,
    cart:[],
    add:(cart:Cart) => set((state) => (
        {
        cart: [
            ...state.cart,
            {...cart, quantity:1}
        ]
    })),
    updateQuantity: (id, quantity) => set((state) => ({
        cart: state.cart.map((cartItem) => cartItem.id === id ? ({...cartItem, quantity}): cartItem)
    })),
    remove:(id:number) => set((state) => ({
        cart: state.cart.filter((cartObject) => cartObject.id !== id)
    })),
    incrementCartCount: () => set((state) => ({ cartCount: state.cartCount + 1 })),
    decrementCartCount: () => set((state) => ({ cartCount: state.cartCount - 1 })),
    decrementCartCountAll: () => set({ cartCount: 0 }),
}));