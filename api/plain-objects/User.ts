
class User {
    name: string;
    job: string;

    constructor(name: string, job: string) {
        this.name = name;
        this.job = job;
    }

    getName():string{
        return this.name;
    }

    getJob():string{
       return this.job; 
    }

    setName(name:string):void{
        this.name = name
    }

    setJob(job:string):void{
        this.job = job
    }

    serializeUser(){
        return JSON.stringify(this);
    }
}

export default User;