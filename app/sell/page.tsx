"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectCategory } from "../components/SelectCategory";
import { Textarea } from "@/components/ui/textarea";
import { TipTapEditor } from "../components/Editor";
import { UploadDropzone } from "../lib/uploadthing";
import { Button } from "@/components/ui/button";

export default function SellRoute() {
  const handleInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <Card>
        <form>
          <CardHeader>
            <CardTitle>Sell your product with ease</CardTitle>
            <CardDescription>
              Please describe your product in detail so that it can be sold.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2">
              <Label>Name</Label>
              <Input type="text" placeholder="Name of your product" />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Category</Label>
              <SelectCategory />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Price</Label>
              <Input placeholder="$9" type="number" onInput={handleInput} />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Summary</Label>
              <Textarea placeholder="Please give a short description of your product..." />
            </div>

            <div className="flex flex-col gap-y-2">
              <Label>Description</Label>
              <TipTapEditor />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Product Images</Label>
              <UploadDropzone endpoint="imageUploader" />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Product File</Label>
              <UploadDropzone endpoint="productFileUpload" />
            </div>
          </CardContent>
          <CardFooter className="mt-5">
            <Button>Submit</Button>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}
