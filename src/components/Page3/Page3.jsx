import st from './Page3.module.scss'
import classNames from "classnames";

export const Page3 = () => {
    return (
        <>
            <div className={st.wrapper}>
                <div className={classNames(st.item, st.item__1)}>1</div>
                <div className={classNames(st.item, st.item__2)}>2</div>
                <div className={classNames(st.item, st.item__3)}>3</div>
                <div className={classNames(st.item, st.item__4)}>4</div>
                <div className={classNames(st.item, st.item__5)}>5</div>
                <div className={classNames(st.item, st.item__6)}>6</div>
                <div className={classNames(st.item, st.item__7)}>7</div>
                <div className={classNames(st.item, st.item__8)}>8</div>
                <div className={classNames(st.item, st.item__9)}>9</div>
            </div>
        </>
    )
}