import st from './Page1.module.scss'
import classNames from "classnames";

export const Page1 = () => {
    return (
        <>
            <div className={st.wrapper}>
                <div className={classNames(st.item, st.item__1)}></div>
                <div className={classNames(st.item, st.item__2)}></div>
                <div className={classNames(st.item, st.item__3)}></div>
                <div className={classNames(st.item, st.item__4)}></div>
            </div>
            <div className={st.wrapper}>
                <div className={classNames(st.item, st.item__5)}></div>
                <div className={classNames(st.item, st.item__6)}></div>
                <div className={classNames(st.item, st.item__7)}></div>
            </div>
        </>
    )
}