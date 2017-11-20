export class Message {
    content: string;
    title: string;
    type: string = MESSAGE_TYPE.NORMAL;
    isCloseable: boolean = false;
}

export const MESSAGE_TYPE = {
    "SUCCESS": "success",
    "ERROR": "error",
    "INFO": "info",
    "WARNING": "warning",
    "NORMAL": ""
}