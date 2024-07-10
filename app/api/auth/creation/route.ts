import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("API Route Hit"); // Log to confirm the route is hit

    const { getUser } = getKindeServerSession();
    const user = await getUser();

    console.log("User Info:", user); // Log the user info

    if (!user || !user.id) {
      console.error("No user information found");
      throw new Error("Something went wrong...");
    }

    let dbUser = await prisma.user.findUnique({
      where: {
        id: Number(user.id),
      },
    });

    if (!dbUser) {
      dbUser = await prisma.user.create({
        data: {
          id: Number(user.id),
          firstName: user.given_name ?? "",
          lastName: user.family_name ?? "",
          email: user.email ?? "",
          profileImage:
            user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
        },
      });
    }

    console.log("User in DB:", dbUser); // Log the user info from DB

    return NextResponse.redirect("http://localhost:3000");
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
