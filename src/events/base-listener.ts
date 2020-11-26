import {Message, Stan} from 'node-nats-streaming'
import {Subjects} from './subjects'

interface Event {
    subject: Subjects;
    data: any;
}

export abstract class Listener<T extends Event> {
    protected client:Stan
    
    abstract subject: T['subject']
    abstract onMessage(date:T['data'], msg:Message): void

    constructor(clent:Stan) {
        this.client = clent
    }

    listen(){
        const subscription = this.client.subscribe(this.subject)
        subscription.on('message',(msg:Message) => {
            console.log(`Received event #${msg.getSequence()} ${msg.getSubject()}`)
            const parseData = this.parseMessage(msg)
            this.onMessage(parseData, msg)
        })
    }

    parseMessage(msg:Message){
        const data = msg.getData()
        return typeof data === 'string'
            ? JSON.parse(data)
            : JSON.parse(data.toString('utf8'))
    }
}