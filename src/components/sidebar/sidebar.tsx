import style from './sidebar-style.module.css'
import { NavLink } from 'react-router-dom';
import { FC, useState } from 'react';
import Icons from '../icons';
import { CSSTransition } from 'react-transition-group';

export const Sidebar: FC = () => {

	const [dropdownVisible, setDropdownVisible] = useState(false);
	const toggleChecked = () => {
		setDropdownVisible(dropdownVisible => !dropdownVisible)
	};

	return (
		<nav className={style.container}>
			<p className={style.paragraph}>Меню</p>
			<div className={style.divScroll}>
				<ul className={style.list}>

					<li className={style.item}>
						<Icons name='home' width={32} height={32} />
						<NavLink
							activeClassName={style.active}
							to={{ pathname: '/' }}
							exact={true}
							className={style.link}
						>Главная
						</NavLink>
					</li>

					<li className={style.item}>
						<Icons name='address' width={32} height={32} />
						<NavLink
							activeClassName={style.active}
							to={{ pathname: '/address' }}
							exact={true}
							className={style.link}
						>Поиск адресов
						</NavLink>
					</li>

					<li className={style.item}>
						<Icons name='tables' width={32} height={32} />
						<NavLink
							activeClassName={style.active}
							to={{ pathname: '/tables' }}
							exact={true}
							className={style.link}
						>Таблицы
						</NavLink>
					</li>

					<li className={style.item}>
						<Icons name='calendar' width={32} height={32} />
						<NavLink
							activeClassName={style.active}
							to={{ pathname: '/calendar' }}
							exact={true}
							className={style.link}
						>Календарь
						</NavLink>
					</li>

					<li className={style.item}>
						<Icons name='cards' width={25} height={32} />
						<NavLink
							activeClassName={style.active}
							to={{ pathname: '/cards' }}
							exact={true}
							className={style.link}
						>Карты
						</NavLink>
					</li>

					<li className={style.item}>
						<Icons name='widgets' width={32} height={30} />
						<NavLink
							activeClassName={style.active}
							to={{ pathname: '/widgets' }}
							exact={true}
							className={style.link}
						>Виджеты
						</NavLink>
					</li>

					<li>
						<div className={style.settings} onClick={() => toggleChecked()}>
							<div className={style.settingsItem}>
								<Icons name='settings' width={32} height={34} />
								<button type='button'>Настройки</button>
							</div>

							{dropdownVisible ?
								<Icons name='dropdownClose' width={13} height={12} /> :
								<Icons name='dropdownOpen' width={13} height={12} />}
						</div>

						{dropdownVisible ?

							<CSSTransition
								in={dropdownVisible}
								timeout={300}
								classNames={{
									appear: style.exampleAppear,
									appearActive: style.exampleAppearActive,
									exit: style.exampleExit,
									exitActive: style.exampleExitActive,

								}}
								unmountonexit='true'
								appear='true'
							>

								<ul className={style.listInserted} >
									<li className={style.dropdownIcon}>
										<Icons name='dropdownProfileSettings' width={30} height={35} />
										<NavLink
											activeClassName={style.active}
											to={{ pathname: '/profile_settings' }}
											exact={true}
											className={`${style.link}${style.link_dropdown}`}
										>Настройки
											профиля
										</NavLink>
									</li>

									<li className={style.dropdownIcon}>
										<Icons name='dropdownFinancialManagement' width={32} height={32} />
										<NavLink
											activeClassName={style.active}
											to={{ pathname: '/financial_management' }}
											exact={true}
											className={`${style.link}${style.link_dropdown}`}
										>Управление
											финансами
										</NavLink>
									</li>
								</ul>
							</CSSTransition>
							: null
						}
					</li>

					<li className={style.item}>
						<Icons name='exit' width={32} height={32} />
						<button type='submit'>Выход</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};
