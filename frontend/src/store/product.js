import {create} from "zustand"

export const useProductStore = create((set) => ({
    products:[],
    setProducts: (products) => set({products}),
    createProduct: async (newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image){
            return {success:false, message: "Please fill all "};
    }
    const res = await fetch("/api/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    if(res.status === 201){
        set((state) => ({
            products: [...state.products, data.data],
        }));
        return {success: true, message: "Product created successfully"};
        }
 },

 fetchProducts: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    if(res.status === 200){
        set({products: data.data});
    }
 },
 deleteProduct: async (pid) => {
    const res = await fetch(`/api/products/${pid}`,{
        method:"DELETE",
    });
    const data = await res.json();
    if(!data.success) return {success: false, message: data.message };

    //update the state after deleting
    set((state) => ({products: state.products.filter((product) => product._id !== pid) }));
    return {success: true, message: data.message};
 },
}));