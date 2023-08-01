import React, { useEffect, useState } from 'react'
import { Card, Breadcrumb, Form, Button, Input, Space, Radio, Upload, message } from 'antd'
import { Link } from 'react-router-dom'
import styles from "./index.module.scss";
import Channel from '@/components/Channel';
import { PlusOutlined } from '@ant-design/icons';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useAction } from '@/store'
import { useNavigate, useSearchParams } from 'react-router-dom';
function Publish() {
  // 文章封面切换
  const [type, setType] = useState(1);
  const onTypeChange = (e) => {
    setType(e.target.value);
    setFileList([]);
  };
  // 上传图片
  const [fileList, setFileList] = useState([]);
  const onUploadChange = ({ fileList }) => {
    setFileList(fileList);
  };
  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  }
  // 发布文章
  const { addArticle, getArticleDetail, editArticle } = useAction()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const articleId = searchParams.get('id')
  const onFinish = async (values, draft = false) => {
    if (type !== fileList.length) {
      return message.warning("请按照选择的封面类型上传图片");
    }
    // 组织提交数据  
    const data = {
      ...values,
      cover: {
        type,
        // 后台需要[string]类型  
        images: fileList.map((item) => item?.response?.data?.url || item.url),
      },
    };
    if (articleId) {
      // 编辑
      data.id = articleId
      editArticle(data, draft)
    } else {
      addArticle(data, draft)
    }
    // 跳转
    navigate('/article')
  };
  // 回显数据
  const [form] = Form.useForm();
  useEffect(() => {
    const setFormData = async () => {
      if (articleId) {
        const { title, cover, content, channel_id } = await getArticleDetail(articleId)
        form.setFieldsValue({ title, content, channel_id });
        setType(cover.type);
        setFileList(cover.images.map((item) => ({ url: item })));
      } else {
        setType(1);
        setFileList([]);
        form.resetFields();
      }
    }
    setFormData()
  }, [])
  // 保存草稿
  const saveDarft = async () => {
    try {
      const values = await form.validateFields()
      onFinish(values, true)
    } catch (e) { throw new Error(e) }
  }
  return (
    <div className={styles.root}>
      <Card
        title={
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{articleId ? '修改文章' : '发布文章'}</Breadcrumb.Item>
          </Breadcrumb>
        }
      >
        <Form form={form} onFinish={onFinish} labelCol={{ span: 4 }}>
          <Form.Item
            label="文章标题："
            name="title"
            rules={[{ required: true, message: "请输入文章标题" }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="所属频道："
            name="channel_id"
            rules={[{ required: true, message: "请选择所属频道" }]}
          >
            <Channel width={400} />
          </Form.Item>
          <Form.Item label="文章封面：">
            <Form.Item style={{ marginBottom: 0 }}>
              <Radio.Group value={type} onChange={onTypeChange}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {/* 这个位置放Upload组件 */}
            {type > 0 ? (
              <div style={{ marginTop: 16 }}>
                <Upload
                  name="image"
                  listType="picture-card"
                  action="http://geek.itheima.net/v1_0/upload"
                  fileList={fileList}
                  onPreview={onPreview}
                  onChange={onUploadChange}
                >
                  {fileList.length < type ? (
                    <div>
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  ) : null}
                </Upload>
              </div>
            ) : null}
          </Form.Item>
          <Form.Item
            wrapperCol={{ span: 16 }}
            label="文章内容："
            name="content"
            initialValue=""
            rules={[{ required: true, message: "请输入文章内容" }]}
          >
            <ReactQuill placeholder="请输入文章内容" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button type="primary" htmlType="submit">{articleId ? '修改文章' : '发布文章'}</Button>
              <Button onClick={saveDarft}>存入草稿</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Publish