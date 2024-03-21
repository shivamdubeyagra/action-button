
import MyButton from "./MyButton";

export default {
    title:'Action-Button/MyButton',
    component: MyButton,
    parameters:{
        layout:'centered',
    },
    tags:['autodocs'],
}

export const textOnly = {
    args:{
        displayType:'textOnly',
        text:'Action',
    }
}

export const iconWithText = {
    args:{
        displayType:'iconWithText',
        text:'Action',
    }
}
export const iconOnly = {
    args:{
        displayType:'iconOnly',
    }
}

// All Sizes

export const DefaultSize = {
    args:{
        size:'Default'
    }
}
export const SmallSize = {
    args:{
        size:'Small'
    }
}
export const XSmallSize = {
    args:{
        size:'X-Small'
    }
}

// All Status

export const Default = {
    args:{
        status:'DefaultStatus'
    }
}
export const Hover = {
    args:{
        status:'Hover'
    }
}
export const Disabled = {
    args:{
        status:'Disabled'
    }
}

// All Types
export const DefaultType = {
    args:{
        type:'DefaultType'
    }
}
export const NeutralType = {
    args:{
        type:'Neutral'
    }
}
export const ReverseType = {
    args:{
        type:'Reverse'
    }
}
