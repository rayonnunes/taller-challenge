import { Blockquote, Box, Button, Flex, Table } from "@radix-ui/themes";
import { PaymentTableRow } from "./PaymentTableRow";
import { useState } from "react";
import { DatePicker } from "../DatePicker";

export type TableProps = {
  data: {
    paymentId: string;
    date: string;
    description: string;
    amount: number;
  }[];
};

export function PaymentTable(props: TableProps) {
  const { data } = props;

  const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

  const filteredData = data.filter((payment) => {
    if (startDate && new Date(payment.date) < new Date(startDate)) {
      return false;
    }

    if (endDate && new Date(payment.date) > new Date(endDate)) {
      return false;
    }

    return true;
  });

  const handleClear = () => {
    setStartDate("");
    setEndDate("");
  }

  return (
    <Box>
      <Flex gap="6">
        Filter by:
        <DatePicker startDate={startDate} endDate={endDate} onStartDateChange={setStartDate} onEndDateChange={setEndDate} />
        <Button onClick={handleClear}>Clear</Button>
      </Flex>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Payment ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Amount</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {filteredData.map((payment) => (
            <PaymentTableRow key={payment.paymentId} payment={payment} />
          ))}
        </Table.Body>
      </Table.Root>
      <Blockquote>
        Number of transactions: {filteredData.length}
      </Blockquote>
      <Blockquote>
        Total transaction amount: {filteredData.reduce((acc, payment) => acc + payment.amount, 0)}
      </Blockquote>
    </Box>
  );
}
