import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { registerSchema } from '@/lib/Schemas/LoginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Logo from '@/assets/Logo.png'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import googleIcon from '@/assets/google.svg'

export default function SignUpForm() {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      phoneNumber: ''
    }
  })
  const handleGoogleLogin = () => {
    console.log('login with google')
  }

  const onSumit = (data: z.infer<typeof registerSchema>) => {
    console.log(data)
  }
  return (
    <div className='w-full h-full flex justify-center items-center py-4 lg:p-8'>
      <div className='w-2/3 mx-auto flex flex-col justify-center space-y-6'>
        <div className='flex flex-col items-center'>
          <div className='font-medium text-2xl flex items-center'>
            Đăng kí <img className='w-10 h-10' src={Logo} alt='logo app' /> với
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSumit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='fullName'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className='w-full grid items-center gap-1.5'>
                      <Label htmlFor='email'>
                        Tên đầy đủ
                        {/* <span className='text-red-500'>*</span> */}
                      </Label>
                      <Input {...field} id='email' placeholder='Ex: Alex' />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem className='flex-1'>
                    <FormControl>
                      <div className='w-full grid items-center gap-1.5'>
                        <Label htmlFor='email'>
                          Email
                          {/* <span className='text-red-500'>*</span> */}
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
                name='phoneNumber'
                render={({ field }) => (
                  <FormItem className='flex-1'>
                    <FormControl>
                      <div className='w-full grid items-center gap-1.5'>
                        <Label htmlFor='password'>
                          Số điện thoại
                          {/* <span className='text-red-500'>*</span> */}
                        </Label>
                        <Input {...field} id='password' type='tel' placeholder='Ex: 0xxxxxxxx' />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <div className='flex gap-6'>
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem className='flex-1'>
                    <FormControl>
                      <div className='w-full grid items-center gap-1.5'>
                        <Label htmlFor='password'>
                          Mật khẩu
                          {/* <span className='text-red-500'>*</span> */}
                        </Label>
                        <Input {...field} id='password' type='password' placeholder='Nhập mật khẩu' />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem className='flex-1'>
                    <FormControl>
                      <div className='w-full grid items-center gap-1.5'>
                        <Label htmlFor='password'>
                          Xác nhận mật khẩu
                          {/* <span className='text-red-500'>*</span> */}
                        </Label>
                        <Input {...field} id='password' type='password' placeholder='Xác nhận' />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type='submit' className='w-full'>
              Đăng kí
            </Button>
          </form>
        </Form>
        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='px-2 bg-background text-muted-foreground'>Hoặc tiếp tục với</span>
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
          Tiếp tục với Google
          {/* {isLoggingGoogle && <Shell className='w-4 h-4 ml-1 animate-spin' />} */}
        </Button>
        <p className='mx-auto text-sm'>
          Bạn đã có tài khoản?{' '}
          <Link className='text-primary hover:underline font-bold' to='/auth/sign-in'>
            Đăng nhập ngay
          </Link>
        </p>
      </div>
    </div>
  )
}
