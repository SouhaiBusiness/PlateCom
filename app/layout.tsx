import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import ClientProviders from '@/components/shared/client-providers'
import { getDirection } from '@/i18n-config'
//import { NextIntlClientProvider } from 'next-intl'
//import { getMessages } from 'next-intl/server'
import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from '@/lib/constants'
import { Metadata } from 'next'
//import { routing } from '@/i18n/routing'
 
//import { getSetting } from '@/lib/actions/setting.actions'
 

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {

    title: {
      template: `%s | ${APP_NAME}`,
      default: `${APP_NAME}. ${APP_SLOGAN}`,
    },
    description: APP_DESCRIPTION,
}

export default async function AppLayout({
  params,
  children,
}: {
  params: { locale: string }
  children: React.ReactNode
}) {
   
   
 
  const { locale } = await params
  // Ensure that the incoming `locale` is valid
  
 
 // const messages = await getMessages()

  return (
    <html
      lang={locale}
      dir={getDirection(locale) === 'rtl' ? 'rtl' : 'ltr'}
      suppressHydrationWarning
    >
      <body
        className={`min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
          <ClientProviders>
            {children}
          </ClientProviders>
       
      </body>
    </html>
  )
}