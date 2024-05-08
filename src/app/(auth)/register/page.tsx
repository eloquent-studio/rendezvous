import RegisterForm from "@/components/auth-forms/register-form";

export default function Register({ searchParams }: { searchParams?: { next: string | undefined } }) {
  const next = searchParams?.next || ""
  return (
    <div className='w-full h-full'>
      <RegisterForm next={next} />
    </div>
  )
}