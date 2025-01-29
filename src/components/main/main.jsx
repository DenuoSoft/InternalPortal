import css from './main.module.scss';
import { Search } from './search/search';
//import {Form} from "./form/form";
//import * as React from 'react';
//import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
//import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
//import CardActionArea from '@mui/material/CardActionArea';
//import CardActions from '@mui/material/CardActions';
//import Search from './search/search'
export const Main = () => {
	return (
		<main>
      <div className={css.layout}>
        <div className={css.main}>
        <Search />
        </div>
						<div className={css.main}>News</div>
				    <div className={css.main}>Events</div>
			</div>
		</main>
	);
};
