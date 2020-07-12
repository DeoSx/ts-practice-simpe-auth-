import * as React from 'react'
import { INewsItem } from '../models/news'

interface INewsItemData {
  data: INewsItem;
}

const NewsItem: React.FC<INewsItemData> = props => {
  const { title, text, timestamp, link } = props.data
  return (
    <div className="news-item">
      <br/>
      <small>{timestamp.toLocaleDateString()}</small>
      <h2>{title}</h2>
      <p>{text}</p>
      <a href={link}>Подробнее</a>
    </div>
  )
}

export { NewsItem }
