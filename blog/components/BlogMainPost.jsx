import { Card, Col, Row } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'

export default function BlogMainPost({
  slug,
  thumbnail,
  title,
  subTitle,
  author,
  createdAt,
}) {
  return (
    <Row
      align="middle"
      style={{
        height: 'auto',
      }}>
      <Col span={24}>
        <Link href={`/post/${slug}`} passHref>
          <a>
            <Card
              style={{ border: 'none' }}
              cover={
                <Image
                  alt={thumbnail.alt}
                  src={thumbnail.imageUrl}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="cover"
                  priority={false}
                />
              }>
              <h1>{title}</h1>
              <h3>{subTitle}</h3>
              <h4>
                {author.name} &#8729; {dayjs(createdAt).format('YYYY MMMM D')}
              </h4>
            </Card>
          </a>
        </Link>
      </Col>
    </Row>
  )
}
