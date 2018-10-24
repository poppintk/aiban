import Layout from '../components/layout';
import { Form, Input, Select, Button, AutoComplete } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

const { TextArea } = Input;

export default () => {
  return (
    <Layout>
      <div
        className="container-fluid"
        style={{
          // backgroundImage:
          //       'url(https://aiban.oss-cn-beijing.aliyuncs.com/sky2.jpg)',
          //   backgroundSize: 'cover',
          //   backgroundRepeat: 'no-repeat',
          //   backgroundPosition: 'center center',
          //   boxShadow:'2px 2px 30px #c0cee5',
          marginTop: '-4px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            minHeight: '85vh',
          }}
          className="container"
        >
          <div style={{ width: '100%' }}>
            <img
              style={{ height: '200px', width: '100%' }}
              src="https://aiban.oss-cn-beijing.aliyuncs.com/header.png"
            />
            <h5
              style={{
                textAlign: 'center',
                paddingTop: '2px',
                borderRadius: '25px',
                margin: '0 auto',
                marginTop: '10px',
                fontWeight: 'bold',
                color: 'green',
                textShadow: '4px 4px 15px #c0f9b8',
              }}
            >
              联系我们
            </h5>
            <br />
              <WrappedRegistrationForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};




class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      console.log(window.location)
      if (!err) {
        // test
        let data = JSON.stringify(values);
        fetch('http://47.100.213.130/api/contact', {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          mode: 'cors',
          body: data
        }).then((res) => {
          res.status === 200 ? this.setState({ submitted: true }) : ''
        })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="邮箱地址"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '您输入的不是个有效的邮箱地址',
            }, {
              required: true, message: '请输入您的邮箱地址!',
            }],
          })(
            <Input placeholder="请输入您的邮箱地址" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="电话号码"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入您的电话号码!' }],
          })(
            <Input placeholder="请输入您的电话号码"/>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="主题">
          {getFieldDecorator('subject', {
              rules: [{ required: true, message: '请输入主题' }],
            })(
              <Input placeholder="请输入主题" />
            )}
        </FormItem>
        <FormItem {...formItemLayout} label="内容">
          {getFieldDecorator('body', {
              rules: [{ required: true, message: '内容不能为空' }],
            })(
              <TextArea placeholder="内容不能为空" autosize={{minRows:5}}/>
            )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">发送</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);
