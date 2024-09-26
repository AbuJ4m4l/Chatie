import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { moderniz } from "@/config/fonts";
import Link from "next/link";
export default function login() {
  return (
    <div className="xl:mr-[900px]">
      <div className="flex justify-center xl:w-[400px]">
        <h1 className={`${moderniz.className} md:text-3xl mb-16`}>
          Login to Chatie
        </h1>
      </div>
      <div className="flex justify-center">
        <Input
          type="email"
          placeholder="Email"
          required
          className="w-[300px]"
        />
      </div>
      <div className="flex justify-center">
        <Input
          type="password"
          placeholder="Password"
          required
          className="mt-6 w-[300px]"
        />
      </div>

      <div className="flex justify-center mt-4">
        <p className={``}>
          Dont have an account ?{" "}
          <Link
            className={`${moderniz.className} text-[10px] text-primary`}
            href={"/signup"}
          >
            Create New
          </Link>
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <Button className="w-[300px]" color="primary">
          Login
        </Button>
      </div>
    </div>
  );
}
