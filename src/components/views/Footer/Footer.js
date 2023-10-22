import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.footerText}>Copyright © PizzeriaApp by WizardsDev</p>
        </div>
    );
};

export default Footer;