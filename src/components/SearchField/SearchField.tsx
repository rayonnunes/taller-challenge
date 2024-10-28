import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export type SearchFieldProps = {
	search: string;
	onSearchChange: (search: string) => void;
};

export function SearchField(props: SearchFieldProps) {
	const { search, onSearchChange } = props;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onSearchChange(event.target.value);
	};

  return (
    <TextField.Root placeholder="Search by id or description" value={search} onChange={handleChange}>
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
    </TextField.Root>
  );
}
