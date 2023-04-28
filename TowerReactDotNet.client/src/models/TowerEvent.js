export class TowerEvent{
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.description = data.description
        this.coverImg = data.coverImg
        this.location = data.location
        this.capacity = data.capacity
        this.date = new Date(data.startDate).toLocaleDateString()
        this.type = data.type
        this.isCanceled = data.isCanceled
        this.creatorId = data.creatorId
        this.creator = data.creator
    }
}