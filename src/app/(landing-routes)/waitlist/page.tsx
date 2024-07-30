// pages/index.tsx
import Image from 'next/image'
import { left, right } from '../../../../public/images/waitlist/utils'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <div className="relative w-full max-w-md mx-auto">
        <h1 className="text-2xl font-bold">Don't miss out, join the queue and get to know first</h1>
        <p className="mt-4">Be the first to experience our new features. Sign up now to stay updated!</p>
        <form className="mt-6">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700"
          >
            Get Access
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-500">Join the 2000+ others waiting.</p>
      </div>
      <div className="absolute bottom-0 left-0 mb-4 ml-4">
        <Image src={left} alt="Left Character" width={300} height={200} />
      </div>
      <div className="absolute bottom-0 right-0 mb-4 mr-4">
        <Image src={right} alt="Right Character" width={300} height={200} />
      </div>
    </div>
  )
}
