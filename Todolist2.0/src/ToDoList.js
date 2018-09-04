import React, {Component} from 'react';
import 'antd/dist/antd.css';
import store from "./store"
import ToDoListUI from './ToDoListUI'
import {getInputChangeAction, getAddItem, deleteItem, getTodoList} from './store/actionCreators'

class ToDoList extends Component {
   
    constructor(props){
      super(props)
      this.state = store.getState()
      this.handleBtnClick = this.handleBtnClick.bind(this)
      this.handleInputChange = this.handleInputChange.bind(this)
      this.handleStoreChange = this.handleStoreChange.bind(this)
      this.handleItemClick = this.handleItemClick.bind(this)
      store.subscribe(this.handleStoreChange)
    }
    handleStoreChange(){
        this.setState(store.getState());
    }
    render() {
        
        return <ToDoListUI
         inputValue = {this.state.inputValue} 
         list = {this.state.list}
         handleInputChange = {this.handleInputChange}
         handleBtnClick = {this.handleBtnClick}
         handleItemClick = {this.handleItemClick}
         />
    }
    componentDidMount(){
     const action = getTodoList();
     store.dispatch(action)
    }
    handleStoreChange(){
        this.setState(store.getState())
    }
    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action)
    }
    handleBtnClick(){
        const action = getAddItem();
        store.dispatch(action)
    }
    handleItemClick(index){
        const action = deleteItem(index);
        store.dispatch(action)
    }
}

export default ToDoList;
