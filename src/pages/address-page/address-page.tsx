import { FC } from 'react';
import style from './address-page-style.module.css';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Address } from '../../components/address/address';

const AddressPage: FC = () => {
	return (
		<div className={style.container}>
			<Sidebar />
			<Address />
		</div>
	);
};
export default AddressPage;