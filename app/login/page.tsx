import Image from "next/image";
import { redirect } from "next/navigation";
import { LogInIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const LoginPage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid h-full grid-cols-2">
      <div className="fixed m-auto h-full items-center justify-center lg:relative">
        <div className="m-auto flex h-full max-w-[550px] flex-col justify-center p-8">
          <Image
            src="/financeAI.svg"
            width={173}
            height={39}
            alt="Finance AI"
            className="mb-8"
          />
          <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
          <p className="mb-8 text-muted-foreground">
            A Finance AI é uma plataforma de gestão financeira que utiliza IA
            para monitorar suas movimentações, e oferecer insights
            personalizados, facilitando o controle do seu orçamento.
          </p>
          <SignInButton>
            <Button variant="outline">
              <LogInIcon />
              Fazer login ou criar conta
            </Button>
          </SignInButton>
        </div>
      </div>
      <div className="relative hidden h-full w-full lg:flex">
        <Image src="/login.png" alt="login" fill className="object-cover" />
      </div>
    </div>
  );
};

export default LoginPage;
