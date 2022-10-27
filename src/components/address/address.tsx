import style from './address-style.module.css'
import { FC, useEffect, useRef, useState } from 'react';
import Icons from '../icons';
import { URL, TOKEN, checkResponse } from '../../utils/api';
import { TData } from '../../utils/types';

export const Address: FC = () => {

	const [data, setData] = useState<Array<TData>>();
	const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
	const inputRef = useRef<HTMLInputElement>(null);
	const query = inputRef.current?.value;

	const getData = (query: string | undefined) => {
		return fetch(URL, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Token " + `${TOKEN}`,
			},
			body: JSON.stringify({ query: query })
		})
			.then(checkResponse)
			.then(data => setData(data.suggestions))
			.catch(error => console.log("error", error));
	};

	useEffect(() => {
		getData(query);
	}, [query]);


	const onSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		getData(query);
		setIsCollapsed(true);
	};

	const handleChange = () => {
		if (inputRef.current && inputRef.current?.value.length <= 0) {
			setIsCollapsed(false);
		}
	};

	return (
		<div className={style.container}>
			<h1 className={style.headerH1}>Поиск адресов</h1>
			<h3 className={style.headerH3}>Введите интересующий вас адрес</h3>
			<form className={style.form} onSubmit={onSubmit}>
				<input
					type='text'
					name="input"
					className={style.input}
					placeholder='Введите адрес'
					ref={inputRef}
					minLength={3}
					onChange={handleChange}
				/>

				<button className={style.button}>
					<span className={style.icon}>
						<Icons name='search' width={32} height={32} />
					</span>
					Поиск
				</button>
			</form>

			{data?.length === 0 && inputRef.current && inputRef.current?.value.length > 0 &&
				<p className={style.dataEmpty}>Ничего не найдено. Попробуйте еще раз =).</p>
			}

			{!!data?.length && isCollapsed === true ? (
				<div className={style.address}>
					<p className={style.paragraphTitle}>Адреса</p>
					{data.map((el, index) =>
						<p className={style.paragraph} key={index}>{el.value}</p>)}
				</div>
			) : null
			}

		</div>
	)
}