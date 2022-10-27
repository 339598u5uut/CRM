import React, { FC } from 'react';
import IconsSVG from './icons.svg';
import { TIcons } from '../../utils/types';

const Icons: FC<TIcons> = ({ name, width, height }) => {
	return (
		<svg width={width} height={height}>
			<use xlinkHref={`${IconsSVG}#${name}`} />
		</svg>
	)
}

export default Icons;