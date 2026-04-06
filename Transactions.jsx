import { Box, Typography } from "@mui/material";
import TransactionItem from "../components/lists/TransactionItem";
import PageWrapper from "../components/common/PageWrapper";
import { useExpenseStore } from "../store/useExpenseStore";

const Transactions = () => {
  const { expenses } = useExpenseStore();

  return (
    <PageWrapper>
      <Box>
        <Typography variant="h6">All Transactions</Typography>

        {expenses.map((item) => (
          <TransactionItem key={item.id} {...item} />
        ))}
      </Box>
    </PageWrapper>
  );
};

export default Transactions;