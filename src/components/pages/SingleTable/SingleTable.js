import { FormGroup, Form, Col, Container, Button, Modal } from 'react-bootstrap';
import Header from '../../common/Header/Header';
import styles from './SingleTable.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { editTableRequest, getTableById } from '../../../redux/tablesRedux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SingleTable = () => {
    const {id} = useParams();
    const tableData = useSelector(state => getTableById(state, id));
    const [status, setStatus] = useState(tableData.status);
    const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount);
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount);
    const [bill, setBill] = useState(tableData.bill);
    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editTableRequest({id, status, bill, peopleAmount, maxPeopleAmount}));
        navigate('/');
    };

    const handleSetStatus = (e) => {
        const activeStatus = e.target.value
        e.preventDefault();
        setStatus(activeStatus);
    };

    const handleSetPeople = e => {
        const activePeopleAmount = e.target.value;
        e.preventDefault();
        if (!isNaN(activePeopleAmount) && activePeopleAmount >= 0 && activePeopleAmount <= 10 && activePeopleAmount <= maxPeopleAmount) {
            setPeopleAmount(activePeopleAmount);
        }
    };

    const handleSetMaxPeople = e => {
        const activeMaxPeople = e.target.value;
        e.preventDefault();
        if(activeMaxPeople > 10){
            setMaxPeopleAmount(10);
        }else if(activeMaxPeople <= 0){
            setMaxPeopleAmount(1);
        }else{
            setMaxPeopleAmount(activeMaxPeople);
        }
    };

 

    const handleToggleBill = () => {
        if(status === 'Busy'){
            return (
                <FormGroup className={styles.form}>
                        <p className={styles.tableInfo}>Bill:</p>
                        <Form.Control className={styles.counter} value={bill} onChange={handleSetBill}></Form.Control>
                        <span className={styles.mark}>$</span>
                </FormGroup>
            );
        }else {
            return null;
        }
    };

    const handleSetBill = e => {
        const activeBill = parseInt(e.target.value);
        e.preventDefault();
        if(!isNaN(activeBill) && activeBill >= 0){
            setBill(activeBill);
        }else {
            setBill(0);
        }
    };

    return (
        <Container className={styles.container}>
            <Form onSubmit={handleSubmit}>
                <Col xs={11} md={11} lg={11} >
                    <Header>Table {tableData.id}</Header>
                        <FormGroup className="m-3 w-100">
                            <p className={styles.tableInfo}>Status:</p>
                            <Form.Select type="text" value={status} onChange={handleSetStatus}>
                                <option value='Busy'> Busy </option>
                                <option value='Free'> Free </option>
                                <option value='Cleaning'> Cleaning </option>
                                <option value='Reserved'> Reserved </option>
                            </Form.Select>
                        </FormGroup>
                        <FormGroup className={styles.form}>
                            <p className={styles.tableInfo}>People:</p>
                            <Form.Control className={styles.counter} 
                                value={peopleAmount} onChange={handleSetPeople}>  
                            </Form.Control>
                            <p className={styles.mark}>/</p>
                            <Form.Control className={styles.counter} 
                            value={maxPeopleAmount} onChange={handleSetMaxPeople}></Form.Control>
                        </FormGroup>
                        {handleToggleBill()}
                    <Button type='submit' className={styles.button}>Update</Button>
                </Col>
            </Form >
            <Modal>

            </Modal>
        </Container>
    );
};

export default SingleTable;