import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { userServ } from "../../services/userServ";
import { Button, Modal } from "antd";
const UserManager = () => {
  const columns = [
    {
      title: "Số thứ tự",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      render: (text, record, index) => {
        return <p>{index + 1}</p>;
      },
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
      key: "matKhau",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDT",
      key: "soDT",
    },
    {
      title: "Thao tác",
      key: "thaoTac",
      dataIndex: "thaoTac",
      render: (_, record) => (
        <div className="space-x-2">
          <button>
            <i className="px-3 py-2 bg-green-600 rounded-md fa-solid fa-pen" />
          </button>
          <button
            onClick={() => {
              userServ
                .deleteUser(record.taiKhoan)
                .then(() => {
                  userServ.getAllUser().then((res) => {
                    setListUser(res.data.content);
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            <i className="px-3 py-2 bg-red-600 rounded-md fa-solid fa-trash" />
          </button>
        </div>
      ),
    },
  ];
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    userServ
      .getAllUser()
      .then((res) => {
        setListUser(res.data.content);
      })
      .catch();
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <h2 className="font-bold text-2xl mb-5">Danh sách người dùng</h2>
      <Table
        columns={columns}
        dataSource={listUser}
        pagination={{
          pageSize: 10,
        }}
      />
    </div>
  );
};

export default UserManager;
