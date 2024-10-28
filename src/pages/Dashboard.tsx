import { Box, Card } from "@radix-ui/themes";
import { useGetPayments } from "../hooks/api";
import { PaymentTable } from "../components/PaymentTable/PaymentTable";

export function Dashboard() {
  const { data = [], isError, isLoading } = useGetPayments();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Unable to obtain list of transactions</div>;
  }

  return (
    <Box>
      <Card>
        <PaymentTable data={data} />
      </Card>
    </Box>
  );
}
