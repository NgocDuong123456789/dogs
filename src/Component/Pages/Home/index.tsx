import classNames from 'classnames/bind'
//@ts-ignore
import style from  './Home.module.scss'
const cx= classNames.bind(style)
export const Home = () => {
  return (
    <div className={cx('swapper')}>
      <h2 className={cx('swapper__title')}>🥰 🥰 WELCOME    TO    MY  PET  SHOP  🥰 🥰 </h2>
    </div>
  )
}
