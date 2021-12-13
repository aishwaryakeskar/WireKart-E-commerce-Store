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
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	title: {
        fontFamily: ['"Montserrat"', 'Open Sans'],
		paddingBottom: theme.spacing(4),
        height:"inherit",
        display:"flex",
        paddingLeft: "9%",
        flexDirection:"column",
        justifyContent: "center",
		alignItems: "flex-start",
		color: "#fff"
	},
}));