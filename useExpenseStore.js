import { create } from "zustand";

export const useExpenseStore = create((set, get) => ({
  expenses: [
    { id: 1, title: "Swiggy", amount: 500, category: "Food", date: "Today" },
    { id: 2, title: "Uber", amount: 300, category: "Travel", date: "Yesterday" },
    { id: 3, title: "Amazon", amount: 1200, category: "Shopping", date: "2 days ago" },
  ],

  addExpense: (expense) =>
    set((state) => ({
      expenses: [
        {
          id: Date.now(),
          date: "Now",
          ...expense,
        },
        ...state.expenses,
      ],
    })),

  totalExpense: () =>
    get().expenses.reduce((sum, e) => sum + e.amount, 0),

  categoryData: () => {
    const result = {};
    get().expenses.forEach((e) => {
      result[e.category] = (result[e.category] || 0) + e.amount;
    });
    return result;
  },

  weeklyData: () => [
    { name: "Mon", amount: 400 },
    { name: "Tue", amount: 800 },
    { name: "Wed", amount: 300 },
    { name: "Thu", amount: 900 },
    { name: "Fri", amount: 700 },
    { name: "Sat", amount: 1200 },
    { name: "Sun", amount: 600 },
  ],
}));