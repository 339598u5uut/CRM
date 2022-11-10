export type TIcons = {
	name: string;
	width: number;
	height: number;
}

export type TData = {
	value: string;
	unrestricted_value: string;
}

export type TBurgerMenu = {
	isOpen: () => void;
	onClose: () => void;
}