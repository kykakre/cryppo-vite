// import React from 'react'
// import style from './AboutIndex.module.scss'
// import AboutIndexBarItem from './AboutIndexBarItem'
// export default function AboutIndexBar(props) {
//     let barItem = props.bar.map(e =>
//         <AboutIndexBarItem
//             id={e.id}
//             value={e.value}
//             key={e.id}
//         />
//     )
//     return (
//         <div className={style.bar}>
//             {barItem}
//         </div>
//     )
// }
import React from 'react'
import style from './AboutIndex.module.scss'
import bar from '../../../Images/bar.svg'
export default function AboutIndexBar(props) {
   
    return (
        <img src={bar} className={style.barImg}>
        </img>
    )
}
