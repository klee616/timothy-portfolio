import React from "react"
import styles from './ProjectList.module.css'
import ContentCard from '@/components/ContentCard'

const Index = () => {
  return (<>
    <section className={styles.sectionContainer}>
      <div className={styles.projectContainer}>
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      </div>
    </section>
  </>)
}
export default Index;