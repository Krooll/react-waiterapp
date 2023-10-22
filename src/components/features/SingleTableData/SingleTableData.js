import { Button, Col } from 'react-bootstrap';
import styles from './SingleTableData.module.scss';
import { Link } from 'react-router-dom';

const SingleTableData = props => {
    return (
        <div className={styles.card}>
            <Col xs={6} md={6} lg={6} className={styles.cardText}>
                <h4 className={styles.title}>Table {props.id}</h4>
                <p className={styles.status}>Status: {props.status}</p>
            </Col>
            <Col xs={6} md={6} lg={6} className={styles.cardButton}>
                <Link to={'/table/' + props.id}><Button>show more</Button></Link>
            </Col>
            <hr className={styles.bottomLine}></hr>
        </div>
    );
};

export default SingleTableData;