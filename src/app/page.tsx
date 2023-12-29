'use client'

import {useRouter} from 'next/navigation';
import {useAuth} from '@/context/auth/AuthContext';
import {useEffect, useState} from "react";

export default function Home() {
  const {retorno, tokenlogado, setTokenLogado} = useAuth();
  const router = useRouter();

  useEffect(() => {
    const tk = localStorage.getItem("tokenlogado")
    if (tk) {
      setTokenLogado(tk)
    }

    if (!tokenlogado) {
      router.push("/login");
    } else {
      router.push("/manager");
    }
    console.log('TOKENLOGADO DENTRO DO EFFECT', tokenlogado)
  }, [tokenlogado, router]);


  {console.log('TOKENLOGADO FORA DO EFFECT', tokenlogado)}

  return <></>
}
