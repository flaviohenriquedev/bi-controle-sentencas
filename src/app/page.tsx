'use client'

import {PaginaDeLogin} from "@/components/pages/login/PaginaDeLogin";
import {useAuth} from "@/context/auth/AuthContext";
import {useRouter} from "next/navigation";

export default function Home() {
  const [auth] = useAuth();
  const route = useRouter()

  return (
      <>
        {auth?.usuario ? route.push("/manager") : <PaginaDeLogin/>}
      </>
  )
}
