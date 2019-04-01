import React from 'react';
import InputNumber from './input-number';
//import Modal from './modal';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

export default class extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            products: [
                {price: 1000, rest: 10, current: 1, like: false},
                {price: 2000, rest: 5, current: 2, like: true}
            ],
            modalOpen: false
        };
    }

    onChange(ind, val){
        let products = [...this.state.products];
        let product = Object.assign({}, this.state.products[ind]);
        product.current = val;
        products[ind] = product;
        this.setState({products});
    }

    onLike(ind, val){
        let products = [...this.state.products];
        let product = Object.assign({}, this.state.products[ind]);
        product.like = val;
        products[ind] = product;
        this.setState({products});
    }

    onOpen = () => {
        this.setState({modalOpen: true});
    }

    onClose = () => {
        this.setState({modalOpen: false});
    }

    render(){
        let sum = this.state.products.reduce((total, item) => {
            return total + item.price * item.current;
        }, 0);

        let inputs = this.state.products.map((item, i) => {
            return <div key={i}>
                <InputNumber min={1} max={item.rest}
                                value={item.current}
                                change={(val) => {this.onChange(i, val)}}/>
                <Checkbox icon={<FavoriteBorder/>} 
                          checkedIcon={<Favorite/>}
                          onChange={(e, val) => {this.onLike(i, val)}}
                          checked={item.like}
                >
                </Checkbox>
            </div>
        });

        return <div>
                <Dialog open={this.state.modalOpen} onClose={this.onClose}>
                    <DialogTitle>Добавьте побольше товаров</DialogTitle>
                    <DialogContent>
                        <p>Список товаров</p>
                        {inputs}
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" autoFocus onClick={this.onClose}>
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
                <p>Сумма заказа</p>
                {sum}
                <Button color="secondary" onClick={this.onOpen}>Edit</Button>
            </div>;
    }   
}