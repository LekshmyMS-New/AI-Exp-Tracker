import { Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useExpenseStore } from "../store/useExpenseStore";
import PageWrapper from "../components/common/PageWrapper";

const AddExpense = () => {
  const { addExpense } = useExpenseStore();

  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
  });

  const handleSubmit = () => {
    if (!form.title || !form.amount) return;

    addExpense({
      ...form,
      amount: Number(form.amount),
    });

    setForm({ title: "", amount: "", category: "" });
  };

  return (
    <PageWrapper>
      <Box>
        <Typography variant="h6">Add Expense</Typography>

        <TextField
          fullWidth
          label="Title"
          margin="normal"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <TextField
          fullWidth
          label="Amount"
          margin="normal"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
          }
        />

        <TextField
          fullWidth
          label="Category"
          margin="normal"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            borderRadius: "20px",
            background: "linear-gradient(135deg,#6C5DD3,#00D09C)",
          }}
          onClick={handleSubmit}
        >
          Add Expense
        </Button>
      </Box>
    </PageWrapper>
  );
};

export default AddExpense;