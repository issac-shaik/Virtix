"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { z } from "zod";

export type State = {
  status: "error" | "success" | undefined;
  errors?: {
    [key: string]: string[];
  };
  message?: string | null;
};

const productSchema = z.object({
  name: z.string().min(3, { message: "Min. of 3 characters" }),
  category: z.string().min(1, { message: "Category is required" }),
  price: z.number().min(1, { message: "Price should be greater than 1." }),
  summary: z
    .string()
    .min(10, { message: "Please elaborate more about your product." }),
  description: z.string().min(1, { message: "Description is required" }),
  images: z.array(z.string(), { message: "Images are required" }),
  productFile: z
    .string()
    .min(1, { message: "Please upload a zip of your product" }),
});

export async function SellProduct(prevState: any, formData: FormData) {
  "use server";
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("Something went wrong.");
  }

  const validateFields = productSchema.safeParse({
    name: formData.get("name"),
    category: formData.get("category"),
    price: formData.get("price"),
    summary: formData.get("summary"),
    description: formData.get("description"),
    images: formData.get("images"),
    productFile: formData.get("productFile"),
  });

  if (!validateFields.success) {
    const state: State = {
      status: "error",
      errors: validateFields.error.flatten().fieldErrors,
      message: "Oops, I think there is a mistake with your inputs!",
    };

    return state;
  }
}
