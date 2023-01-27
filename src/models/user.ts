// External dependencies
import { ObjectId } from "mongodb";


// Class Implementation
export default class User {
    constructor(public ChatId: string, public Paid: number,public coursesLeft: number, public id?: ObjectId) {}
}