import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

//Função para combinar classes
export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}
