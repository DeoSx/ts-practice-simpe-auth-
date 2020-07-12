import * as React from 'react'
import { INewsItem } from '../models/news'
import { getNews } from '../api/news'
import { NewsItem } from '../components/NewsItem'

import { RouteComponentProps } from '@reach/router'

const News: React.FC<RouteComponentProps> = () => {
  const [news, setNews] = React.useState<INewsItem[]>([])

  React.useEffect(() => {
    getNews()
      .then(res => {
        setNews(res.data)
      })
      .catch(e => {
        // tslint:disable-next-line: no-console
        console.warn('Getting new problem', e)
      })
  }, [])

  return (
    <div className="news">
      {news.map(item => (
        <NewsItem data={item} key={item.id} />
      ))}
    </div>
  )
}

export { News }
