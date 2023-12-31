import { createWebHistory,createRouter } from "vue-router";
import Login from "./components/Login.vue"
import Dropdown from "./components/Dropdown.vue"
import Location from "./components/Location.vue"
import LocationInfo from "./components/LocationInfo.vue"
import Syohin from "./components/Syohin.vue"
import SyohinInfo from "./components/SyohinInfo.vue"
import LocationKanryo from "./components/LocationKanryo.vue"
import Menu from "./components/Menu.vue";
import Nyuuko from "./components/Nyuuko.vue";
import Message from "./components/Message.vue";
import SyohinKanryo from "./components/SyohinKanryo.vue";
import TourokuKanryou from "./components/TourokuKanryou.vue";
import Syuka from "./components/Syuka.vue";
import SyukaKanryo from "./components/SyukaKanryo.vue";
import SyukaInfo from "./components/SyukaInfo.vue";
import Picking from "./components/Picking.vue";
import PickingList from "./components/PickingList.vue";
import Pickingkanryou from "./components/Pickingkanryou.vue";
import Zaiko from "./components/Zaiko.vue";
import MoveLocation from "./components/MoveLocation.vue";
import MoveSingleLocationBefore from "./components/MoveSingleLocationBefore.vue";
import MoveSingleLocationAfter from "./components/MoveSingleLocationAfter.vue";
import MoveSingleLocationKanryou from "./components/MoveSingleLocationKanryo.vue";

import IkatsuLocationIdou from "./components/IkatsuLocationIdou.vue";
import IkatsuLocationIdouKanryo from "./components/IkatsuLocationIdouKanryo.vue";
//login routes
const routes =[
    {
        path: "/",
        name:"login",
        component : Login
    },
    {
        path: "/dropdown",
        name:"dropdown",
        component : Dropdown,
    },
    {
        path: "/location",
        name:"location",
        component : Location
    },
    {
        path: "/locationInfo",
        name:"locationInfo",
        component : LocationInfo
    },
    ,
    {
        path: "/syohin",
        name:"syohin",
        component : Syohin
    },
    ,
    {
        path: "/syohinInfo",
        name:"syohinInfo",
        component : SyohinInfo
    },
    ,
    {
        path: "/locationKanryo",
        name:"locationKanryo",
        component : LocationKanryo
    },
    ,
    {
        path: "/menu",
        name:"menu",
        component : Menu
    },
    {
        path: "/nyuuko",
        name:"nyuuko",
        component : Nyuuko
    },
    {
        path: "/message",
        name:"message",
        component : Message
    },
    {
        path: "/syohinKanryo",
        name:"syohinKanryo",
        component : SyohinKanryo
    },{
        path: "/tourokuKanryou",
        name:"tourokuKanryou",
        component : TourokuKanryou
    },
    {
        path: "/syuka",
        name:"syuka",
        component : Syuka
    },
    {
        path: "/syukaKanryo",
        name:"syukaKanryo",
        component : SyukaKanryo
    },
    {
        path: "/syukaInfo",
        name:"syukaInfo",
        component : SyukaInfo
    },
    {
        path: "/picking",
        name:"picking",
        component : Picking
    },
    {
        path: "/pickinglist",
        name:"pickinglist",
        component : PickingList
    },
    {
        path: "/pickingkanryou",
        name:"pickingkanryou",
        component : Pickingkanryou
    },
    {
        path: "/zaiko",
        name:"zaiko",
        component : Zaiko
    },
    {
        path: "/moveLocation",
        name:"moveLocation",
        component : MoveLocation
    },
    {
        path: "/moveSingleLocationBefore",
        name:"moveSingleLocationBefore",
        component : MoveSingleLocationBefore
    },
    {
        path: "/moveSingleLocationAfter",
        name:"moveSingleLocationAfter",
        component : MoveSingleLocationAfter
    },
    {
        path: "/moveSingleLocationKanryou",
        name:"moveSingleLocationKanryou",
        component : MoveSingleLocationKanryou
    },
       { path: "/ikatsuLocationIdou",
        name:"ikatsuLocationIdou",
        component : IkatsuLocationIdou
    },
    
    {
        path: "/ikatsuLocationIdouKanryo",
        name:"ikatsuLocationIdouKanryo",
        component : IkatsuLocationIdouKanryo
    },
    
]


const router =createRouter({
    history: createWebHistory(),
    routes
})


export default router
