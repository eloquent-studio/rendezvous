import RegisterForm from "@/components/auth-forms/register-form";

export default function Register({ searchParams }: { searchParams?: { next: string | undefined } }) {
  const next = searchParams?.next || ""
  return (
    <div className='h-screen w-screen'>
      <RegisterForm next={next} />
    </div>
  )
}