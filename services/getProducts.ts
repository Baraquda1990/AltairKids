import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
export default async function getProducts(){
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { data: products,error } = await supabase.from('products')
        .select('id,name,img_name,img_alt,price,linkhref')
  if(error) throw error
  return(products)
}