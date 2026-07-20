import React,{Component} from 'react'

export default class Calendar extends Component{
    getDate(){
        const dayNames = ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์']
        const monthNames = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม']
        const date = new Date()
        const weekday=dayNames[date.getDay()]
        const day = date.getDate()
        const month = monthNames[date.getMonth()]
        const year = date.getFullYear() + 543
        return `วัน${weekday}ที่ ${day} ${month} ${year}`
    }
    
    render(){
        return <div>{this.getDate()}</div>
            
    }
}