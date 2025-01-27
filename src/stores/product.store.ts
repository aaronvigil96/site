import {create} from 'zustand';

interface ProductState {
    azucar: number;
    increasePopulation:(value:number) => void;
}


export const useProductStore = create<ProductState>((set) => ({
    azucar: 0,
    increasePopulation: (value) => set((state) => ({ azucar: state.azucar + value }))
}))