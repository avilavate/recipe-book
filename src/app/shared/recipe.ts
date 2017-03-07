import { Ingradients } from "app/shared/ingradients";

export class Recipe {
    constructor(public name:string,public description:string,
    public imagePath:string, public ingradients:Ingradients[]){}
}
