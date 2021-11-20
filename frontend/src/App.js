import { Button, Table, message } from 'antd';
import { useEffect, useState } from 'react';
import NewOrderModal from './components/NewOrderModal';
import OrderDetailsModal from './components/OrderDetailsModal';
import { api } from './services/api';
import './App.css';

function App() {
  const [isNewOrderModalVisible, setIsNewOrderModalVisible] = useState(false)
  const [isOrderDetailsModalVisible, setIsOrderDetailsModalVisible] = useState(false)
  const [OrderDetailsModalInfo, setOrderDetailsModalInfo] = useState({})
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    api.get("/orders").then(response => {
      const responseParsed = response.data.map((order) => {
        return {
          ...order,
          deadline: new Date(order.deadline).toLocaleString("pt-BR", { dateStyle: "short" }),
          contactName: order.contact.split("#")[0],
          contactPhone: order.contact.split("#")[1],
          contact: order.contact.replace("#", " ")
        }
      })
      setDataSource(responseParsed)
    }).catch((error) => {
      console.log(error)
      message.error("An error occurred while fetching orders!, please try again later.")
    })
  }, [isNewOrderModalVisible])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category) => <span>{category.name}</span>
    },
    {
      title: 'Contact',
      dataIndex: 'contact',
      key: 'contact',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Deadline',
      dataIndex: 'deadline',
      key: 'deadline',
    }
  ];
  return (
    <div className="container">
      <header>
        <Button type="primary" onClick={() => setIsNewOrderModalVisible(true)}>Open new Order</Button>
      </header>
      <main>
        <Table
          dataSource={dataSource}
          columns={columns}
          onRow={(record) => {
            return {
              onClick: () => {
                setIsOrderDetailsModalVisible(true)
                setOrderDetailsModalInfo(record)
              }
            };
          }}
          pagination={{
            pageSize: 10
          }}
        />
        <NewOrderModal
          isModalVisible={isNewOrderModalVisible}
          changeModalVisibility={setIsNewOrderModalVisible}
        />
        <OrderDetailsModal
          isModalVisible={isOrderDetailsModalVisible}
          changeModalVisibility={setIsOrderDetailsModalVisible}
          modalInfo={OrderDetailsModalInfo}
        />
      </main>
    </div>
  );
}

export default App;
