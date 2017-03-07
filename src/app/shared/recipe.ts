import { Ingradients } from "app/shared";

export class Recipe {
    constructor(public name:string,public description:string,
    public imagePath:string, public ingradients:Ingradients[]){}
}
