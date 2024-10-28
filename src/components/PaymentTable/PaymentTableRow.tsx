import { Table } from "@radix-ui/themes";

export type TableProps = {
    payment: {
        paymentId: string;
        date: string;
        description: string;
        amount: number;
    }
}

export function PaymentTableRow(props: TableProps) {
    const { payment: {paymentId, date, description, amount} } = props;
    const formattedDate = new Date(date).toLocaleString()

    const formattedDescription = description.charAt(0).toUpperCase() + description.slice(1);

    return (
        <Table.Row key={paymentId}>
            <Table.Cell>{paymentId}</Table.Cell>
            <Table.Cell>{formattedDate}</Table.Cell>
            <Table.Cell>{formattedDescription}</Table.Cell>
            <Table.Cell>{amount}</Table.Cell>
        </Table.Row>
    )
}