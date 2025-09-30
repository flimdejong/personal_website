'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center gap-4">
      <Image
          src="/flimdejong_cropped.png"
          alt="Profile picture"
          width={50}
          height={50}
          className="rounded-full aspect-square object-cover"
        />
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Flim de Jong
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Master student Robotics (Software & AI)
        </TextEffect>
      </div>
    </header>
  )
}
