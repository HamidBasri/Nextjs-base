import React from "react"
import Image from "next/image"
import Link from "next/link"

const Page404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/images/404-page copy.webp"
        alt="404 image"
        width="400"
        height="300"
      />
      <h1 className="text-base font-bold">Page Not Found</h1>
      <button className="mt-5 pyw-2 px-4-2 bg-white hover:bg-gray-100">
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </button>
    </div>
  )
}

export default Page404
