import { Col, Row } from 'antd'

export default function BlogHeadline() {
  return (
    <Row
      align="middle"
      style={{
        height: 400,
        textAlign: 'center',
      }}>
      <Col span={24}>
        <h1
          style={{
            fontSize: 70,
            fontWeight: 'bold',
          }}>
          JO&apos;s Blog
        </h1>
        <p
          style={{
            fontSize: 24,
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book
        </p>
      </Col>
    </Row>
  )
}
