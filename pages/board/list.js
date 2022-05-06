import React, {useState} from 'react';
import {useDispatch, connect} from 'react-redux';
import {listRequest} from '@/modules/board/list';
import {List} from '@/components/board/List';

const ListPage = () => {
    const [board, setBoard] = useState({
        title: '',
        name: '',
        subject: ''
    })
    const dispatch = useDispatch()
    const onChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setBoard({
            ...board,
            [name]: value
        })
    }
    const onSubmit = e => {
        e.preventDefault()
        dispatch(listRequest(board))
    }
    return null
};
export default ListPage;