import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

import hljs from 'highlight.js/lib/core'
import python from 'highlight.js/lib/languages/python'
import 'highlight.js/styles/tomorrow-night-blue.css'
import Testimonials from '@/components/Testimonials'

hljs.registerLanguage('python', python)

import { useEffect, useRef } from 'react'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-400 transition group-hover:fill-zinc-300" />
    </Link>
  )
}

function CodeSnippet() {
  const ref = useRef(null)
  useEffect(() => {
    hljs.highlightBlock(ref.current)
  }, [])
  const pythonCode = `from robyn import Robyn

app = Robyn(__file__)

@app.get("/")
async def h(request):
    return "Hello, world!"

app.start(port=8080)`
  return (
    <div className="mt-6 rounded-b-xl rounded-t-xl bg-gray-900">
      <div className="flex rounded-t-xl bg-gray-800/40 ring-1 ring-white/5">
        <div className="-mb-px flex rounded-t-xl text-sm font-medium leading-6 text-gray-400">
          <div className="rounded-t-xl-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
            app.py
          </div>
        </div>
      </div>
      <div className="px-6 pb-14 pt-6">
        <pre className=" rounded  !bg-gray-900 p-4">
          <code ref={ref} className="language-python !bg-gray-900">
            {pythonCode}
          </code>
        </pre>
      </div>
    </div>
  )
}

