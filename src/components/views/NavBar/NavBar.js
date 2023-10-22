import { Container, Navbar, Nav, NavLink } from 'react-bootstrap';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Container className={styles.navBar}>
             <Navbar expand="lg" className="navbar-dark bg-primary rounded d-flex justify-content-between pt-3">
                <Link to={"/"} className={styles.navLinks}><p>Waiter-app</p></Link>
                <Link to={"/"} className={styles.navLinks}><p>Home</p></Link>  
             </Navbar>
        </Container>
    );
};

export default NavBar;