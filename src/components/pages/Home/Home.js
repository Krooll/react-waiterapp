import { Container } from 'react-bootstrap';
import styles from './Home.module.scss';
import Header from '../../common/Header/Header';
import TableList from '../../features/Table/TableList';

const Home = () => {
    return (
        <Container>
            <Header>All Tables</Header>
            <TableList />
        </Container>
    );
};

export default Home;