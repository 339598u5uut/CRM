import style from './header-style.module.css';
import Icons from '../icons';
import { FC, useState } from 'react';
import { BurgerMenu } from '../burger-menu/burger-menu';
import classNames from 'classnames';

const Header: FC = () => {

	const [open, setOpen] = useState(false);
	const toggleChecked = () => setOpen(open => !open);

	return (
		<header className={style.header}>
			<div className={style.container}>

				<div className={`${style.item} ${style.item_left}`}>
					<button type='button' className={style.burger} onClick={() => toggleChecked()}>
						<Icons name='burger' width={45} height={39} />
					</button>
					<Icons name='wrench' width={48} height={48} />
					<p className={style.paragraph}>Wrench CRM</p>
				</div>

				<div className={`${style.item} ${style.item_right}`}>
					<Icons name='person' width={48} height={48} />
					<p className={style.paragraph}>Имя Фамилия</p>
				</div>

				{!open ? null :
					(<BurgerMenu isOpen={() => setOpen(true)} onClose={() => setOpen(false)}
						className={classNames(style.containerBurger, { [style.visible]: open })}
					/>
					)}

			</div>
		</header>
	);
};

export default Header;