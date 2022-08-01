import tg from '../Images/icon/telegram.svg';
import vk from '../Images/icon/vk.svg';
import twitter from '../Images/icon/twitter.svg';
import inst from '../Images/icon/inst.svg';
import fb from '../Images/icon/fb.svg';
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    mail:[
        {
            id:1,
            text:'support@cryppo.com'
        },
        {
            id:2,
            text:'info@cryppo.com'
        }
    ],
    social:[
        {
            id:1,
            icon:tg,
            href:'#'
        },
        {
            id:2,
            icon:vk,
            href:'#'
        },
        {
            id:3,
            icon:twitter,
            href:'#'
        },
        {
            id:4,
            icon:inst,
            href:'#'
        },
        {
            id:5,
            icon:fb,
            href:'#'
        },
    ],
    phone:[
        {
            id:1,
            phone:'8 800 888-88-88',
        }
    ]
}
export const footerSlice = createSlice({
    name: "footer",
    initialState,
    reducers: {},
});

export default footerSlice.reducer;