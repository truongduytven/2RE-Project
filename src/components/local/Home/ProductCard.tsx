import { Product } from '@/types';
import { Card } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';

function ProductCard(props: Product) {
  return (
    <Card className='flex flex-col justify-center items-start p-4 shadow-md border-none transition-transform duration-300 hover:shadow-lg hover:-translate-y-2'>
      <div className='w-64 h-44 overflow-hidden rounded-md'>
        <img
          className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
          src={props.mainImage}
          alt={props.name}
        />
      </div>
      <p className='font-semibold mt-2 text-[#484848] transition-colors duration-300 hover:text-black'>
        {props.name} ({props.size})
      </p>
      {/* <p className='text-sm text-gray-400'>{props.size}</p> */}
      <p className='mt-3 text-xs text-[#484848]'>cond {props.cond}%</p>
      <p className='mt-3 text-xl font-semibold text-[#484848] transition-colors duration-300 hover:text-black'>
        {formatCurrency(props.price)}
      </p>
    </Card>
  );
}

export default ProductCard;
