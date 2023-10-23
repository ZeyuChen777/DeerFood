import { verify } from "jsonwebtoken";
import { HTTP_UNAUTHORIZED } from "../constants/http_status";

// Define a type for the decoded user payload
interface DecodedUser {
    _id?: string;
    id?: string;
    userId?: string;
    [key: string]: any; // This line allows for other properties to be on the object
}

export default (req: any, res: any, next: any) => {
    const token = req.headers.access_token as string;
    if (!token) return res.status(HTTP_UNAUTHORIZED).send();

    try {
        const decodedUser = verify(token, process.env.JWT_SECRET!)
        req.user = decodedUser;

    } catch (error) {
        res.status(HTTP_UNAUTHORIZED).send();
    }

    return next();
}