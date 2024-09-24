import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { moderniz } from "@/config/fonts";
import Link from "next/link";
export default function login() {
  return (
    <div className="xl:mr-[900px]">
      <div className="flex justify-center xl:w-[400px]">
        <h1
          className={`${moderniz.className} md:text-3xl mb-16 bg-clip-text text-transparent bg-gradient-to-br from-primary to-[#8b8b8b]`}
        >
          Login to Chatie
        </h1>
      </div>
      <div className="flex justify-center">
        <Input type="email" label="Email" isRequired className="w-[300px]" />
      </div>
      <div className="flex justify-center">
        <Input
          type="password"
          label="Password"
          isRequired
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
