import style from './burger-menu-style.module.css';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import Icons from '../icons';
import { TBurgerMenu } from '../../utils/types';
import { CSSTransition } from 'react-transition-group';

export const BurgerMenu: FC<TBurgerMenu> = ({ isOpen, onClose }) => {

	return !isOpen ? null : (

		<nav className={style.nav}>
			<p className={style.paragraph}>Меню</p>
			<CSSTransition
				in={true}
				timeout={300}
				classNames={{
					appear: style.exampleAppear,
					appearActive: style.exampleAppearActive,
					exit: style.exampleExit,
					exitActive: style.exampleExitActive,
				}}
				unmountonexit="true"
				appear="true"
			>

				<ul className={style.list}>

					<li className={style.item}>
						<Icons name='home' width={32} height={32} />
						<Link to={{ pathname: '/' }} className={style.link} onClick={onClose}>
							Главная<br />страница
						</Link>
					</li>

					<li className={style.item}>
						<Icons name='address' width={32} height={32} />
						<Link to={{ pathname: '/address' }} className={style.link} onClick={onClose}>
							Поиск<br />адресов
						</Link>
					</li>

					<li className={style.item}>
						<Icons name='tables' width={32} height={32} />
						<Link to={''} className={style.link}>
							Таблицы
						</Link>
					</li>

					<li className={style.item}>
						<Icons name='calendar' width={32} height={32} />
						<Link to={''} className={style.link}>
							Календарь
						</Link>
					</li>

					<li className={style.item}>
						<Icons name='cards' width={25} height={32} />
						<Link to={''} className={style.link}>
							Карты
						</Link>
					</li>

					<li className={style.item}>
						<Icons name='widgets' width={32} height={30} />
						<Link to={''} className={style.link}>
							Виджеты
						</Link>
					</li>

					<li className={style.item}>
						<Icons name='dropdownProfileSettings' width={30} height={35} />
						<Link to={''} className={style.link}>
							Настройки<br />профиля
						</Link>
					</li>

					<li className={style.item}>
						<Icons name='dropdownFinancialManagement' width={32} height={32} />
						<Link to={''} className={style.link}>
							Управление<br />финансами
						</Link>
					</li>
				</ul>

			</CSSTransition>
		</nav>

	);
};