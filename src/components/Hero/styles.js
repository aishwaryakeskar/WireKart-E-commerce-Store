import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '100vh',
		position: 'relative',
	},
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(254, 255, 226, 0.4)',
	},
	title: {
        fontFamily: ['"Montserrat"', 'Open Sans'],
		fontWeight: "bold",
		paddingBottom: theme.spacing(4),
        height:"inherit",
        display:"flex",
		paddingTop:"1.6%",
        paddingLeft: "9%",
		paddingRight: "9%",
        flexDirection:"column",
        justifyContent: "center",
		alignItems: "center",
		color: "#533535"
	},
	arrow: {
		paddingTop:"0.5em",
	},
}));