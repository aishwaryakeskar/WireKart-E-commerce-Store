import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import hero from '../../assets/hero.jpg';

import { ArrowDownward } from '@material-ui/icons';


const Hero = () => {
	const classes = useStyles();

	return (
		<section className={classes.root}>
			<img src={hero} alt="WireKart" className={classes.root}/>
			<div className={classes.overlay}>
                <Typography variant="h3" align="center" className={classes.title}>
						One step closer <br/> to your perfect work from home <br/> setup
                        <div className={classes.arrow} ><ArrowDownward fontSize="large"/></div>
			    </Typography>
                
			</div>
		</section>
	);
};

export default Hero