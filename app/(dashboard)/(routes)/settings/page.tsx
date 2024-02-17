import { Heading } from '@/components/heading'
import { SubscriptionButton } from '@/components/subscription-button'
import { checkSubscription } from '@/lib/subscription'
import { CheckCircle, Settings } from 'lucide-react'
import React from 'react'

type Props = {}

const SettingsPage = async (props: Props) => {

    const isPro = await checkSubscription();

  return (
    <div>
        <Heading 
        title='Settings'
        description='Manage account settings'
        icon={Settings}
        iconColor='text-gray-700'
        bgColor='bg-gray-700/10'
        />
        <div className='px-4 lg:px-8 space-y-4'>
            <div className='text-muted-foreground text-sm'>
                {isPro ?                 <div className='flex items-center'>
                  <CheckCircle className='w-5 h-5 mr-2 text-green-500' />
                  You are currently on a pro plan. 
                  </div> :  
                "You are currently on free plan"
                }
            </div>
            <SubscriptionButton isPro={isPro} />
        </div>
    </div>
  )
}

export default SettingsPage;