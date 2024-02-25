"use server"

import prisma from "@/lib/prisma";
import crypto from 'crypto';

export const getTwoFactorConfirmationByUserId = async (userId: number) => {
  try {
    const twoFactorConfirmation = await prisma.twoFactorConfirmation.findUnique({
      where: { userId }
    })

    return twoFactorConfirmation
  } catch (error) {
    return null
  }
}


export const getTwoFactorTokenByToken = async (token: string) => {
  try {
    const twoFactorToken = await prisma.twoFactorToken.findUnique({
      where: { token }
    })

    return twoFactorToken
  } catch (error) {
    return null
  }
}

export const getTwoFactorTokenByEmail = async (email: string) => {
  try {
    const twoFactorToken = await prisma.twoFactorToken.findFirst({
      where: { email }
    })

    return twoFactorToken
  } catch (error) {
    return null
  }
}

export const generateTwoFactorToken = async (email: string) => {
  const token = crypto.randomInt(100_000, 1_000_000).toString()
  const expires = new Date(new Date().getTime() + 5*60*1000)

  const existingToken = await getTwoFactorTokenByEmail(email)

  if (existingToken) {
    await prisma.twoFactorToken.delete({
      where: { id: existingToken.id }
    })
  }

  const twoFactorToken = await prisma.twoFactorToken.create({
    data: { email, token, expiresAt: expires }
  })

  return twoFactorToken
}