function Example() {
  return (
    <div className="relative isolate h-full w-full rounded-t-xl  bg-gradient-to-b from-indigo-100/20">
      <CodeSnippet />
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Robyn - A Fast, Innovator Friendly, and Community Driven Python Web
          Framework.
        </title>
        <meta
          name="description"
          content="Robyn - A Fast, Innovator Friendly, and Community Driven Python Web Framework.
"
        />
      </Head>

      <Container className="mt-10 md:mt-14">
        <div className="relative isolate pt-4">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-orange-800 to-yellow-500 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center sm:max-w-4xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Meet<span className="text-yellow-400"> Robyn</span>
                </h1>
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
                  A Fast, Innovator Friendly, and Community Driven Python Web
                  Framework
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Robyn merges Python's async capabilities with a Rust runtime
                  for reliable, scalable web solutions. Experience quick project
                  scaffolding, enjoyable usage, and robust plugin support.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="/documentation"
                    className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    Get started
                  </a>
                  <a
                    href="https://github.com/sparckles/robyn"
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <Example />
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-orange-800 to-yellow-500 opacity-60 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </Container>
      {/* <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div> */}
      <Testimonials />
      <Container></Container>
      <Container className="mt-9">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-yellow-400">
              Our Philosophy
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Fast. Innovator Friendly. Robust. Community Driven.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            <div className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                    clip-rule="evenodd"
                  />
                </svg>
                Fast.{' '}
              </dt>
              <dd className="inline">
                Robyn, written in Rust, embodies speed and reliability. Our
                multithreaded runtime creates a highly efficient and secure
                environment optimized for peak performance.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clip-rule="evenodd"
                  />
                </svg>
                Extensible.{' '}
              </dt>
              <dd className="inline">
                Robyn's structure is designed to adapt and grow alongside your
                project. This flexibility lies at the core of our framework,
                paving the way for a seamless extension of features as your
                needs evolve.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                    clip-rule="evenodd"
                  />
                </svg>
                Simplified API.
              </dt>
              <dd className="inline">
                With Robyn, complexity takes a backseat. Our API is simple yet
                potent, built to streamline your development process and
                minimize your workload.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2.5c-1.31 0-2.526.386-3.546 1.051a.75.75 0 01-.82-1.256A8 8 0 0118 9a22.47 22.47 0 01-1.228 7.351.75.75 0 11-1.417-.49A20.97 20.97 0 0016.5 9 6.5 6.5 0 0010 2.5zM4.333 4.416a.75.75 0 01.218 1.038A6.466 6.466 0 003.5 9a7.966 7.966 0 01-1.293 4.362.75.75 0 01-1.257-.819A6.466 6.466 0 002 9c0-1.61.476-3.11 1.295-4.365a.75.75 0 011.038-.219zM10 6.12a3 3 0 00-3.001 3.041 11.455 11.455 0 01-2.697 7.24.75.75 0 01-1.148-.965A9.957 9.957 0 005.5 9c0-.028.002-.055.004-.082a4.5 4.5 0 018.996.084V9.15l-.005.297a.75.75 0 11-1.5-.034c.003-.11.004-.219.005-.328a3 3 0 00-3-2.965zm0 2.13a.75.75 0 01.75.75c0 3.51-1.187 6.745-3.181 9.323a.75.75 0 11-1.186-.918A13.687 13.687 0 009.25 9a.75.75 0 01.75-.75zm3.529 3.698a.75.75 0 01.584.885 18.883 18.883 0 01-2.257 5.84.75.75 0 11-1.29-.764 17.386 17.386 0 002.078-5.377.75.75 0 01.885-.584z"
                    clip-rule="evenodd"
                  />
                </svg>
                Flexible Design.
              </dt>
              <dd className="inline">
                Robyn supports both sync and async functions. This provides you
                the freedom to architect your applications to best suit your
                project requirements.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  />
                </svg>
                Dynamic Navigation.
              </dt>
              <dd className="inline">
                Robyn ensures efficient navigation within your application with
                dynamic URL routing, empowering you with full control over your
                application's flow.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                  <path
                    fill-rule="evenodd"
                    d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                    clip-rule="evenodd"
                  />
                </svg>
                Real-time Communication.{' '}
              </dt>
              <dd className="inline">
                Robyn offers built-in support for WebSockets, enabling swift,
                two-way interaction between the client and server.
              </dd>
            </div>

            <div className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                  <path
                    fill-rule="evenodd"
                    d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                    clip-rule="evenodd"
                  />
                </svg>
                Customizable Workflows.
              </dt>
              <dd className="inline">
                With middleware support, Robyn offers you a way to define your
                request-response workflows precisely. This level of
                customization enhances functionality like error handling and
                request modification.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                  <path
                    fill-rule="evenodd"
                    d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                    clip-rule="evenodd"
                  />
                </svg>
                Productivity Boost.
              </dt>
              <dd className="inline">
                Robyn's hot reloading feature eliminates the need for manual
                server restarts, displaying your changes in real-time, and
                speeding up your development process.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                  <path
                    fill-rule="evenodd"
                    d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                    clip-rule="evenodd"
                  />
                </svg>
                Community First and Truly FOSS.
              </dt>
              <dd className="inline">
                Rooted in a community-first ethos, Robyn is built with
                collective effort and is a true representation of free and
                open-source software.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                  <path
                    fill-rule="evenodd"
                    d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                    clip-rule="evenodd"
                  />
                </svg>
                Under Active Development!
              </dt>
              <dd className="inline">
                The journey with Robyn is one of continuous evolution. Our team
                of dedicated developers is tireless in ensuring that Robyn stays
                updated, providing you with the latest technology and features
                at your fingertips.
              </dd>
            </div>
          </dl>
        </div>
      </Container>
      <Container>
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Some of our stats
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  Robyn is going strong!
                </p>
              </div>
              <dl className="mt-16 grid grid-cols-1  gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col justify-center bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    Robyn installs
                  </dt>
                  {/* <a href="https://www.digitalocean.com/?refcode=3f2b9fd4968d&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge" target="_blank" rel="noopener noreferrer">
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    <img src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg" alt="Digital Ocean" />
                  </dd>
                  </a> */}

                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  980,000+
                  </dd>

                </div>
                <div className="flex flex-col justify-center  bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    Stars on Github
                  </dt>
                  {/* <a href="https://github.com/appwrite" target="_blank" rel="noopener noreferrer">
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    <img src="https://avatars.githubusercontent.com/u/25003669?s=200&v=4" alt="AppWrite" />
                  </dd>
                  </a> */}

                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    2,900+
                  </dd>

                </div>
                <div className="flex flex-col  bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    Community Contributors
                  </dt>
                  {/* <a href="https://github.com/shivaylamba" target="_blank" rel="noopener noreferrer">
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    <img src="https://avatars.githubusercontent.com/u/19529592?v=4" alt="Shivay Lamba" className='rounded-full' />
                  </dd>
                  </a> */}
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  50+
                  </dd>
                </div>
                <div className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    Community Members
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    100+
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="relative isolate overflow-hidden ">
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Dive In?
                <br />
                Start using Robyn today.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Go through a small tutorial or read the docs to get started.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/documentation"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                <stop stopColor="#ca8a04" />
                <stop offset={1} stopColor="#9a3142" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </Container>
    </>
  )
}
