import { currentUser } from "@clerk/nextjs/server"
import { db } from "./prisma"

export const checkUser = async () => {
    const user = await currentUser()
    if (!user) {
        return null
    }

    try {
        // Check if user exists (with await)
        const loggedInUser = await db.user.findUnique({
            where: {
                clerkUserId: user.id,
            },
        })

        if (loggedInUser) {
            return loggedInUser
        }

        // Safely handle potential undefined values
        const name = [user.firstName, user.lastName].filter(Boolean).join(' ') || undefined
        const email = user.emailAddresses[0]?.emailAddress
        const imageUrl = user.imageUrl || undefined

        if (!email) {
            throw new Error("User email not found")
        }

        // Create new user
        const newUser = await db.user.create({
            data: {
                clerkUserId: user.id,
                name: name,
                imageUrl: imageUrl,
                email: email,
            }
        })

        return newUser
    } catch (error) {
        console.error("Error in checkUser:", error instanceof Error ? error.message : "Unknown error")
        throw error // Re-throw the error to handle it in the calling function
    }
}