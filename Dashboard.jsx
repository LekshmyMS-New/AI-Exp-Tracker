import { Box, Typography } from "@mui/material";
import HeroCard from "../components/cards/HeroCard";
import ExpensePieChart from "../components/charts/ExpensePieChart";
import TransactionItem from "../components/lists/TransactionItem";
import PageWrapper from "../components/common/PageWrapper";
import SwipeWrapper from "../components/common/SwipeWrapper";
import { useExpenseStore } from "../store/useExpenseStore";

const Dashboard = () => {
  const { expenses, categoryData } = useExpenseStore();

  return (
    <PageWrapper>
      <SwipeWrapper>
        <Box>
          <Typography variant="h6" sx={{ mb: 1 }}>
    Welcome back 👋
  </Typography>

  <HeroCard />

  <Box sx={{ mt: 2 }}>
    <ExpensePieChart data={categoryData()} />
  </Box>

  <Typography sx={{ mt: 3, mb: 1 }}>
    Recent Transactions
  </Typography>

          {expenses.map((item) => (
            <TransactionItem key={item.id} {...item} />
          ))}
        </Box>
      </SwipeWrapper>
    </PageWrapper>
  );
};

export default Dashboard;