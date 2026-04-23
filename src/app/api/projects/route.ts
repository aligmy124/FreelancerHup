import { cookies } from "next/headers"

export async function POST(req: Request) {
  const body = await req.json()

  const cookieStore = cookies()
  const token = cookieStore.get("token")?.value

  const res = await fetch("http://proafree.runasp.net/api/Client/post-project", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    console.log("************Failed to create project***************");
    console.log(res)
    return new Response("Error", { status: 500 })
  }
  console.log("************Project created successfully***************")
  const data = await res.json()
  return Response.json(data)
}