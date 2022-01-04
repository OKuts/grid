import st from './Page2.module.scss'
import classNames from "classnames";
export const Page2 = () => {
    return (
        <div className={st.wrapper}>
            <div className={classNames(st.item, st.header)}>Header</div>
            <div className={classNames(st.item, st.nav)}>Nav</div>
            <div className={classNames(st.item, st.main)}>Main</div>
            <div className={classNames(st.item, st.footer)}>Footer</div>
        </div>
    )
}