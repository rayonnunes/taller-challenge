import { useQuery } from "@tanstack/react-query"
import { getPayment } from "../../services"

export function useGetPayments() {
    return useQuery({ queryKey: ["payments"], queryFn: getPayment })
}