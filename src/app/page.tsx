'use client';

import styles from './page.module.css'
import { Cards } from '@/app/components/cardsContainer';
import { ActionCardStack } from '@/app/components/cardStack/ActionCardStack';


export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.description}>
        <Cards />
      </div>

     <div className={styles.description}>
        <ActionCardStack cardCount={0} onActionCardStackClick={() => console.log('click')}/>
        <ActionCardStack cardCount={1} onActionCardStackClick={() => console.log('click')}/>
        <ActionCardStack cardCount={2} onActionCardStackClick={() => console.log('click')}/>
        <ActionCardStack cardCount={30} onActionCardStackClick={() => console.log('click')}/>
      </div>

           <div className={styles.description}>

        <ActionCardStack cardCount={130} onActionCardStackClick={() => console.log('click')}/>
      </div>
    </main>
  )
}


 
