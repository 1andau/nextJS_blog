import React from 'react'
import { API_URL } from '.'

export interface Post  {
title: string, 
id: number, 
postAvatar: string, 
name: string, 
likeBtn: string, 
reblogs: string, 
tags: string, 
Postimage: string
}

export async function GetAllPost(): Promise<Post[]> {
const response = await fetch(`${API_URL}`)
console.log(response);

return await  response.json()
}

export async function GetOnePOst(id: number): Promise<Post[]> {
    const response = await fetch(`${API_URL}${id}`)
    return await  response.json()
    }