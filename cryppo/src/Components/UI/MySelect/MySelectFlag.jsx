import React from 'react'
import { Select } from 'antd';
import style from './MySelect.module.scss'
import MySelectTitle from './MySelectTitle';

const { Option } = Select;

export default function MySelect(props) {
    
    let lang = props.langOption.map(e =>
        <Option className={`${style.option}`} value={`${e.id}`} key={e.id} id={e.id}>
            <div className={style.item}>
                <img src={e.flag} alt={e.flag} />
                <div className={style.name}>{e.name}</div>
            </div>
        </Option>
    )
    function handleChange(value) {
    }
    return (
        <div className={style.container}>
            <MySelectTitle title={props.title} />
            <Select dropdownClassName={style.dropdown} className={`${style.select}`} defaultValue="" onChange={handleChange}>
                {lang}
            </Select>
        </div>
    )
}
