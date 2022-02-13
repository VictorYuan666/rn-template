import create from 'zustand';

interface BearState {
  count: number;
  increase: (by: number) => void;
}
const useStore = create<BearState>((set) => ({
  count: 0,
  increase: (by) => set((state) => ({ count: state.count + by })),
}));

export default useStore;
