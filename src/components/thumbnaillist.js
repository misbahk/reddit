import React, { Component } from 'react';
import axios from 'axios'
import { Table, Space , Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import  ModalPopup from "./modal";

export class thumbnaillist extends Component {




state={
    imagelist:[],
    searchText: '',
    searchedColumn: ''
}






imageinfo=(record)=>{
    this.setState({modalData:record,showPopup:true});
}
closeModal = () => {
  this.setState({showPopup:false});
}

componentDidMount(){
    this.fetch();
  }

  fetch = () => {
    axios.get("https://www.reddit.com/r/pics/.json?jsonp=")
    .then(res => {
    const { status = false } = res;
    // this.setState({ imagelist:res});
    // console.log("imagelist", this.state.imagelist.)
    if(status){
        // const { data:{data={}}={}} = res;
        const { data = {} } = res;
        const { data:newData={} } = data;

        console.log(data);
        const { children =[]} = newData;
        console.log(children);
        let arr = [];
        children.forEach(element => {
          arr.push(element.data);
        });
        this.setState({imagelist:arr});

    }else{
        // error display
    }

   }
    )
  }

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  

  render() {
    const { imagelist = [], showPopup = false, modalData = {} } = this.state;
      const columns = [
        {
          title: 'Thumbnail',
          dataIndex: 'thumbnail',
          key: 'thumbnail',
          render: (text,record) => {
            return (
              <>
                <img  alt="gigig" onClick={()=>{this.imageinfo(record)}} style={{cursor:"pointer"}} src = {text}/>
                </>
            )
          }

        },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
          render: text => <p>{text}</p>,
          ...this.getColumnSearchProps('title')
        },
      
      
      ];

    return (
            <div>
         
                <ModalPopup visible={showPopup} data={modalData} closeModal={this.closeModal}/>
                <Table columns={columns} dataSource={imagelist} />
            </div>
        );
  }
}

export default thumbnaillist;
