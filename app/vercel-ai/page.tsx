'use client'
import { Loading } from '@/components/loading';
import { RecipeCard } from '@/components/recipe-card';
import { Input } from '@/components/ui/input';
import { recipeSchema } from '@/src/recipeSchema';
import { experimental_useObject as useObject } from 'ai/react';
import { useState } from 'react';

const VercelAiPage = () => {
  const [prompt, setPrompt] = useState('Spaghetti Carbonara');
  const { object, submit, isLoading } = useObject({
    schema: recipeSchema,
    api: '/vercel-ai/api',
    initialValue: {
      name: '',
      ingredients: [],
      steps: []
    }
  })
  console.log(object)
  return (
    <div className='flex flex-col gap-4'>
      <Input
        value={prompt}
        disabled={isLoading}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={(e) =>
        {
          if (e.key === 'Enter') {
            submit({ prompt })
            setPrompt('')
         }}}
        placeholder='What recipe do you want?'
      />
      {isLoading && <Loading />}
      <RecipeCard recipe={object as any} />
    </div>
  )
}

export default VercelAiPage