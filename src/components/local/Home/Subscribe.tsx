import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { subschema } from '@/lib/Schemas/Subscribe'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Subscribe() {
  const form = useForm<z.infer<typeof subschema>>({
    resolver: zodResolver(subschema),
    defaultValues: {
      email: ''
    }
  })
  return (
    <div className='w-full'>
      <Form {...form}>
        <form className='w-full flex flex-col items-center gap-8'>
          <div className='shadow-lg'>
            <p className='volkov-font text-4xl w-full text-center'>Subscribe To Our Newsletter</p>
            <p className='font-light text-gray-400 p-4 text-xs text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam
              sem. Scelerisque duis ultrices sollicitudin{' '}
            </p>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='px-10'>
                  <FormControl>
                    <Input className='p-4 text-lg mb-6 border-none' placeholder='email@gmail.com' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button className='font-thin text-xs'>Subcribe Now</Button>
        </form> 
      </Form>
    </div>
  )
}
