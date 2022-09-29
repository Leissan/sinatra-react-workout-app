import React  from 'react';
import { createUseStyles } from 'react-jss';
import NavigationBar from '../navigation/NavigationBar';


export const Layout = (props) => {
  const classes = useStyles();

  const { width = null, children } = props

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
        <NavigationBar/>
        
        <div className={classes.wrapper}>
            {children}
        </div>
    </div>
  )
}

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: 32,
    color: "white"
  }
});

export default Layout;