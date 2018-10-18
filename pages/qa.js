import Layout from '../components/layout';
import { Form, Input, Button, Radio } from 'antd';
const { TextArea } = Input;
const FormItem = Form.Item;

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
              <Form layout='horizontal'>
                <FormItem
                  label="邮件"
                >
                  <Input placeholder="不能为空" />
                </FormItem>
                <FormItem
                  label="主题"
                >
                  <Input placeholder="不能为空" />
                </FormItem>
                <FormItem
                  label="内容"
                >
                  <TextArea placeholder="不能为空" />
                </FormItem>
                <FormItem >
                  <Button type="primary">发送</Button>
                </FormItem>
              </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
