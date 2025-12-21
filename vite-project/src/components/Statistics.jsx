import css from './Statistics.module.css'
export default function Statistics({ title, stats }) {
    return (
        <div className={css.divContainer}>
            {title == true ? (<p> {title}</p>) : true}
            <ul className={css.ulList}>
                {
                    stats.map((item) => {
                        return <li className={css.liItem} id={item.id} key={item.id} >
                            <p className={css.color}>{item.label}</p>
                            <p className={css.color}>{item.percentage}</p>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}