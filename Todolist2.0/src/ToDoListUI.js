import React from 'react'
import { Button,Input,List} from 'antd';
//无状态组件
const ToDoListUI = (props) => {
    return(
        <div>
            <div style={{marginLeft:10,marginTop:10}}>
            <Input value = { props.inputValue } onChange = {props.handleInputChange}  placeholder="请您输入内容" style={{width:300,marginRight:10}}/>
            <Button type="primary" onClick = {props.handleBtnClick} >提交</Button>
            </div>
            <div style={{marginTop:10,marginLeft:10}}>
              <List
              style={{width:500}}

                bordered
                dataSource={props.list}
                renderItem={(item,index) => (<List.Item  onClick = {() => {props.handleItemClick(index)}}>{item}</List.Item>)}
                />
            </div>
            
        </div>
        
      
    )
}
export default ToDoListUI;