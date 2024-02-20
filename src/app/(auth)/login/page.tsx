import LoginForm from "@/components/auth-forms/login-form";

export default function Login({ searchParams }: { searchParams?: { next: string | undefined } }) {
  const next = searchParams?.next || ""
  return (
    <div className='h-screen w-screen'>
      <LoginForm next={next} />
    </div>
  )
}