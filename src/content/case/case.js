import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

export const Case = () => {
  return (
    <div>
      <h5
        style={{
          textAlign: 'center',
          border: '1px groove',
          width: '200px',
          height: '30px',
          paddingTop: '2px',
          borderRadius: '25px',
          margin: '0 auto',
          marginTop: '10px',
          boxShadow: '1px 1px 1px #9aa1ad',
          color: 'red',
          fontWeight: 'bold'
        }}
      >
        爱邦正明——合作交流
      </h5>
      <br />
      <h5 style={{ textAlign: 'center' }}>合作交流——精益求精</h5>
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <Card
            hoverable
            style={{ width: 240, marginRight: '10px', marginTop: '10px' }}
            cover={
              <img
                alt="example"
                src="https://aiban.oss-cn-beijing.aliyuncs.com/case_1.jpg"
              />
            }
          >
            <Meta title="河北午安" description="2016.04.04" />
          </Card>
          <Card
            hoverable
            style={{ width: 240, marginRight: '10px', marginTop: '10px' }}
            cover={
              <img
                alt="example"
                src="https://aiban.oss-cn-beijing.aliyuncs.com/case_10.JPG"
              />
            }
          >
            <Meta title="河北午安" description="2016.04.04" />
          </Card>
          <Card
            hoverable
            style={{ width: 240, marginTop: '10px' }}
            cover={
              <img
                alt="example"
                src="https://aiban.oss-cn-beijing.aliyuncs.com/case_11.JPG"
              />
            }
          >
            <Meta title="河北午安" description="2016.04.04" />
          </Card>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <Card
            hoverable
            style={{ width: 240, marginRight: '10px', marginTop: '10px' }}
            cover={
              <img
                alt="example"
                src="https://aiban.oss-cn-beijing.aliyuncs.com/case_12.JPG"
              />
            }
          >
            <Meta title="河北午安" description="2016.04.04" />
          </Card>
          <Card
            hoverable
            style={{ width: 240, marginRight: '10px', marginTop: '10px' }}
            cover={
              <img
                alt="example"
                src="https://aiban.oss-cn-beijing.aliyuncs.com/case_13.JPG"
              />
            }
          >
            <Meta title="河北午安" description="2016.04.04" />
          </Card>
          <Card
            hoverable
            style={{ width: 240, marginTop: '10px' }}
            cover={
              <img
                alt="example"
                src="https://aiban.oss-cn-beijing.aliyuncs.com/case_14.JPG"
              />
            }
          >
            <Meta title="河北午安" description="2016.04.04" />
          </Card>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <Card
            hoverable
            style={{ width: 240, marginRight: '10px', marginTop: '10px' }}
            cover={
              <img
                alt="example"
                src="https://aiban.oss-cn-beijing.aliyuncs.com/case_15.JPG"
              />
            }
          >
            <Meta title="河北午安" description="2016.04.04" />
          </Card>
          <Card
            hoverable
            style={{ width: 240, marginRight: '10px', marginTop: '10px' }}
            cover={
              <img
                alt="example"
                src="https://aiban.oss-cn-beijing.aliyuncs.com/case_16.jpg"
              />
            }
          >
            <Meta title="河北午安" description="2016.04.04" />
          </Card>
          <Card
            hoverable
            style={{ width: 240, marginTop: '10px' }}
            cover={
              <img
                alt="example"
                src="https://aiban.oss-cn-beijing.aliyuncs.com/case_17.jpg"
              />
            }
          >
            <Meta title="河北午安" description="2016.04.04" />
          </Card>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <Card
            hoverable
            style={{ width: 240, marginRight: '10px', marginTop: '10px' }}
            cover={
              <img
                alt="example"
                src="https://aiban.oss-cn-beijing.aliyuncs.com/case_18.jpg"
              />
            }
          >
            <Meta title="河北午安" description="2016.04.04" />
          </Card>
          <Card
            hoverable
            style={{ width: 240, marginRight: '10px', marginTop: '10px' }}
            cover={
              <img
                alt="example"
                src="https://aiban.oss-cn-beijing.aliyuncs.com/case_19.JPG"
              />
            }
          >
            <Meta title="河北午安" description="2016.04.04" />
          </Card>
          <Card
            hoverable
            style={{ width: 240, marginTop: '10px' }}
            cover={
              <img
                alt="example"
                src="https://aiban.oss-cn-beijing.aliyuncs.com/case_2.jpg"
              />
            }
          >
            <Meta title="河北午安" description="2016.04.04" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Case;
