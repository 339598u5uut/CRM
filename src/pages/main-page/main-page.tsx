import { FC } from 'react';
import style from './main-page-style.module.css';
import { Sidebar } from '../../components/sidebar/sidebar';
import { News } from '../../components/news/news';

const MainPage: FC = () => {
	return (
		<div className={style.container}>
			<Sidebar />
			<News />
		</div>
	);
};
export default MainPage;