interface IMessage {
    message: string;
    isSuccess: boolean;
}

export class ResponseMessage implements IMessage {
    message: string;
    isSuccess: boolean;
}