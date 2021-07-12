import { withLayout } from '../MainHoc'
import { useFormatMessage } from '../../i18n'

const About = () => {
  const formatMessage = useFormatMessage()

  return (
    <div className="container">
      <h1>{formatMessage('app.about')}</h1>
    </div>
  )
}

export default withLayout(About)
