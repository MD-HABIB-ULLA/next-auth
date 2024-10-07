"use server";

import { loginSchemas, registerSchemas } from "@/schemas";
import * as z  from "zod";

export const login = async(value: z.infer<typeof loginSchemas>) => {
    console.log(value)
    const validatedFields = loginSchemas.safeParse(value)
    if(!validatedFields.success){
        return{error : "Invalid fields!"}
    }
    return{success : "Email sent!"}

};
export const register = async(value: z.infer<typeof registerSchemas>) => {
    console.log(value)
    const validatedFields = registerSchemas.safeParse(value)
    if(!validatedFields.success){
        return{error : "Invalid fields!"}
    }
    return{success : "Email sent!"}

};
