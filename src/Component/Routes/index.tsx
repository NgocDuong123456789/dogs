import {Home} from '../Pages/Home/index'
import {Cart} from '../Pages/Cart/index'
import {Dog} from '../Pages/Dog/index'
import {Routes} from '../Config/index'
import {InterRoute} from '../Interface'



export const PublicDog:InterRoute[]=[
    {
        path:Routes.home,
        component:Home
    },{
        path:Routes.dog,
        component:Dog
    }
    ,{
        path:Routes.cart,
        component:Cart
    } 
]