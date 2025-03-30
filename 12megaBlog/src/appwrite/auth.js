import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    Client = new Client();
    account;

    constructor() {
        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        
        this.account = new Account(this.Client)
    
    }

    async createAccount({email, password, name}) {
        try {
           const userAccount = await this.account.create(ID.unique(), email, password, name)
           if(userAccount) {
            return this.login({email, password});
            //after creation of userAccount login page can be automatic fetched 
           }
           else{
            return userAccount;
           }
        } catch (error) {
            throw error;
            
        }
    }

    async login ({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
            
        }
    }

    async logout() {
        try {
           await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);

            
        }
    }

}

const authservice = new AuthService();//create object
//we used constructror ,it call to the function during creation of object

export default authservice