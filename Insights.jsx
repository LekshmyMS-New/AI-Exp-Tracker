import { Box, Typography } from "@mui/material";
import InsightCard from "../components/cards/InsightCard";
import PageWrapper from "../components/common/PageWrapper";
import SwipeWrapper from "../components/common/SwipeWrapper";
import { useExpenseStore } from "../store/useExpenseStore";
import { generateInsights } from "../utils/helpers";

const Insights = () => {
  const { expenses } = useExpenseStore();

  return (
    <PageWrapper>
      <SwipeWrapper>
        <Box>
          <Typography variant="h6">AI Insights 🤖</Typography>

          <InsightCard text={generateInsights(expenses)} />
        </Box>
      </SwipeWrapper>
    </PageWrapper>
  );
};

export default Insights;