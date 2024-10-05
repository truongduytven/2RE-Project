import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { loginSchema } from '@/lib/Schemas/LoginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Logo from '@/assets/Logo.png'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import googleIcon from '@/assets/google.svg'

export default function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const handleGoogleLogin = () => {
    console.log('login with google')
  }

  const onSumit = (data: z.infer<typeof loginSchema>) => {
    console.log(data)
  }
  return (
    <div className='w-full h-full flex justify-center items-center py-4 lg:p-8'>
      <div className='w-2/3 mx-auto flex flex-col justify-center space-y-6'>
        <div className='flex flex-col items-center'>
          <div className='volkov-font font-medium text-2xl flex items-center'>
            Sign In to <img className='w-10 h-10' src={Logo} alt='logo app' /> with
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSumit)} className='space-y-6'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className='w-full grid items-center gap-1.5'>
                      <Label htmlFor='email'>
                        Email<span className='text-red-500'>*</span>
                      </Label>
                      <Input {...field} id='email' placeholder='abc@gmail.com' />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className='w-full grid items-center gap-1.5'>
                      <Label htmlFor='password'>
                        Password<span className='text-red-500'>*</span>
                      </Label>
                      <Input {...field} id='password' type='password' placeholder='input password' />
                      <div className='w-full flex justify-end'>
                        <Link to='/forgetpassword'>
                          <div className='text-xs hover:font-bold hover:underline'>Forget password ?</div>
                        </Link>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full'>
              Sign in
            </Button>
          </form>
        </Form>
        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='px-2 bg-background text-muted-foreground'>Or continue with</span>
          </div>
        </div>
        <Button
          onClick={() => {
            handleGoogleLogin()
          }}
          variant='outline'
          type='button'
          //   disabled={isLoggingGoogle}
        >
          <img className='mr-2 w-7 h-7' alt='google' src={googleIcon} />
          Sign in with Google
          {/* {isLoggingGoogle && <Shell className='w-4 h-4 ml-1 animate-spin' />} */}
        </Button>
        <p className='mx-auto text-sm'>
          Don't have an account?{' '}
          <Link className='text-primary hover:underline font-bold' to='/auth/sign-up'>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
