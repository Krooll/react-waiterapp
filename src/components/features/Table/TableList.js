import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import styles from './TableList.module.scss';
import { Col, Container } from 'react-bootstrap';
import { fetchTables } from '../../../redux/tablesRedux';
import { getAllTables } from '../../../redux/tablesRedux';
import { useEffect } from 'react';
import SingleTableData from '../SingleTableData/SingleTableData';

const TableList = () => {
    const dispatch = useDispatch();
    const tables = useSelector(getAllTables);

    useEffect(() => {
        dispatch(fetchTables());
    }, [dispatch]);

    return (
        <Container>
            <Col xs={12} md={12} lg={12}>
                {tables.map(table => <SingleTableData key={table.id} {...table}/>)}
            </Col>
        </Container>
    );
};

export default TableList;