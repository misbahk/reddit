import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

class Modalpop extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible = false, data =[], closeModal }= this.props;
    const { title='', thumbnail=null, url, author_fullname, author, id, name, score, upvote_ratio, ups} = data;
    console.log(visible,data);
    return (
      <>
        <Modal 
         
          visible={visible}
          onOk={this.handleOk}
          onCancel={closeModal}
        >
<ModalHeader style={{color:"red", fontWeight:"500", fontSize:"22px"}}  >
{title}

</ModalHeader>
          <center>
          <img style={{width:"18rem", height:"21rem"}} src={url}/>
          </center>
<br/>
<div class="row">
<div class="col-2">
  </div>
  <div class="col-4">
  <p style={{fontSize:"20px", fontWeight:"500", color:"darkblue"}}>Author Name</p>
          <p style={{fontSize:"20px", fontWeight:"500", color:"darkblue"}}>Author</p>
          <p style={{fontSize:"20px", fontWeight:"500", color:"darkblue"}}>ID</p>
          <p style={{fontSize:"20px", fontWeight:"500", color:"darkblue"}}>name</p>
          <p style={{fontSize:"20px", fontWeight:"500", color:"darkblue"}}>Score</p>
          <p style={{fontSize:"20px", fontWeight:"500", color:"darkblue"}}>Upvote Ratio</p>
          <p style={{fontSize:"20px", fontWeight:"500", color:"darkblue"}}>Ups</p>

  </div>
  <div class="col-4">
  <p style={{fontSize:"20px", fontWeight:"500", color:"#bf377b"}}>{author_fullname}</p>
          <p style={{fontSize:"20px", fontWeight:"500", color:"#bf377b"}}>{author}</p>
          <p style={{fontSize:"20px", fontWeight:"500", color:"#bf377b"}}>{id}</p>
          <p style={{fontSize:"20px", fontWeight:"500", color:"#bf377b"}}>{name}</p>
          <p style={{fontSize:"20px", fontWeight:"500", color:"#bf377b"}}>{score}</p>
          <p style={{fontSize:"20px", fontWeight:"500", color:"#bf377b"}}>{upvote_ratio}</p>
          <p style={{fontSize:"20px", fontWeight:"500", color:"#bf377b"}}>{ups}</p>
    </div>
    <div class="col-2">
  </div>
</div>

     
       
        
        </Modal>
      </>
    );
  }
}

export default Modalpop;