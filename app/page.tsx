import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import LoginButton from "@/components/auth/login-button";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-tr text-center from-sky-400 to-blue-800">
      <div className="space-y-4">
        <h1 className={cn("text-5xl font-bold text-white", font.className)}>
          🔐Auth
        </h1>
        <p className="text-white  text-xl font-bold capitalize">
          A simple authentication service{" "}
        </p>
        <LoginButton  >
          {" "}
          <Button size={"lg"} variant={"secondary"} className="text-xl mt-4">
            Log in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
