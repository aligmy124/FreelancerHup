import { RegisterDto } from "@/app/services/types/user";

export const registerServices = async (
  data: RegisterDto,
  role: string
) => {
  const res = await fetch(
    "http://proafree.runasp.net/api/User/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        role,
        phoneNumber: "555",
      }),
    }
  );

  const result = await res.json();

  if (!res.ok) throw new Error(result.message);

  return result;
};