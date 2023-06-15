import Layout from '../components/layout'
import { motion } from 'framer-motion'
import myImg from "../public/ht.jfif"

export default function Home() {
  return (
    <Layout>
      <motion.div
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <img className="w-32 h-32 mb-8 rounded-full" src={myImg} alt="Huraira" />
          <h1 className="mx-auto text-2xl font-semibold tracking-widest text-center sm:text-3xl">
            HURAIRA TARIQ
          </h1>
          <hr className="w-16 my-8 border-gray-300" />
          <h2 className="text-lg tracking-widest text-center">MACHINE LEARNING ENGINEER</h2>
        </div>
      </motion.div>
    </Layout>
  )
}
