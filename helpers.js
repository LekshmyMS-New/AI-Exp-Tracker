export const generateInsights = (expenses) => {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  const highest = expenses.reduce(
    (max, e) => (e.amount > max.amount ? e : max),
    expenses[0] || {}
  );

  if (total > 10000) {
    return "⚠️ You're spending more than usual this month.";
  }

  if (highest?.category === "Food") {
    return "🍔 Food spending is high. Try cooking more!";
  }

  return "✅ Your spending looks balanced. Keep it up!";
};