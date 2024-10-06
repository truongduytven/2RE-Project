import { checkoutSchema } from '@/lib/Schemas/CheckoutSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'

export default function CheckoutForm() {
  const form = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullname: '',
      email: '',
      address: '',
      phonenumber: '',
      paymentmethod: 'QRPAY'
    }
  })

  function onSubmit(data: z.infer<typeof checkoutSchema>) {
    console.log(data)
  }
  return (
    <div className='flex flex-col w-full'>
      <Form {...form}>
        <form className='flex flex-col gap-4 px-10' onSubmit={form.handleSubmit(onSubmit)}>
          <div className='w-full flex text-2xl'>Liên hệ</div>
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
            name='fullname'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormControl>
                  <div className='w-full grid items-center gap-1.5'>
                    <Label htmlFor='firstname'>
                      Tên đầy đủ<span className='text-red-500'>*</span>
                    </Label>
                    <Input {...field} id='firstname' placeholder='Alex' />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phonenumber'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormControl>
                  <div className='w-full grid items-center gap-1.5'>
                    <Label htmlFor='phonenumber'>
                      Số điện thoại<span className='text-red-500'>*</span>
                    </Label>
                    <Input {...field} id='phonenumber' placeholder='It must be 10 digits' />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='address'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormControl>
                  <div className='w-full grid items-center gap-1.5'>
                    <Label htmlFor='address'>
                      Địa chỉ<span className='text-red-500'>*</span>
                    </Label>
                    <Input {...field} id='address' placeholder='Ex: Duong so 6, phuong 12, Go Vap' />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='w-full flex  text-2xl'>Phương thức thanh toán</div>
          <FormField
            control={form.control}
            name='paymentmethod'
            render={({ field }) => (
              <FormItem className='space-y-3'>
                <FormMessage />
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className='flex flex-col space-y-1'
                  >
                    <FormItem className='flex items-center pl-4 space-y-0 border rounded-md '>
                      <FormControl>
                        <RadioGroupItem value='QRPAY' />
                      </FormControl>
                      <FormLabel className='flex items-center gap-4 py-3 font-normal cursor-pointer'>
                        <div>
                          <img
                            src='https://as2.ftcdn.net/v2/jpg/04/31/66/17/1000_F_431661704_SW673ausblKXa0lg0GCSHeJNpSsPbKou.jpg'
                            alt=''
                            className='w-8 h-w-8 ml-9'
                          />
                        </div>
                        QR Pay
                      </FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center pl-4 space-y-0 border rounded-md'>
                      <FormControl>
                        <RadioGroupItem value='COD' />
                      </FormControl>
                      <FormLabel className='flex items-center gap-4 py-3 font-normal cursor-pointer'>
                        <div>
                          <img
                            src='https://img.freepik.com/free-vector/gold-coins-banknotes-3d-cartoon-style-icon-stack-coins-with-dollar-sign-wad-money-cash-savings-flat-vector-illustration-wealth-economy-finance-profit-currency-concept_74855-25998.jpg'
                            alt=''
                            className='w-8 mb-2 h-w-8 ml-9'
                          />
                        </div>
                        Thanh toán khi nhận hàng
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
          <Button>
            Thanh toán ngay <ShoppingBag className='ml-3' size={15} />
          </Button>
        </form>
      </Form>
    </div>
  )
}
