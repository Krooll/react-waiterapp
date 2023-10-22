import styles from './Header.module.scss'

const Header = props => {
    return (
        <h1 className={styles.header}>{props.children}</h1>
    );
};

export default Header;