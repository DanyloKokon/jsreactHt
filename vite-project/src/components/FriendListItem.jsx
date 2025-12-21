import css from './FriendListItem.module.css'
export default function FriendListItem ({avatar, name, isOnline, id}) {
    return (
        <li key={id}>
            <span className={isOnline ? css.colGr : css.colRed} ></span>
            {/* {isOnline == true ? <span className={css.spanIt, css.colGr}></span> : <span className={css.spanIt, css.colRed}></span> } */}
            <img src={avatar} alt="" width="48" />
            <p>{name}</p>
        </li>
    )
}