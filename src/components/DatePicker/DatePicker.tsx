import { Flex, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export type SearchFieldProps = {
  startDate: string;
  endDate: string;
  onStartDateChange: (startDate: string) => void;
  onEndDateChange: (endDate: string) => void;
};

export function DatePicker(props: SearchFieldProps) {
    const { startDate, endDate, onStartDateChange, onEndDateChange } = props;

    const isValidDate = (date: string) => {
        return !isNaN(new Date(date).getTime());
    }

    const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isValidDate(event.target.value)) {
          onStartDateChange(event.target.value);
        }
      };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isValidDate(event.target.value)) {
        onEndDateChange(event.target.value);
      }
  };

  return (
    <Flex gap="3">
      <TextField.Root type="date" value={startDate} onChange={handleStartDateChange}>
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
      to
      <TextField.Root type="date" value={endDate} onChange={handleEndDateChange}>
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
    </Flex>
  );
}
