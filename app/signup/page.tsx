import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { moderniz } from "@/config/fonts";
import Link from "next/link";
export default function signup() {
  return (
    <div className="xl:mr-[900px]">
      <div className="flex justify-center xl:w-[400px]">
        <h1
          className={`${moderniz.className} md:text-3xl mb-16 bg-clip-text text-transparent bg-gradient-to-br from-primary to-[#8b8b8b]`}
        >
          Signup to Chatie
        </h1>
      </div>
      <div className="flex justify-center">
        <Input type="text" label="Username" isRequired className="w-[300px]" />
      </div>
      <div className="flex justify-center">
        <Input type="email" label="Email" isRequired className="w-[300px] mt-6" />
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
          Already have an account ?{" "}
          <Link
            className={`${moderniz.className} text-[10px] text-primary`}
            href={"/login"}
          >
            Login
          </Link>
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <Button className="w-[300px]" color="primary">
          Signup
        </Button>
      </div>
    </div>
  );
}
