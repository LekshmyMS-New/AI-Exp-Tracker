import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Insights from "../pages/Insights";
import Transactions from "../pages/Transactions";
import Wallet from "../pages/Wallet";
import Profile from "../pages/Profile";
import AddExpense from "../pages/AddExpense";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/add" element={<AddExpense />} />
    </Routes>
  );
};

export default AppRoutes;