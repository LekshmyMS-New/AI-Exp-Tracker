import { Box, Typography } from "@mui/material";
import BalanceCard from "../components/cards/BalanceCard";
import PageWrapper from "../components/common/PageWrapper";

const Wallet = () => {
  return (
    <PageWrapper>
      <Box>
        <Typography variant="h6">My Wallet 💳</Typography>

        <BalanceCard title="Bank Balance" amount="45,000" />
        <BalanceCard title="Cash" amount="5,000" />
      </Box>
    </PageWrapper>
  );
};

export default Wallet;