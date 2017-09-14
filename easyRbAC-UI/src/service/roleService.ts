import {Config} from "./baseConfig.ts"
import {PagingList} from './commons.ts'
import axios from 'axios'

interface Role{
    id:string,
    roleName:string,
    descript:string,
    createTime:Date
}

export let roleService = {
    async searchRoles(roleName:string,pageIndex:number,pageSize:number):Promise<PagingList<Role>>{
        let path = `${Config.BaseUrl}/Roles?roleName=${roleName}&pageIndex=${pageIndex}&pageSize=${pageSize}`;
        let httpResult = await axios.get(path);
        return httpResult.data as PagingList<Role>
    },
    async createRole(role:Role){
        let path =`${Config.BaseUrl}/Role`
        let httpResult = await axios.post(path,role)
    },
    async deleteRole(roleId:string){
        let path = `${Config.BaseUrl}/Role/${roleId}`
        await axios.delete(path);
    },
    async editRole(roleId:string,role:Role){
        let path = `${Config.BaseUrl}/Role/${roleId}`
        await axios.put(path,role);
    },
    async getRole(roleId:string):Promise<Role>{
        let path = `${Config.BaseUrl}/Role/${roleId}`
        let httpResult = await axios.get(path);
        return httpResult.data
    }
}