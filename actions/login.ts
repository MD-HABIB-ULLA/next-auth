"use server";

import { loginSchemas } from "@/schemas";
import * as z  from "zod";

export const login = async(value: z.infer<typeof loginSchemas>) => {
    console.log(value)
    const validatedFields = loginSchemas.safeParse(value)
    if(!validatedFields.success){
        return{error : "Invalid fields!"}
    }
    return{success : "Email sent!"}

};
