import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Resend } from 'resend';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const RESEND_API_KEY = process.env.RESEND_API_KEY

export const resend = new Resend(RESEND_API_KEY);