import { Button } from 'react-bootstrap';
import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className={styles.title}>
            <h1>Page Not Found</h1>
            <Link to="/"><Button className={styles.button}>Back to main page</Button></Link>
        </div>
    );
};

export default NotFound;